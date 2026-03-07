import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { API_BASE } from '../lib/config';

const MerchantDemo: React.FC = () => {
    const { merchant, token } = useAuth();
    const [paymentStatus, setPaymentStatus] = useState<'IDLE' | 'SUCCESS' | 'FAILURE'>('IDLE');

    const handleCheckout = async () => {
        try {
            // 1. Create a real test order record
            const { data: orderRes } = await axios.post(`${API_BASE}/orders`, {
                amount: 1050000, // ₹ 10,500.00 in paise
                currency: 'INR',
                receipt: 'demo_' + Date.now()
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Idempotency-Key': 'demo_' + Math.random().toString(36).substring(7)
                }
            });

            const realOrderId = orderRes.data.id;

            if (!(window as any).ZenWallet) {
                const script = document.createElement('script');
                script.src = 'http://localhost:5174/src/loader.ts';
                script.type = 'module';
                script.onload = () => setTimeout(() => launchCheckout(realOrderId), 500);
                document.head.appendChild(script);
            } else {
                launchCheckout(realOrderId);
            }
        } catch (err) {
            console.error('Failed to create demo order:', err);
            setPaymentStatus('FAILURE');
        }
    };

    const launchCheckout = (realOrderId: string) => {
        if ((window as any).ZenWallet) {
            (window as any).ZenWallet.open({
                key: merchant?.publicKey || 'pk_live_demo_123',
                order_id: realOrderId,
                onSuccess: (response: any) => {
                    console.log('Payment Successful:', response);
                    setPaymentStatus('SUCCESS');
                },
                onFailure: (error: any) => {
                    console.error('Payment Failed:', error);
                    setPaymentStatus('FAILURE');
                }
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="bg-white rounded-[2rem] border border-slate-200 p-12 text-center shadow-xl">
                <div className="size-20 bg-blue-50 border border-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-8 shadow-sm">
                    <span className="material-symbols-outlined text-4xl">shopping_cart</span>
                </div>

                <h1 className="text-4xl font-black tracking-tight mb-4 text-slate-900 leading-none">Sample Merchant Store</h1>
                <p className="text-slate-500 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
                    Experience the seamless ZenWallet checkout flow. This demo simulates a real merchant integration using our embeddable SDK.
                </p>

                <div className="bg-slate-50 rounded-3xl p-8 mb-10 border border-slate-100 text-left">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Premium Subscription</span>
                        <span className="text-2xl font-black text-slate-900 leading-none">₹ 10,500.00</span>
                    </div>
                    <p className="text-xs font-medium text-slate-400">Annual billing • Pro Features • Priority Support</p>
                </div>

                {paymentStatus === 'SUCCESS' ? (
                    <div className="bg-emerald-50 text-emerald-700 p-6 rounded-2xl font-bold flex items-center justify-center gap-3 border border-emerald-100">
                        <span className="material-symbols-outlined text-xl">check_circle</span>
                        Payment Successful! Thank you for your purchase.
                    </div>
                ) : (
                    <button
                        onClick={handleCheckout}
                        className="w-full h-16 bg-slate-900 text-white rounded-[2rem] font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                        <span className="material-symbols-outlined">payments</span>
                        Pay with ZenWallet
                    </button>
                )}
            </div>
        </div>
    );
};

export default MerchantDemo;
