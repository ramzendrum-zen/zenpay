import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const MerchantDemo: React.FC = () => {
    const { merchant } = useAuth();
    const [paymentStatus, setPaymentStatus] = useState<'IDLE' | 'SUCCESS' | 'FAILURE'>('IDLE');

    const handleCheckout = () => {
        // For this monorepo demo, we assume ZenWallet is available on window
        if ((window as any).ZenWallet) {
            (window as any).ZenWallet.open({
                key: merchant?.publicKey || 'pk_live_demo_123',
                order_id: 'order_' + Math.random().toString(36).substring(7),
                onSuccess: (response: any) => {
                    console.log('Payment Successful:', response);
                    setPaymentStatus('SUCCESS');
                },
                onFailure: (error: any) => {
                    console.error('Payment Failed:', error);
                    setPaymentStatus('FAILURE');
                }
            });
        } else {
            alert('ZenWallet SDK not loaded. Make sure the checkout-sdk is built and served.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-12 text-center shadow-xl">
                <div className="size-20 bg-blue-600/10 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-8">
                    <span className="material-symbols-outlined text-4xl">shopping_cart</span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Sample Merchant Store</h1>
                <p className="text-slate-500 max-w-lg mx-auto mb-10 text-lg">
                    Experience the seamless ZenWallet checkout flow. This demo simulates a real merchant integration using our embeddable SDK.
                </p>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 mb-10 border border-slate-100 dark:border-slate-800 text-left">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-slate-500 font-medium font-bold uppercase tracking-widest text-[10px]">Premium Subscription</span>
                        <span className="text-xl font-bold text-slate-900 dark:text-white">₹ 10,500.00</span>
                    </div>
                    <p className="text-xs text-slate-400">Annual billing • Pro Features • Priority Support</p>
                </div>

                {paymentStatus === 'SUCCESS' ? (
                    <div className="bg-emerald-50 text-emerald-700 p-6 rounded-3xl font-bold flex items-center justify-center gap-3 border border-emerald-100">
                        <span className="material-symbols-outlined">check_circle</span>
                        Payment Successful! Thank you for your purchase.
                    </div>
                ) : (
                    <button
                        onClick={handleCheckout}
                        className="w-full h-18 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-3xl font-bold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-slate-900/20"
                    >
                        Pay with ZenWallet
                    </button>
                )}
            </div>
        </div>
    );
};

export default MerchantDemo;
