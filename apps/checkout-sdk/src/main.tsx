import React from 'react';
import { createRoot } from 'react-dom/client';
import { ZenWalletCheckout } from './components/ZenWalletCheckout';
import './index.css';

// Read URL parameters provided by the loader iframe src
const params = new URLSearchParams(window.location.search);
const orderId = params.get('order_id') || params.get('orderId');
const publicKey = params.get('key');
// const isTesting = params.get('test') === 'true';

const handleSuccess = (res: any) => {
    window.parent.postMessage({
        source: 'zenwallet-checkout',
        type: 'PAYMENT_SUCCESS',
        payload: res
    }, "*");
};

const handleFailure = (err: any) => {
    window.parent.postMessage({
        source: 'zenwallet-checkout',
        type: 'PAYMENT_FAILED',
        payload: err
    }, "*");
};

// If someone closes the checkout modal directly in UI
const handleClose = () => {
    window.parent.postMessage({
        source: 'zenwallet-checkout',
        type: 'MODAL_CLOSE'
    }, "*");
}

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);

    // In dev mode (not in iframe), provide mock if missing, else just render
    if (!orderId || !publicKey) {
        root.render(
            <div className="flex items-center justify-center h-screen bg-gray-100 font-sans">
                <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                    <h1 className="text-xl font-bold text-gray-800 mb-2">Checkout SDK Hosted App</h1>
                    <p className="text-gray-500 mb-6 text-sm">This page is meant to be opened via the ZenWallet Loader within an Iframe.</p>
                    <div className="text-xs text-left bg-gray-50 p-4 rounded text-gray-600 font-mono">
                        Usage: ?key=pk_live_xx&order_id=ord_xxx
                    </div>
                </div>
            </div>
        );
    } else {
        root.render(
            <ZenWalletCheckout
                orderId={orderId}
                publicKey={publicKey}
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                // @ts-ignore
                onClose={handleClose}
            />
        );
    }
}
