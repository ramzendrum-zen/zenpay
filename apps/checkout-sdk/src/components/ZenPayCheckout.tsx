import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { API_BASE } from '../lib/config';
import {
    CreditCard,
    QrCode,
    Loader2,
    CheckCircle2,
    XCircle,
    Lock,
    ShieldCheck,
    ArrowRight,
    Eye,
    EyeOff,
    CheckCheck,
    AlertCircle,
    ArrowLeft,
    ShoppingBag,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

interface CheckoutProps {
    orderId: string;
    publicKey: string;
    onSuccess: (response: any) => void;
    onFailure: (error: any) => void;
    onClose?: () => void;
}

type Method = 'card' | 'upi';
type Step = 'LOADING' | 'SELECT_METHOD' | 'CARD_FORM' | 'UPI_FORM' | 'UPI_PIN' | 'PROCESSING' | 'SUCCESS' | 'FAILURE';

type ValidationState = 'idle' | 'validating' | 'valid' | 'invalid';

export const ZenPayCheckout: React.FC<CheckoutProps> = ({ orderId, publicKey, onSuccess, onFailure, onClose }) => {
    const [step, setStep] = useState<Step>('LOADING');
    const [order, setOrder] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [selectedMethod, setSelectedMethod] = useState<Method>('card');
    const [submitting, setSubmitting] = useState(false);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);

    // Card form state
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [upiPin, setUpiPin] = useState('');
    const [showUpiPin, setShowUpiPin] = useState(false);
    const [showCvv, setShowCvv] = useState(false);
    const [cardValidation, setCardValidation] = useState<ValidationState>('idle');
    const [cardInfo, setCardInfo] = useState<any>(null);
    const [cardError, setCardError] = useState('');

    // UPI state
    const [upiId, setUpiId] = useState('');
    const [upiValidation, setUpiValidation] = useState<ValidationState>('idle');
    const [upiInfo, setUpiInfo] = useState<any>(null);
    const [upiError, setUpiError] = useState('');

    const cardDebounceRef = useRef<any>(null);
    const upiDebounceRef = useRef<any>(null);

    useEffect(() => { fetchOrder(); }, [orderId]);

    const fetchOrder = async () => {
        try {
            const res = await axios.get(`${API_BASE}/v1/dashboard/orders/${orderId}`);
            setOrder(res.data.data);
            setStep('SELECT_METHOD');
        } catch {
            setError('Invalid Order ID or session expired.');
            setStep('FAILURE');
        }
    };

    const handleCardNumberChange = (val: string) => {
        const formatted = val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
        setCardNumber(formatted);
        setCardError('');
        setCardInfo(null);

        const raw = formatted.replace(/\s/g, '');
        if (raw.length < 16) {
            setCardValidation('idle');
            return;
        }

        setCardValidation('validating');
        clearTimeout(cardDebounceRef.current);
        cardDebounceRef.current = setTimeout(async () => {
            try {
                const { data } = await axios.post(`${API_BASE}/v1/consumer/validate-card`, { cardNumber: raw });
                setCardInfo(data.data);
                setCardValidation('valid');
            } catch (err: any) {
                setCardValidation('invalid');
                setCardError(err.response?.data?.error || 'Unrecognized card number');
            }
        }, 600);
    };

    const handleUpiChange = (val: string) => {
        setUpiId(val);
        setUpiError('');
        setUpiInfo(null);

        if (!val.includes('@') || val.length < 5) {
            setUpiValidation('idle');
            return;
        }

        setUpiValidation('validating');
        clearTimeout(upiDebounceRef.current);
        upiDebounceRef.current = setTimeout(async () => {
            try {
                const { data } = await axios.post(`${API_BASE}/v1/consumer/validate-upi`, { upiId: val });
                setUpiInfo(data.data);
                setUpiValidation('valid');
            } catch (err: any) {
                setUpiValidation('invalid');
                setUpiError(err.response?.data?.error || 'Invalid UPI ID');
            }
        }, 600);
    };

    const formatCurrency = (paise: number) =>
        (paise / 100).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

    const formatExpiry = (val: string) => {
        let cleaned = val.replace(/\D/g, '').slice(0, 4);
        if (cleaned.length >= 3) return cleaned.slice(0, 2) + '/' + cleaned.slice(2);
        return cleaned;
    };

    const capturePayment = async (userId: string, cardId?: string, method: 'card' | 'upi' = 'card') => {
        setSubmitting(true);
        setStep('PROCESSING');
        try {
            const payload: any = { orderId, userId, method };
            if (method === 'card' && cardId) {
                payload.cardId = cardId;
                payload.cvv = cvv;
            } else if (method === 'upi') {
                payload.upiPin = upiPin;
            }
            const { data } = await axios.post(`${API_BASE}/v1/payments/capture`, payload);
            if (data.status === 'success') {
                setStep('SUCCESS');
                setTimeout(() => onSuccess(data.data), 2000);
            } else {
                throw new Error(data.error || 'Authorization Denied');
            }
        } catch (err: any) {
            setError(err.response?.data?.error || err.message || 'Payment Declined.');
            setStep('FAILURE');
        } finally {
            setSubmitting(false);
        }
    };

    const handleCardPay = async (e: React.FormEvent) => {
        e.preventDefault();
        if (cardValidation !== 'valid' || !cardInfo) return;
        await capturePayment(cardInfo.userId, cardInfo.cardId, 'card');
    };

    const handleUpiPay = async (e: React.FormEvent) => {
        e.preventDefault();
        if (upiValidation !== 'valid' || !upiInfo) return;
        setStep('UPI_PIN');
    };

    const handleUpiPinSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (upiPin.length !== 6) return;
        await capturePayment(upiInfo!.userId, undefined, 'upi');
    };

    const total = order ? (order.amount || order.amountPaise || 0) : 0;

    return (
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center font-sans antialiased text-slate-900 overflow-hidden">
            {/* Dark Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" 
                onClick={() => onClose?.()} 
            />

            {/* Modal Container */}
            <motion.div 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                className="relative w-full max-w-[500px] sm:max-w-[440px] bg-white dark:bg-slate-950 rounded-t-[2.5rem] sm:rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl flex flex-col h-[90vh] sm:h-auto sm:max-h-[700px] overflow-hidden"
            >
                {/* Header: Brand & Close */}
                <header className="px-8 py-5 flex items-center justify-between border-b border-slate-50 dark:border-slate-900 sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                        <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                            <span className="material-symbols-outlined text-xl">payments</span>
                        </div>
                        <span className="font-black text-lg tracking-tighter italic dark:text-white">ZenPay<span className="text-blue-600 not-italic">OS</span></span>
                    </div>
                    <button onClick={() => onClose?.()} className="p-2 bg-slate-50 dark:bg-slate-900 rounded-full text-slate-400 hover:text-slate-900 transition-colors">
                        <XCircle size={20} />
                    </button>
                </header>

                {/* Collapsible Order Summary */}
                <div className="bg-slate-50/50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-900">
                    <button 
                        onClick={() => setIsSummaryOpen(!isSummaryOpen)}
                        className="w-full px-8 py-3 flex items-center justify-between group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="size-7 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-900 dark:text-white">
                                <ShoppingBag size={14} />
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Order Total</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="font-black text-slate-900 dark:text-white tracking-tight">{formatCurrency(total)}</p>
                            {isSummaryOpen ? <ChevronUp size={16} className="text-slate-300" /> : <ChevronDown size={16} className="text-slate-300" />}
                        </div>
                    </button>
                    <AnimatePresence>
                        {isSummaryOpen && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-slate-50 dark:bg-slate-900/50 px-8 pb-6 space-y-3"
                            >
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest">Merchant</span>
                                    <span className="text-slate-900 dark:text-white font-bold">{order?.merchant?.businessName || 'Business Entity'}</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest">Order ID</span>
                                    <span className="text-slate-900 dark:text-white font-mono">{orderId.slice(-8).toUpperCase()}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Body Content */}
                <div className="flex-1 overflow-y-auto p-8 bg-white dark:bg-slate-950">
                    <AnimatePresence mode="wait">
                        {step === 'SELECT_METHOD' && (
                            <motion.div 
                                key="methods" 
                                initial={{ opacity: 0, scale: 0.95 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="space-y-6"
                            >
                                <div className="space-y-1">
                                    <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Access Hub</h2>
                                    <p className="text-xs text-slate-500 font-medium">Select a liquidity channel to authorize.</p>
                                </div>
                                
                                <div className="space-y-3">
                                    {[
                                        { id: 'card' as Method, label: 'Credit / Debit Card', icon: CreditCard, color: 'blue' },
                                        { id: 'upi' as Method, label: 'ZenPay Instant UPI', icon: QrCode, color: 'purple' },
                                    ].map(item => (
                                        <button
                                            key={item.id}
                                            onClick={() => handleMethodSelect(item.id)}
                                            className="w-full flex items-center justify-between p-5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-left bg-white dark:bg-slate-950 group active:scale-[0.98]"
                                        >
                                            <div className="flex gap-4 items-center">
                                                <div className={`size-10 bg-${item.color}-50 dark:bg-${item.color}-900/20 text-${item.color}-600 dark:text-${item.color}-400 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                                                    <item.icon size={20} strokeWidth={2} />
                                                </div>
                                                <div className="text-left">
                                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</h4>
                                                    <p className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">Authorize via {item.id === 'card' ? 'Global Node' : 'P2P Intent'}</p>
                                                </div>
                                            </div>
                                            <ArrowRight size={16} className="text-slate-200 group-hover:text-blue-500 transition-colors" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {(step === 'CARD_FORM' || step === 'UPI_FORM') && (
                            <motion.div 
                                key="form" 
                                initial={{ opacity: 0, x: 20 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                className="space-y-6 flex flex-col h-full"
                            >
                                <button onClick={() => setStep('SELECT_METHOD')} className="group flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
                                    <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" /> Methods Hub
                                </button>

                                <div className="space-y-1">
                                    <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{step === 'CARD_FORM' ? 'Card Identity' : 'UPI Protocol'}</h2>
                                    <p className="text-xs text-slate-400 font-medium italic">Enter secure credentials to settle.</p>
                                </div>

                                {step === 'CARD_FORM' ? (
                                    <form onSubmit={handleCardPay} className="space-y-5 flex-1 flex flex-col">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">Card Number</label>
                                            <div className="relative group">
                                                <input
                                                    required
                                                    className="w-full h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/40 transition-all tabular-nums"
                                                    placeholder="0000 0000 0000 0000"
                                                    value={cardNumber}
                                                    onChange={e => handleCardNumberChange(e.target.value)}
                                                />
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2">
                                                    {cardValidation === 'validating' ? <Loader2 size={16} className="animate-spin text-slate-400" /> :
                                                     cardValidation === 'valid' ? <div className="size-5 bg-blue-600 rounded-full flex items-center justify-center"><CheckCheck size={12} className="text-white" /></div> :
                                                     cardValidation === 'invalid' ? <AlertCircle size={16} className="text-red-500" /> : <CreditCard size={18} className="text-slate-300" />}
                                                </div>
                                            </div>
                                            {cardError && <p className="text-[10px] text-red-500 font-bold px-1">{cardError}</p>}
                                        </div>

                                        {cardValidation === 'valid' && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="grid grid-cols-2 gap-4 pt-1">
                                                <div className="space-y-2">
                                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">Expiry</label>
                                                    <input required className="w-full h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 text-sm font-bold text-slate-900 dark:text-white focus:outline-none" placeholder="MM/YY" value={expiry} onChange={e => setExpiry(formatExpiry(e.target.value))} />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">CVV</label>
                                                    <input required type="password" className="w-full h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 text-sm font-bold text-slate-900 dark:text-white focus:outline-none" placeholder="•••" maxLength={3} value={cvv} onChange={e => setCvv(e.target.value.replace(/\D/g, ''))} />
                                                </div>
                                            </motion.div>
                                        )}

                                        <button disabled={cardValidation !== 'valid' || submitting} type="submit" className="w-full h-16 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all disabled:opacity-30 mt-auto">
                                            Pay {formatCurrency(total)}
                                        </button>
                                    </form>
                                ) : (
                                    <form onSubmit={handleUpiPay} className="space-y-6 flex-1 flex flex-col">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">VPA ID</label>
                                            <div className="relative">
                                                <input
                                                    required
                                                    className="w-full h-16 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 text-base font-black text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/40 transition-all placeholder:text-slate-200"
                                                    placeholder="user@zenpay"
                                                    value={upiId}
                                                    onChange={e => handleUpiChange(e.target.value)}
                                                />
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2">
                                                    {upiValidation === 'validating' ? <Loader2 size={16} className="animate-spin text-slate-400" /> :
                                                     upiValidation === 'valid' ? <span className="text-[8px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100">VERIFIED</span> :
                                                     upiValidation === 'invalid' ? <AlertCircle size={16} className="text-red-500" /> : <QrCode size={18} className="text-slate-300" />}
                                                </div>
                                            </div>
                                            {upiError && <p className="text-[10px] text-red-500 font-bold px-1">{upiError}</p>}
                                        </div>

                                        <button disabled={upiValidation !== 'valid' || submitting} type="submit" className="w-full h-16 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all disabled:opacity-30 mt-auto">
                                            Settle Now
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        )}

                        {step === 'UPI_PIN' && (
                            <motion.div key="pin" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-8 flex flex-col items-center py-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Authorization Pin</h2>
                                    <p className="text-xs text-slate-400 font-medium">Verify your direct settlement code.</p>
                                </div>
                                <form onSubmit={handleUpiPinSubmit} className="w-full space-y-8">
                                    <div className="relative">
                                        <input
                                            required
                                            type={showUpiPin ? 'text' : 'password'}
                                            className="w-full h-20 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-8 text-center text-4xl font-black text-slate-900 dark:text-white tracking-[0.4em] focus:outline-none focus:border-blue-500/40 transition-all"
                                            placeholder="••••••"
                                            value={upiPin}
                                            onChange={e => setUpiPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                        />
                                        <button type="button" onClick={() => setShowUpiPin(!showUpiPin)} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-200">
                                            {showUpiPin ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    <button disabled={upiPin.length !== 6 || submitting} type="submit" className="w-full h-16 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl transition-all">
                                        Authorize & Clear
                                    </button>
                                </form>
                            </motion.div>
                        )}

                        {step === 'PROCESSING' && (
                            <div className="flex flex-col items-center justify-center py-20 space-y-8">
                                <div className="relative">
                                    <div className="size-24 border-4 border-blue-50 dark:border-blue-900/20 border-t-blue-600 rounded-full animate-spin" />
                                    <div className="absolute inset-0 flex items-center justify-center text-blue-600 animate-pulse">
                                        <ShieldCheck size={32} />
                                    </div>
                                </div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Clearing Authorization...</p>
                            </div>
                        )}

                        {step === 'SUCCESS' && (
                             <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center py-10 space-y-8 text-center">
                                <div className="size-24 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center text-emerald-600 shadow-xl shadow-emerald-500/10 scale-110">
                                    <CheckCircle2 size={48} strokeWidth={2} />
                                </div>
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none">Status: Approved</h2>
                                    <p className="text-xs text-slate-400 font-medium">Funds successfully signed by node.</p>
                                </div>
                                <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 font-mono text-[9px] text-slate-400 tracking-widest border-dashed">
                                    SettleID: {Math.random().toString(36).substring(7).toUpperCase()}
                                </div>
                             </motion.div>
                        )}

                        {step === 'FAILURE' && (
                            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center py-10 space-y-8 text-center">
                                <div className="size-24 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center text-rose-600 shadow-xl shadow-rose-500/10">
                                    <XCircle size={48} strokeWidth={2} />
                                </div>
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none">Decision: Denied</h2>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">{error || 'Unknown authorization failure'}</p>
                                </div>
                                <button onClick={() => setStep('SELECT_METHOD')} className="w-full h-14 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-slate-900/20">
                                    Restart Protocol
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Section */}
                <footer className="px-8 py-5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300 dark:text-slate-700">
                        <Lock size={12} strokeWidth={3} />
                        <span className="text-[8px] font-black uppercase tracking-[0.2em]">SSL 256 Encr</span>
                    </div>
                    <div className="flex items-center gap-1.5 grayscale opacity-30 invert dark:invert-0">
                        <ShieldCheck size={14} className="text-emerald-500" />
                        <span className="text-[8px] font-black text-slate-900 uppercase tracking-widest">PCI v4.0</span>
                    </div>
                </footer>
            </motion.div>
        </div>
    );
};

