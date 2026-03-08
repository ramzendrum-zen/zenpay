import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'react-qr-code';
import axios from 'axios';
import { API_BASE } from '../lib/config';
import {
    CreditCard,
    QrCode,
    Wallet,
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

export const ZenWalletCheckout: React.FC<CheckoutProps> = ({ orderId, publicKey, onSuccess, onFailure, onClose }) => {
    const [step, setStep] = useState<Step>('LOADING');
    const [order, setOrder] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [selectedMethod, setSelectedMethod] = useState<Method>('card');
    const [submitting, setSubmitting] = useState(false);

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
    const [upiTab, setUpiTab] = useState<'id' | 'qr'>('id');

    const cardDebounceRef = useRef<any>(null);
    const upiDebounceRef = useRef<any>(null);

    useEffect(() => { fetchOrder(); }, [orderId]);

    const fetchOrder = async () => {
        try {
            const res = await axios.get(`${API_BASE}/dashboard/orders/${orderId}`);
            setOrder(res.data.data);
            setStep('SELECT_METHOD');
        } catch {
            setError('Invalid Order ID or session expired. Please try again.');
            setStep('FAILURE');
        }
    };

    /* ── Card number validation (debounced) ── */
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
                const { data } = await axios.post(`${API_BASE}/consumer/validate-card`, { cardNumber: raw });
                setCardInfo(data.data);
                setCardValidation('valid');
                setCardError('');
            } catch (err: any) {
                setCardValidation('invalid');
                setCardError(err.response?.data?.error || 'Invalid card number');
                setCardInfo(null);
            }
        }, 600);
    };

    /* ── UPI validation (debounced) ── */
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
                const { data } = await axios.post(`${API_BASE}/consumer/validate-upi`, { upiId: val });
                setUpiInfo(data.data);
                setUpiValidation('valid');
                setUpiError('');
            } catch (err: any) {
                setUpiValidation('invalid');
                setUpiError(err.response?.data?.error || 'Invalid UPI ID');
                setUpiInfo(null);
            }
        }, 600);
    };

    const formatCurrency = (paise: number) =>
        (paise / 100).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

    const formatExpiry = (val: string) => {
        const cleaned = val.replace(/\D/g, '').slice(0, 4);
        if (cleaned.length >= 3) return cleaned.slice(0, 2) + '/' + cleaned.slice(2);
        return cleaned;
    };

    const handleMethodSelect = (method: Method) => {
        setSelectedMethod(method);
        setError(null);
        setStep(method === 'card' ? 'CARD_FORM' : 'UPI_FORM');
    };

    /* ── Capture payment via backend ── */
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
            const { data } = await axios.post(`${API_BASE}/payments/capture`, payload);
            if (data.status === 'success') {
                setStep('SUCCESS');
                setTimeout(() => onSuccess(data.data), 2500);
            } else {
                throw new Error(data.error || 'Payment failed');
            }
        } catch (err: any) {
            setError(err.response?.data?.error || err.message || 'Payment declined. Please try again.');
            setStep('FAILURE');
        } finally {
            setSubmitting(false);
        }
    };

    const handleCardPay = async (e: React.FormEvent) => {
        e.preventDefault();
        if (cardValidation !== 'valid' || !cardInfo) {
            setCardError('Please enter a valid registered card number.');
            return;
        }
        if (!cvv || cvv.length < 3) {
            setCardError('Please enter a valid CVV.');
            return;
        }
        await capturePayment(cardInfo.userId, cardInfo.cardId, 'card');
    };

    const handleUpiPay = async (e: React.FormEvent) => {
        e.preventDefault();
        if (upiValidation !== 'valid' || !upiInfo) {
            setUpiError('Please enter a valid registered ZenPay UPI ID.');
            return;
        }
        setStep('UPI_PIN');
    };

    const handleUpiPinSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (upiPin.length !== 6) {
            setUpiError('PIN must be exactly 6 digits.');
            return;
        }
        await capturePayment(upiInfo!.userId, undefined, 'upi');
    };

    const total = order ? order.amountPaise : 0;

    const renderValidationIcon = (state: ValidationState) => {
        if (state === 'validating') return <Loader2 size={16} className="animate-spin text-zinc-500" />;
        if (state === 'valid') return <CheckCheck size={16} className="text-white" />;
        if (state === 'invalid') return <AlertCircle size={16} className="text-red-500" />;
        return null;
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
            {/* Dark Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => onClose?.()} />

            {/* Modal Container - Premium Monochrome Luxury styling with FIXED size */}
            <div className="relative w-full max-w-[850px] h-[600px] bg-zinc-950 rounded-2xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">

                {/* Top Header */}
                <header className="px-8 h-16 flex items-center justify-between flex-shrink-0 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="size-8 bg-white rounded flex items-center justify-center">
                            <Wallet size={16} className="text-black" />
                        </div>
                        <span className="font-bold text-white text-lg tracking-tight">ZenPay</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/5">
                            <Lock size={10} className="text-zinc-400" />
                            Encrypted
                        </div>
                        <button
                            onClick={() => onClose?.()}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-500 hover:text-white"
                        >
                            <XCircle size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                </header>

                {/* Main Body */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Left Sidebar - Black backdrop */}
                    <div className="w-[300px] h-full bg-black/40 border-r border-white/5 p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">You are paying</p>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="size-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white">
                                        <ShoppingBag size={20} className="opacity-80" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-bold text-white text-sm truncate">{order?.merchant?.businessName || 'Business Entity'}</h3>
                                        <p className="text-[10px] text-zinc-500 font-medium tracking-wide">Verified Merchant</p>
                                    </div>
                                </div>
                                <div className="text-3xl font-black text-white mb-2 tracking-tight">
                                    {order ? formatCurrency(total) : '---'}
                                </div>
                                <p className="text-[10px] text-zinc-500 font-medium font-mono uppercase tracking-widest bg-white/5 px-2 py-1 inline-block rounded border border-white/5">ID: {orderId ? orderId.slice(-8) : '----'}</p>
                            </div>

                            <div className="space-y-3 pt-6 border-t border-white/5">
                                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Payment Method</p>
                                {[
                                    { id: 'card' as Method, label: 'Debit Card', icon: CreditCard },
                                    { id: 'upi' as Method, label: 'Direct UPI', icon: QrCode },
                                ].map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleMethodSelect(item.id)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs transition-all border ${selectedMethod === item.id
                                            ? 'bg-white text-black border-white font-bold'
                                            : 'bg-transparent border-transparent text-zinc-400 hover:bg-white/5 hover:text-zinc-200 font-medium'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon size={16} className={selectedMethod === item.id ? 'text-black' : 'text-zinc-500'} strokeWidth={selectedMethod === item.id ? 2.5 : 2} />
                                            {item.label}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-600 font-medium tracking-wide">
                            <ShieldCheck size={12} className="opacity-70" />
                            <span>Powered by ZenWallet</span>
                        </div>
                    </div>

                    {/* Right Panel - Scrollable Y but container is fixed size */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="min-h-full flex items-center justify-center p-10">
                            <div className="w-full max-w-[420px]">

                                {/* ── LOADING ── */}
                                {step === 'LOADING' && (
                                    <div className="flex flex-col items-center justify-center py-20 text-center">
                                        <Loader2 size={32} className="text-white animate-spin mb-4" />
                                        <p className="text-zinc-400 text-sm">Initializing secure checkout...</p>
                                    </div>
                                )}

                                {/* ── SELECT METHOD ── */}
                                {step === 'SELECT_METHOD' && (
                                    <div className="animate-in fade-in duration-300">
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-white tracking-tight">Select Method</h2>
                                            <p className="text-sm text-zinc-400 mt-2">Choose how you'd like to complete this payment.</p>
                                        </div>
                                        <div className="space-y-3">
                                            {[
                                                { id: 'card' as Method, icon: CreditCard, label: 'Debit Card', sub: 'Standard card payment' },
                                                { id: 'upi' as Method, icon: QrCode, label: 'ZenPay UPI', sub: 'Instant account-to-account' },
                                            ].map(m => (
                                                <button
                                                    key={m.id}
                                                    onClick={() => handleMethodSelect(m.id)}
                                                    className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all group"
                                                >
                                                    <div className="flex gap-4 items-center">
                                                        <div className="size-10 bg-white/5 border border-white/5 rounded flex items-center justify-center">
                                                            <m.icon size={20} className="text-zinc-300" strokeWidth={1.5} />
                                                        </div>
                                                        <div className="text-left">
                                                            <p className="text-sm font-semibold text-white">{m.label}</p>
                                                            <p className="text-xs text-zinc-500 mt-0.5">{m.sub}</p>
                                                        </div>
                                                    </div>
                                                    <ArrowRight size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* ── CARD FORM ── */}
                                {step === 'CARD_FORM' && (
                                    <div className="animate-in fade-in duration-300">
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-white tracking-tight">Debit Card</h2>
                                            <p className="text-sm text-zinc-400 mt-2 opacity-80">Enter your ZenWallet card details.</p>
                                        </div>
                                        <form onSubmit={handleCardPay} className="space-y-5">
                                            <div>
                                                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Card Number</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        inputMode="numeric"
                                                        placeholder="0000 0000 0000 0000"
                                                        value={cardNumber}
                                                        onChange={e => handleCardNumberChange(e.target.value)}
                                                        maxLength={19}
                                                        className={`w-full h-12 bg-black border rounded-lg px-4 pr-12 text-sm text-white font-mono outline-none transition-all tracking-widest placeholder:text-zinc-800 ${cardValidation === 'valid' ? 'border-white focus:border-white' :
                                                            cardValidation === 'invalid' ? 'border-red-500 focus:border-red-500' :
                                                                'border-white/20 focus:border-white/60'
                                                            }`}
                                                    />
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                                        {renderValidationIcon(cardValidation)}
                                                    </div>
                                                </div>
                                                {cardValidation === 'valid' && cardInfo && (
                                                    <p className="mt-2 text-xs text-zinc-400">Cardholder: <span className="text-white font-medium">{cardInfo.holderName}</span></p>
                                                )}
                                                {cardError && <p className="mt-1.5 text-xs text-red-500">{cardError}</p>}
                                            </div>

                                            {cardValidation === 'valid' && (
                                                <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-300">
                                                    <div>
                                                        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Expiry (MM/YY)</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            inputMode="numeric"
                                                            placeholder="MM/YY"
                                                            value={expiry}
                                                            onChange={e => setExpiry(formatExpiry(e.target.value))}
                                                            maxLength={5}
                                                            className="w-full h-12 bg-black border border-white/20 rounded-lg px-4 text-sm text-white font-mono outline-none focus:border-white/60 transition-all placeholder:text-zinc-800"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">CVV</label>
                                                        <div className="relative">
                                                            <input
                                                                required
                                                                type={showCvv ? 'text' : 'password'}
                                                                placeholder="•••"
                                                                value={cvv}
                                                                onChange={e => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                                                                maxLength={3}
                                                                className="w-full h-12 bg-black border border-white/20 rounded-lg px-4 text-sm text-white font-mono outline-none focus:border-white/60 transition-all placeholder:text-zinc-800 tracking-[0.3em]"
                                                            />
                                                            <button type="button" onClick={() => setShowCvv(!showCvv)} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-white">
                                                                {showCvv ? <EyeOff size={16} /> : <Eye size={16} />}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={submitting || cardValidation !== 'valid'}
                                                className="w-full h-12 mt-6 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest text-[11px] rounded-lg transition-all active:scale-[0.99] disabled:opacity-30 disabled:hover:bg-white"
                                            >
                                                Pay {formatCurrency(total)}
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {/* ── UPI FORM ── */}
                                {step === 'UPI_FORM' && (
                                    <div className="animate-in fade-in duration-300 flex flex-col h-full">
                                        <div className="mb-6">
                                            <h2 className="text-2xl font-bold text-white tracking-tight">Direct UPI</h2>
                                            <p className="text-sm text-zinc-400 mt-2">Enter credentials or scan to pay securely.</p>
                                        </div>

                                        <div className="flex p-1 bg-white/5 border border-white/10 rounded-lg mb-8">
                                            {[
                                                { id: 'id' as const, label: 'UPI ID' },
                                                { id: 'qr' as const, label: 'QR Code' },
                                            ].map(tab => (
                                                <button
                                                    key={tab.id}
                                                    onClick={() => setUpiTab(tab.id)}
                                                    className={`flex-1 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${upiTab === tab.id ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'
                                                        }`}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>

                                        {upiTab === 'id' && (
                                            <form onSubmit={handleUpiPay} className="space-y-6 flex-1">
                                                <div>
                                                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">ZenPay UPI ID</label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            placeholder="number@zenpay"
                                                            value={upiId}
                                                            onChange={e => handleUpiChange(e.target.value)}
                                                            className={`w-full h-12 bg-black border rounded-lg px-4 pr-24 text-sm text-white outline-none transition-all placeholder:text-zinc-800 ${upiValidation === 'valid' ? 'border-white focus:border-white' :
                                                                upiValidation === 'invalid' ? 'border-red-500 focus:border-red-500' :
                                                                    'border-white/20 focus:border-white/60'
                                                                }`}
                                                        />
                                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                                            {upiValidation === 'validating' && <Loader2 size={14} className="animate-spin text-zinc-500" />}
                                                            {upiValidation === 'valid' && <span className="text-[9px] font-bold text-black bg-white px-2 py-1 rounded">VERIFIED</span>}
                                                            {upiValidation === 'invalid' && <AlertCircle size={14} className="text-red-500" />}
                                                        </div>
                                                    </div>
                                                    {upiValidation === 'valid' && upiInfo && (
                                                        <p className="mt-2 text-xs text-zinc-400">Account: <span className="text-white font-medium">{upiInfo.holderName}</span></p>
                                                    )}
                                                    {upiError && <p className="mt-1.5 text-xs text-red-500">{upiError}</p>}
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={submitting || upiValidation !== 'valid'}
                                                    className="w-full h-12 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest text-[11px] rounded-lg transition-all active:scale-[0.99] disabled:opacity-30 disabled:hover:bg-white"
                                                >
                                                    Proceed
                                                </button>
                                            </form>
                                        )}

                                        {upiTab === 'qr' && (
                                            <div className="flex flex-col items-center flex-1 py-4">
                                                <div className="bg-white p-4 rounded-2xl shadow-xl mb-6">
                                                    <div className="size-48 flex items-center justify-center bg-white">
                                                        <QRCode
                                                            value={`upi://pay?pa=merchant_${order?.merchantId || 'test'}@zenpay&pn=${encodeURIComponent(order?.merchant?.businessName || 'ZenPay')}&am=${(total / 100).toFixed(2)}&cu=INR`}
                                                            size={180}
                                                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                            viewBox={`0 0 256 256`}
                                                            level="Q"
                                                        />
                                                    </div>
                                                </div>
                                                <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mb-2">Scan to Pay</p>
                                                <p className="text-[10px] text-zinc-600 text-center max-w-[200px]">Use the ZenPay app to scan this secure QR code.</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* ── UPI PIN ── */}
                                {step === 'UPI_PIN' && (
                                    <div className="animate-in fade-in zoom-in-95 duration-300 relative">
                                        <button onClick={() => setStep('UPI_FORM')} className="absolute -top-2 left-0 p-2 text-zinc-500 hover:text-white transition-colors">
                                            <ArrowLeft size={20} />
                                        </button>
                                        <div className="flex flex-col items-center pt-8">
                                            <div className="size-16 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                                                <Lock size={24} className="text-white" strokeWidth={1.5} />
                                            </div>
                                            <h2 className="text-2xl font-bold text-white tracking-tight">Authorization</h2>
                                            <p className="text-sm text-zinc-400 mt-2 text-center mb-10 max-w-[260px]">
                                                Enter your 6-digit ZenPay PIN to confirm this payment.
                                            </p>

                                            <form onSubmit={handleUpiPinSubmit} className="w-full space-y-8">
                                                <div className="relative">
                                                    <input
                                                        required
                                                        type={showUpiPin ? 'text' : 'password'}
                                                        placeholder="••••••"
                                                        value={upiPin}
                                                        onChange={e => setUpiPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                                        maxLength={6}
                                                        className="w-full h-14 bg-black border border-white/20 rounded-xl px-6 text-center text-3xl text-white font-mono tracking-[0.4em] outline-none focus:border-white transition-all placeholder:text-zinc-800"
                                                    />
                                                    <button type="button" onClick={() => setShowUpiPin(!showUpiPin)} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-white transition-colors">
                                                        {showUpiPin ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    </button>
                                                </div>
                                                <button
                                                    type="submit"
                                                    disabled={upiPin.length !== 6 || submitting}
                                                    className="w-full h-12 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest text-[11px] rounded-lg transition-all active:scale-[0.99] disabled:opacity-30 disabled:hover:bg-white"
                                                >
                                                    Authorize {formatCurrency(total)}
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                )}

                                {/* ── PROCESSING ── */}
                                {step === 'PROCESSING' && (
                                    <div className="flex flex-col items-center justify-center py-24 text-center animate-in fade-in duration-300">
                                        <Loader2 size={40} className="text-white animate-spin mb-8" strokeWidth={1.5} />
                                        <h2 className="text-xl font-bold text-white tracking-tight">Processing</h2>
                                        <p className="text-sm text-zinc-400 mt-2">Authorizing secure transaction...</p>
                                    </div>
                                )}

                                {/* ── SUCCESS ── */}
                                {step === 'SUCCESS' && (
                                    <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                                        <div className="size-20 border border-white/20 bg-white/5 rounded-full flex items-center justify-center mb-8 relative">
                                            <CheckCircle2 size={40} strokeWidth={1.5} className="text-white" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white tracking-tight">Approved</h2>
                                        <p className="text-sm text-zinc-400 mt-2">Transaction completed successfully.</p>
                                        <button onClick={() => onSuccess({ status: 'success' })} className="mt-10 px-10 h-12 bg-white text-black text-[11px] uppercase tracking-widest font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                                            Return to Merchant
                                        </button>
                                    </div>
                                )}

                                {/* ── FAILURE ── */}
                                {step === 'FAILURE' && (
                                    <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in duration-300">
                                        <div className="size-20 border border-red-500/20 bg-red-500/10 rounded-full flex items-center justify-center mb-8">
                                            <XCircle size={40} strokeWidth={1.5} className="text-red-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white tracking-tight">Declined</h2>
                                        <p className="text-sm text-zinc-400 mt-2 max-w-[280px]">{error || 'Transaction could not be completed.'}</p>
                                        <div className="mt-10 flex gap-4 w-full">
                                            <button onClick={() => onClose ? onClose() : onFailure({ status: 'failure', message: error || 'Payment failed' })} className="flex-1 h-12 border border-white/20 text-white text-[11px] uppercase tracking-widest font-bold rounded-lg hover:bg-white/5 transition-colors">
                                                Cancel
                                            </button>
                                            <button onClick={() => { setError(null); setStep('SELECT_METHOD'); }} className="flex-1 h-12 bg-white text-black text-[11px] uppercase tracking-widest font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                                                Retry
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="h-12 border-t border-white/5 bg-black/20 flex justify-between items-center px-8 text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] flex-shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="size-1.5 bg-zinc-500 rounded-full" />
                        Network Operational
                    </div>
                    <div className="flex gap-6">
                        <span>PCI-DSS</span>
                        <span>AES-256</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};
