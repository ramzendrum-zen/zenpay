interface ZenWalletOptions {
    key: string;
    order_id?: string;
    name?: string;
    description?: string;
    handler?: (response: any) => void;
    onSuccess?: (response: any) => void;
    onFailure?: (error: any) => void;
    checkoutUrl?: string; // allow override for local dev
}

class ZenWallet {
    private options: ZenWalletOptions;
    private iframeInfo: HTMLIFrameElement | null;

    constructor(options: ZenWalletOptions) {
        this.options = { ...options };
        this.iframeInfo = null;
        this._setupMessageListener();
    }

    private _setupMessageListener() {
        window.addEventListener("message", (event) => {
            if (!event.data || event.data.source !== "zenwallet-checkout") return;

            const { type, payload } = event.data;

            switch (type) {
                case "PAYMENT_SUCCESS":
                    if (this.options.onSuccess) this.options.onSuccess(payload);
                    else if (this.options.handler) this.options.handler(payload);
                    this.close();
                    break;
                case "PAYMENT_FAILED":
                    if (this.options.onFailure) this.options.onFailure(payload);
                    break;
                case "MODAL_CLOSE":
                    this.close();
                    break;
            }
        });
    }

    open(checkoutOptions?: Partial<ZenWalletOptions>) {
        const orderId = checkoutOptions?.order_id || this.options.order_id;
        if (!orderId) throw new Error("ZenWallet: order_id is required");

        const iframe = document.createElement("iframe");

        // Pointing to our React App URL (in dev it's 5174, in prod it's on the Render public folder)
        const backendUrl = this.options.checkoutUrl || "https://zenpay-jshp.onrender.com/checkout/";

        const params = new URLSearchParams({
            key: this.options.key,
            order_id: orderId,
            name: checkoutOptions?.name || this.options.name || "",
        });

        iframe.src = `${backendUrl}?${params.toString()}`;
        iframe.style.position = "fixed";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.style.zIndex = "999999";
        iframe.style.background = "transparent";
        iframe.allow = "payment";

        document.body.appendChild(iframe);
        document.body.style.overflow = "hidden"; // Prevent merchant page scrolling

        this.iframeInfo = iframe;
    }

    close() {
        if (this.iframeInfo) {
            this.iframeInfo.remove();
            this.iframeInfo = null;
            document.body.style.overflow = ""; // Restore scrolling
        }
    }

    static open(options: ZenWalletOptions) {
        const instance = new ZenWallet(options);
        instance.open(options);
    }
}

// Expose safely to merchant window
if (typeof window !== "undefined") {
    (window as any).ZenWallet = ZenWallet;
    (window as any).ZenPay = ZenWallet;
    console.log("🚀 ZenWallet Loader SDK Initialized (v1.0.0)");
}

export default ZenWallet;
