import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export const ZenPayCheckout: React.FC<CheckoutProps> = ({
    orderId,
    amount,
    currency,
    merchantName,
    onSuccess
}) => {
    const [step, setStep] = useState<Step>('SELECT_METHOD');
    const [error, setError] = useState<string | null>(null);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);

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
                setError('Payment failed. Please check your credentials.');
                setStep('FAILURE');
            }
        } catch (err: any) {
            setError(err.response?.data?.error || 'A network error occurred');
            setStep('FAILURE');
        }
    };

    return (
        <div className="w-full max-w-[900px] mx-auto min-h-[600px] flex flex-col font-sans antialiased text-slate-900 overflow-hidden rounded-3xl bg-white dark:bg-slate-950 shadow-2xl shadow-slate-200 dark:shadow-black/40 border border-slate-100 dark:border-slate-800">
            
            {/* Header: Brand & Progress */}
            <header className="px-6 py-4 border-b border-slate-50 dark:border-slate-900 flex items-center justify-between bg-white dark:bg-slate-950 sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                        <span className="material-symbols-outlined text-xl">payments</span>
                    </div>
                    <span className="font-black text-lg tracking-tighter italic">ZenPay<span className="text-blue-600 not-italic">OS</span></span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Total Due</p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{formattedAmount}</p>
                    </div>
                    <button 
                        onClick={() => setIsSummaryOpen(!isSummaryOpen)}
                        className="p-2 bg-slate-50 dark:bg-slate-900 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
                    >
                        <span className="material-symbols-outlined text-xl">{isSummaryOpen ? 'close' : 'receipt_long'}</span>
                    </button>
                </div>
            </header>

            {/* Mobile-Friendly Drawer for Summary */}
            <AnimatePresence>
                {isSummaryOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800"
                    >
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400 font-bold uppercase tracking-widest">Merchant</span>
                                <span className="text-slate-900 dark:text-white font-bold">{merchantName}</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400 font-bold uppercase tracking-widest">Order ID</span>
                                <span className="text-slate-900 dark:text-white font-mono">{orderId}</span>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                                <span className="text-slate-900 dark:text-white font-black uppercase text-[10px] tracking-[0.2em]">Payable Amount</span>
                                <span className="text-xl font-black text-blue-600 tracking-tight">{formattedAmount}</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-1 flex flex-col md:flex-row relative">
                
                {/* Visual Sidebar - Hidden on mobile or made subtle */}
                <div className="hidden md:flex w-[320px] bg-slate-50/50 dark:bg-slate-900/20 border-r border-slate-50 dark:border-slate-900 p-8 flex-col justify-between">
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Security Protocol</h3>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Encrypted Node Transaction</h4>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">Your financial data is obfuscated through decentralized liquidity nodes and verified via HMAC-SHA256 signatures.</p>
                        
                        <div className="space-y-3 pt-4">
                            <div className="flex items-center gap-3 text-emerald-500">
                                <span className="material-symbols-outlined text-sm">verified</span>
                                <span className="text-[10px] font-black uppercase tracking-widest">PCI-DSS Level 1</span>
                            </div>
                            <div className="flex items-center gap-3 text-blue-500">
                                <span className="material-symbols-outlined text-sm">lock</span>
                                <span className="text-[10px] font-black uppercase tracking-widest">SSL 256-Bit</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Verified Gateway</span>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6 sm:p-12 flex flex-col min-h-[500px] bg-white dark:bg-slate-950">
                    <AnimatePresence mode="wait">
                        {step === 'SELECT_METHOD' && (
                            <motion.div 
                                key="methods"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8 h-full flex flex-col"
                            >
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Payment Access</h2>
                                    <p className="text-sm text-slate-500 font-medium">Select your preferred liquidity channel.</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { id: 'CARD_FORM', name: 'Credit / Debit', desc: 'Secure Global Gateway', icon: 'credit_card', color: 'blue' },
                                        { id: 'UPI_FORM', name: 'Instant UPI', desc: 'PhonePe, GPay, Paytm', icon: 'qr_code_2', color: 'purple' },
                                        { id: 'NETBANKING', name: 'Net Banking', desc: 'All Indian major nodes', icon: 'account_balance', color: 'orange' },
                                        { id: 'WALLET', name: 'ZenPay Wallet', desc: 'Internal P2P Balance', icon: 'account_balance_wallet', color: 'emerald' },
                                    ].map((m) => (
                                        <button
                                            key={m.id}
                                            onClick={() => setStep(m.id as Step)}
                                            className="group relative flex flex-col p-5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-left overflow-hidden active:scale-[0.98]"
                                        >
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <span className="material-symbols-outlined text-5xl">{m.icon}</span>
                                            </div>
                                            <div className={`size-10 rounded-xl bg-${m.color}-50 dark:bg-${m.color}-900/20 text-${m.color}-600 dark:text-${m.color}-400 flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                                                <span className="material-symbols-outlined text-xl">{m.icon}</span>
                                            </div>
                                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{m.name}</h4>
                                            <p className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{m.desc}</p>
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-auto pt-8 border-t border-slate-50 dark:border-slate-900 flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-emerald-500 text-sm">shield</span>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Encrypted Session Active</span>
                                </div>
                            </motion.div>
                        )}

                        {step === 'CARD_FORM' && (
                            <motion.div 
                                key="card"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8 h-full flex flex-col"
                            >
                                <button onClick={() => setStep('SELECT_METHOD')} className="group flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
                                    <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span> Return To Methods
                                </button>

                                <div className="space-y-1">
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Card Details</h2>
                                    <p className="text-sm text-slate-400 font-medium italic">Authorize your global fiat transaction.</p>
                                </div>

                                <form className="space-y-6 flex-1 flex flex-col" onSubmit={(e) => { e.preventDefault(); handlePayment('card'); }}>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">Card Identification</label>
                                        <div className="relative group">
                                            <input
                                                required
                                                className="w-full h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/40 focus:bg-white dark:focus:bg-slate-900 transition-all tabular-nums"
                                                placeholder="0000 0000 0000 0000"
                                                value={cardNumber}
                                                onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19))}
                                            />
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300">
                                                <span className="material-symbols-outlined">credit_card</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">Expiry</label>
                                            <input
                                                required
                                                className="w-full h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/40 focus:bg-white dark:focus:bg-slate-900 transition-all"
                                                placeholder="MM/YY"
                                                value={expiry}
                                                onChange={(e) => setExpiry(e.target.value.replace(/\D/g, '').replace(/(.{2})/, '$1/').slice(0, 5))}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">Security Code</label>
                                            <input
                                                required
                                                type="password"
                                                className="w-full h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/40 focus:bg-white dark:focus:bg-slate-900 transition-all"
                                                placeholder="•••"
                                                value={cvv}
                                                maxLength={4}
                                                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                                            />
                                        </div>
                                    </div>

                                    <button 
                                        type="submit"
                                        className="w-full h-16 bg-blue-600 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-auto group"
                                    >
                                        Authorize {formattedAmount}
                                        <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </button>
                                </form>
                            </motion.div>
                        )}

                        {step === 'UPI_FORM' && (
                            <motion.div 
                                key="upi"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8 h-full flex flex-col"
                            >
                                <button onClick={() => setStep('SELECT_METHOD')} className="group flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
                                    <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span> All Methods
                                </button>

                                <div className="space-y-1">
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">UPI Transfer</h2>
                                    <p className="text-sm text-slate-400 font-medium">Standard P2P Settlement Interface.</p>
                                </div>

                                <form className="space-y-6 flex-1 flex flex-col" onSubmit={(e) => { e.preventDefault(); handlePayment('upi'); }}>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">Virtual Payment Address</label>
                                        <div className="relative">
                                            <input
                                                required
                                                className="w-full h-16 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 text-lg font-black text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/40 focus:bg-white dark:focus:bg-slate-900 transition-all placeholder:text-slate-200"
                                                placeholder="user@zenpay"
                                                value={upiId}
                                                onChange={(e) => setUpiId(e.target.value)}
                                            />
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex gap-2">
                                                <div className="size-6 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-[8px] font-black text-blue-600 uppercase">BHIM</div>
                                                <div className="size-6 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center text-[8px] font-black text-slate-400 uppercase">UPI</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center space-y-2">
                                        <span className="material-symbols-outlined text-blue-500">qr_code_scanner</span>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-relaxed">System is syncing with secure UPI intent nodes</p>
                                    </div>

                                    <button 
                                        type="submit"
                                        disabled={!upiId}
                                        className="w-full h-16 bg-blue-600 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-auto disabled:opacity-50"
                                    >
                                        Verify & Settle
                                        <span className="material-symbols-outlined text-xl">rocket_launch</span>
                                    </button>
                                </form>
                            </motion.div>
                        )}

                        {step === 'PROCESSING' && (
                            <motion.div 
                                key="processing"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
                            >
                                <div className="relative">
                                    <div className="size-24 border-4 border-blue-50 dark:border-blue-900/20 border-t-blue-600 rounded-full animate-spin" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-blue-600 animate-pulse">lock</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Clearing Transaction</h2>
                                    <p className="text-sm text-slate-400 font-medium">Performing risk analysis on liquidity nodes...</p>
                                </div>
                            </motion.div>
                        )}

                        {step === 'SUCCESS' && (
                            <motion.div 
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                            >
                                <div className="size-24 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center text-emerald-600 shadow-xl shadow-emerald-500/10">
                                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Authorization Successful</h2>
                                    <p className="text-sm text-slate-400 font-medium">Funds have been cleared and signed by the node.</p>
                                </div>
                                <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 font-mono text-[9px] text-slate-400 tracking-widest border-dashed">
                                    SIG:{Math.random().toString(36).substring(7).toUpperCase()}...SHA256
                                </div>
                            </motion.div>
                        )}

                        {step === 'FAILURE' && (
                            <motion.div 
                                key="failure"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                            >
                                <div className="size-24 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center text-rose-600 shadow-xl shadow-rose-500/10">
                                    <span className="material-symbols-outlined text-5xl">error</span>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Transaction Denied</h2>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{error || 'Node refused authorization for this block.'}</p>
                                </div>
                                <button
                                    onClick={() => setStep('SELECT_METHOD')}
                                    className="px-10 h-14 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95"
                                >
                                    Retry Sequence
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            {/* Sticky Security Footer for Mobile */}
            <footer className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-50 dark:border-slate-800 flex items-center justify-center gap-4">
                <div className="flex items-center gap-1.5 grayscale opacity-40">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <span className="text-[8px] font-black uppercase tracking-widest">PCI Level 1</span>
                </div>
                <div className="w-[1px] h-3 bg-slate-200 dark:bg-slate-700" />
                <div className="flex items-center gap-1.5 grayscale opacity-40">
                    <span className="material-symbols-outlined text-sm">security</span>
                    <span className="text-[8px] font-black uppercase tracking-widest">TLS 1.3</span>
                </div>
            </footer>
        </div>
    );
};

