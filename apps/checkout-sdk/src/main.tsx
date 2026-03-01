import React from 'react';
import { createRoot } from 'react-dom/client';
import { ZenWalletCheckout } from './components/ZenWalletCheckout';
import './index.css';

interface ZenWalletOptions {
    order_id: string;
    key: string;
    amount?: number;
    currency?: string;
    name?: string;
    description?: string;
    handler?: (response: any) => void;
    onSuccess?: (response: any) => void;
    onFailure?: (error: any) => void;
    theme?: {
        color?: string;
    };
}

class ZenWallet {
    private options: ZenWalletOptions;

    constructor(options: ZenWalletOptions) {
        this.options = {
            ...options,
            onSuccess: options.onSuccess || options.handler,
            onFailure: options.onFailure || (() => { })
        };
    }

    open() {
        const options = this.options;
        const rootId = 'zenwallet-checkout-root';
        let container = document.getElementById(rootId);

        if (!container) {
            container = document.createElement('div');
            container.id = rootId;
            document.body.appendChild(container);
        }

        const root = createRoot(container);

        const close = () => {
            root.unmount();
            container?.remove();
        };

        root.render(
            <ZenWalletCheckout
                orderId={options.order_id}
                publicKey={options.key}
                onSuccess={(res: any) => {
                    options.onSuccess?.(res);
                    close();
                }}
                onFailure={(err: any) => {
                    options.onFailure?.(err);
                    // Don't close immediately on failure so user can see error
                }}
            />
        );
    }

    static open(options: ZenWalletOptions) {
        const instance = new ZenWallet(options);
        instance.open();
    }
}

// Expose to window
if (typeof window !== 'undefined') {
    (window as any).ZenWallet = ZenWallet;
    (window as any).ZenPay = ZenWallet;
    console.log("🚀 ZenWallet/ZenPay SDK Loaded correctly from port 4000");
}

export default ZenWallet;
