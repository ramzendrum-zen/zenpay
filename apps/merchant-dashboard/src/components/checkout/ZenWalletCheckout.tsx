import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE } from '../../lib/config';

interface CheckoutProps {
    orderId: string;
    amount: number;
    currency: string;
    merchantName: string;
    onSuccess: (response: any) => void;
}

type Step = 'SELECT_METHOD' | 'CARD_FORM' | 'UPI_FORM' | 'PROCESSING' | 'SUCCESS' | 'FAILURE';

export const ZenWalletCheckout: React.FC<CheckoutProps> = ({
    orderId,
    amount,
    currency,
    merchantName,
    onSuccess
}) => {
    const [step, setStep] = useState<Step>('SELECT_METHOD');
    const [error, setError] = useState<string | null>(null);

    // Form States
    const [upiId, setUpiId] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    const formattedAmount = (amount / 100).toLocaleString('en-IN', {
        style: 'currency',
        currency: currency,
    });

    const handlePayment = async (method: 'card' | 'upi') => {
        setError(null);
        setStep('PROCESSING');

        try {
            const endpoint = method === 'card' ? '/api/pay/card' : '/api/pay/upi';
            const payload = method === 'card'
                ? { orderId, cardNumber, expiry, cvv, userId: 'demo_user_123' }
                : { orderId, upiId };


            const response = await axios.post(`${API_BASE}${endpoint}`, payload);

            if (response.data.status === 'success') {
                setStep('SUCCESS');
                setTimeout(() => onSuccess(response.data), 2000);
            } else {
                setError('Payment failed.');
                setStep('FAILURE');
            }
        } catch (err: any) {
            setError(err.response?.data?.error || 'An error occurred');
            setStep('FAILURE');
        } finally {
            // Done processing
        }
    };

    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1000px] gap-8 mx-auto font-display">
            {/* Left Sidebar: Order Summary */}
            <aside className="w-full md:w-[350px] flex flex-col gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl">shopping_bag</span>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold">Order Summary</h3>
                            <p className="text-slate-500 text-xs">Merchant: {merchantName}</p>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-3">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-500">Order ID</span>
                            <span className="text-slate-900 dark:text-white font-medium">{orderId}</span>
                        </div>
                        <div className="flex justify-between items-center border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                            <span className="text-slate-900 dark:text-white font-bold">Total Amount</span>
                            <span className="text-primary text-xl font-bold">{formattedAmount}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4 px-2 opacity-60">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                        PCI-DSS Compliant
                    </div>
                </div>
            </aside>

            {/* Right Content: Flow Container */}
            <section className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm min-h-[500px] flex flex-col">
                {step === 'SELECT_METHOD' && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Select Payment Method</h2>
                            <p className="text-slate-500 text-sm">Choose how you'd like to pay securely.</p>
                        </div>

                        <div className="space-y-3">
                            {[
                                { id: 'CARD_FORM', name: 'Card', desc: 'Visa, Mastercard, RuPay', icon: 'credit_card', color: 'blue' },
                                { id: 'UPI_FORM', name: 'UPI', desc: 'Google Pay, PhonePe, Paytm', icon: 'qr_code_2', color: 'purple' },
                                { id: 'NETBANKING', name: 'Netbanking', desc: 'All Indian banks', icon: 'account_balance', color: 'orange' },
                                { id: 'WALLET', name: 'Wallet', desc: 'Amazon Pay, ZenWallet', icon: 'account_balance_wallet', color: 'emerald' },
                            ].map((m: any) => (
                                <button
                                    key={m.id}
                                    onClick={() => setStep(m.id as Step)}
                                    className="w-full group flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`h-12 w-12 flex items-center justify-center rounded-lg bg-${m.color}-50 dark:bg-${m.color}-900/20 text-${m.color}-600 dark:text-${m.color}-400`}>
                                            <span className="material-symbols-outlined text-2xl">{m.icon}</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white uppercase text-xs tracking-wider">{m.name}</p>
                                            <p className="text-xs text-slate-500">{m.desc}</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 'CARD_FORM' && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex-1 flex flex-col">
                        <button onClick={() => setStep('SELECT_METHOD')} className="mb-6 flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-wider hover:opacity-70 transition-opacity">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                        </button>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Card Details</h2>
                            <p className="text-slate-500 text-sm">Securely enter your card information.</p>
                        </div>

                        <form className="space-y-5 flex-1" onSubmit={(e) => { e.preventDefault(); handlePayment('card'); }}>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Card Number</label>
                                <div className="relative">
                                    <input
                                        className="w-full h-14 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="0000 0000 0000 0000"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        required
                                    />
                                    <div className="absolute right-4 top-4 text-slate-400">
                                        <span className="material-symbols-outlined">credit_card</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Expiry</label>
                                    <input
                                        className="w-full h-14 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                        placeholder="MM/YY"
                                        value={expiry}
                                        onChange={(e) => setExpiry(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">CVV</label>
                                    <input
                                        className="w-full h-14 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                        placeholder="•••"
                                        type="password"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <button className="w-full bg-primary text-white h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-primary/20 mt-auto active:scale-[0.98]">
                                Pay {formattedAmount}
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </form>
                    </div>
                )}

                {step === 'UPI_FORM' && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex-1 flex flex-col">
                        <button onClick={() => setStep('SELECT_METHOD')} className="mb-6 flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-wider hover:opacity-70 transition-opacity">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                        </button>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">UPI Payment</h2>
                            <p className="text-slate-500 text-sm">Pay using any UPI app like GPay, PhonePe, or Paytm.</p>
                        </div>

                        <div className="space-y-6 flex-1 flex flex-col">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">VPA / UPI ID</label>
                                <input
                                    className="w-full h-14 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-lg"
                                    placeholder="ram@zenwallet"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value)}
                                />
                            </div>

                            <div className="mx-auto w-full max-w-[300px] p-6 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Authorized Transaction Gateway</p>
                            </div>

                            <button
                                onClick={() => handlePayment('upi')}
                                disabled={!upiId}
                                className="w-full bg-primary text-white h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-primary/20 mt-auto disabled:opacity-50 active:scale-[0.98]"
                            >
                                Verify & Pay {formattedAmount}
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                )}

                {step === 'PROCESSING' && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-6"></div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Processing Payment</h2>
                        <p className="text-slate-500 text-sm mt-2">Please do not refresh or close this window.</p>
                    </div>
                )}

                {step === 'SUCCESS' && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                            <span className="material-symbols-outlined text-5xl">check_circle</span>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Payment Successful!</h2>
                        <p className="text-slate-500 text-sm mt-2">Your transaction has been captured successfully.</p>
                        <div className="mt-8 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800 text-[10px] font-mono text-emerald-700 dark:text-emerald-400">
                            SIGNATURE: {Math.random().toString(36).substring(7)}...
                        </div>
                    </div>
                )}

                {step === 'FAILURE' && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center delay-100">
                        <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center text-rose-600 mb-6">
                            <span className="material-symbols-outlined text-5xl">error</span>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Payment Failed</h2>
                        <p className="text-slate-500 text-sm mt-2">{error || 'Something went wrong.'}</p>
                        <button
                            onClick={() => setStep('SELECT_METHOD')}
                            className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Security Footer inside section */}
                <div className="flex items-center justify-center gap-2 mt-auto py-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-emerald-500 text-sm">lock</span>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Secure 256-bit SSL Transaction</p>
                </div>
            </section>
        </div>
    );
};
