import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'react-qr-code';
import axios from 'axios';
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
} from 'lucide-react';

interface CheckoutProps {
    orderId: string;
    publicKey: string;
    onSuccess: (response: any) => void;
    onFailure: (error: any) => void;
}

type Method = 'card' | 'upi';
type Step = 'LOADING' | 'SELECT_METHOD' | 'CARD_FORM' | 'UPI_FORM' | 'UPI_PIN' | 'PROCESSING' | 'SUCCESS' | 'FAILURE';

type ValidationState = 'idle' | 'validating' | 'valid' | 'invalid';

const API_BASE = 'http://localhost:4000/v1';

export const ZenWalletCheckout: React.FC<CheckoutProps> = ({ orderId, publicKey, onSuccess, onFailure }) => {
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
        if (state === 'validating') return <Loader2 size={16} className="animate-spin text-gray-400" />;
        if (state === 'valid') return <CheckCheck size={16} className="text-green-500" />;
        if (state === 'invalid') return <AlertCircle size={16} className="text-red-400" />;
        return null;
    };

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-[#f3f4f6]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
            {/* Top Nav */}
            <header className="bg-white border-b border-gray-200 px-8 h-14 flex items-center justify-between flex-shrink-0 shadow-sm">
                <div className="flex items-center gap-2.5">
                    <div className="size-7 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Wallet size={15} className="text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-base tracking-tight">ZenPay</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>Payments</span>
                    <span>Support</span>
                    <span className="h-5 w-px bg-gray-200" />
                    <button className="bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
                        Login
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex items-start justify-center p-8 gap-6 overflow-y-auto">

                {/* Left: Order Summary */}
                <div className="w-[270px] flex-shrink-0">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="size-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 text-sm">{order?.merchant?.businessName || 'Store Checkout'}</h3>
                                <p className="text-xs text-gray-400">Merchant ID: #{(order?.merchantId || '---').slice(-5)}</p>
                            </div>
                        </div>

                        <div className="space-y-2 pb-4 border-b border-gray-100 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Order ID</span>
                                <span className="font-medium text-gray-800 text-xs">#{orderId.slice(-7).toUpperCase()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Amount</span>
                                <span className="font-bold text-gray-900">{formatCurrency(total)}</span>
                            </div>
                        </div>

                        {/* Method List (sidebar nav when in form step) */}
                        {(step === 'CARD_FORM' || step === 'UPI_FORM') && (
                            <div className="mt-4 space-y-1">
                                {[
                                    { id: 'card' as Method, label: 'Debit Card', icon: CreditCard },
                                    { id: 'upi' as Method, label: 'ZenPay (UPI)', icon: QrCode },
                                ].map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleMethodSelect(item.id)}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${selectedMethod === item.id
                                            ? 'bg-blue-50 text-blue-700 font-semibold'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <item.icon size={16} className={selectedMethod === item.id ? 'text-blue-600' : 'text-gray-400'} />
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="mt-4 flex items-start gap-2 text-[11px] text-gray-400 leading-relaxed">
                            <ShieldCheck size={13} className="flex-shrink-0 mt-0.5" />
                            <span>Secured with 256-bit encryption and PCI-DSS compliance.</span>
                        </div>
                    </div>
                </div>

                {/* Right: Main Panel */}
                <div className="flex-1 max-w-[520px]">

                    {/* ── SELECT METHOD ── */}
                    {step === 'SELECT_METHOD' && (
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                            <div className="px-8 py-6 border-b border-gray-100">
                                <h2 className="text-xl font-bold text-gray-900">Select Payment Method</h2>
                                <p className="text-sm text-gray-500 mt-1">Choose your preferred way to pay</p>
                            </div>
                            <div className="p-5 space-y-3">
                                {[
                                    { id: 'card' as Method, icon: CreditCard, label: 'Debit Card', sub: 'Pay using your ZenWallet virtual debit card', color: 'text-blue-500', bg: 'bg-blue-50' },
                                    { id: 'upi' as Method, icon: QrCode, label: 'ZenPay UPI', sub: 'Pay using your unique 10-digit@zenpay UPI ID', color: 'text-purple-500', bg: 'bg-purple-50' },
                                ].map(m => (
                                    <button
                                        key={m.id}
                                        onClick={() => handleMethodSelect(m.id)}
                                        className="w-full flex items-center justify-between px-5 py-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`size-11 ${m.bg} rounded-xl flex items-center justify-center`}>
                                                <m.icon size={22} className={m.color} />
                                            </div>
                                            <div className="text-left">
                                                <p className="text-sm font-semibold text-gray-900">{m.label}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{m.sub}</p>
                                            </div>
                                        </div>
                                        <ArrowRight size={18} className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                                    </button>
                                ))}
                            </div>
                            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="size-5 bg-blue-600 rounded flex items-center justify-center">
                                        <ShieldCheck size={11} className="text-white" />
                                    </div>
                                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">PCI-DSS CERTIFIED</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                    <Lock size={11} /> Secure Checkout
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 text-center pb-4">
                                By continuing, you agree to our{' '}
                                <span className="text-blue-600 cursor-pointer hover:underline">Terms</span>.{' '}
                                <button onClick={() => onFailure({ error: 'cancelled' })} className="text-blue-600 hover:underline">Cancel</button>
                            </p>
                        </div>
                    )}

                    {/* ── CARD FORM ── */}
                    {step === 'CARD_FORM' && (
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                            <h2 className="text-xl font-bold text-gray-900">Debit Card Payment</h2>
                            <p className="text-sm text-gray-500 mt-1 mb-7">Enter your ZenWallet card number to proceed.</p>
                            <form onSubmit={handleCardPay} className="space-y-5">

                                {/* Card Number Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            placeholder="0605 XXXX XXXX 2212"
                                            value={cardNumber}
                                            onChange={e => handleCardNumberChange(e.target.value)}
                                            maxLength={19}
                                            className={`w-full h-12 border rounded-xl px-4 pr-12 text-sm font-mono outline-none transition-all tracking-wider placeholder:text-gray-300 ${cardValidation === 'valid' ? 'border-green-400 bg-green-50/30 focus:border-green-500' :
                                                cardValidation === 'invalid' ? 'border-red-300 bg-red-50/30 focus:border-red-400' :
                                                    'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10'
                                                }`}
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                            {renderValidationIcon(cardValidation)}
                                        </div>
                                    </div>
                                    {/* Validated card info */}
                                    {cardValidation === 'valid' && cardInfo && (
                                        <div className="mt-2 flex items-center gap-2 text-xs text-green-600 font-medium bg-green-50 px-3 py-2 rounded-lg">
                                            <CheckCheck size={13} />
                                            Card verified · {cardInfo.holderName} · Balance: {formatCurrency(cardInfo.balancePaise)}
                                        </div>
                                    )}
                                    {cardError && (
                                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                                            <AlertCircle size={12} /> {cardError}
                                        </p>
                                    )}
                                </div>

                                {/* Only show rest of form when card is validated */}
                                {cardValidation === 'valid' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry (MM/YY)</label>
                                                <input
                                                    required
                                                    type="text"
                                                    inputMode="numeric"
                                                    placeholder="MM/YY"
                                                    value={expiry}
                                                    onChange={e => setExpiry(formatExpiry(e.target.value))}
                                                    maxLength={5}
                                                    className="w-full h-12 border border-gray-200 rounded-xl px-4 text-sm font-mono outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                                                />
                                                {cardInfo && (
                                                    <p className="text-[10px] text-gray-400 mt-1">
                                                        Hint: {cardInfo.expiryMonth}/{cardInfo.expiryYear?.toString().padStart(2, '0')}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                                <div className="relative">
                                                    <input
                                                        required
                                                        type={showCvv ? 'text' : 'password'}
                                                        placeholder="•••"
                                                        value={cvv}
                                                        onChange={e => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                                                        maxLength={3}
                                                        className="w-full h-12 border border-gray-200 rounded-xl px-4 pr-11 text-sm font-mono outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-gray-400 tracking-widest"
                                                    />
                                                    <button type="button" onClick={() => setShowCvv(!showCvv)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500">
                                                        {showCvv ? <EyeOff size={15} /> : <Eye size={15} />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {cardError && (
                                            <p className="text-xs text-red-500 flex items-center gap-1">
                                                <AlertCircle size={12} /> {cardError}
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all text-sm active:scale-[0.99] disabled:opacity-60 shadow-md shadow-blue-500/20"
                                        >
                                            Pay {formatCurrency(total)} <ArrowRight size={18} />
                                        </button>
                                    </>
                                )}

                                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                                    <Lock size={12} className="text-green-500" />
                                    <span>Your connection is secured with 256-bit encryption</span>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* ── UPI FORM ── */}
                    {step === 'UPI_FORM' && (
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                            <h2 className="text-xl font-bold text-gray-900">ZenPay UPI Payment</h2>
                            <p className="text-sm text-gray-500 mt-1 mb-5">Enter your registered ZenPay UPI ID to continue.</p>

                            <div className="flex border-b border-gray-200 mb-6">
                                {[
                                    { id: 'id' as const, label: 'Pay via UPI ID', icon: QrCode },
                                    { id: 'qr' as const, label: 'Pay via QR Code', icon: QrCode },
                                ].map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setUpiTab(tab.id)}
                                        className={`flex items-center gap-2 pb-3 px-1 mr-6 text-sm font-medium border-b-2 transition-colors ${upiTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        <tab.icon size={14} /> {tab.label}
                                    </button>
                                ))}
                            </div>

                            {upiTab === 'id' && (
                                <form onSubmit={handleUpiPay} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Enter UPI ID / VPA</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="e.g. 1234567890@zenpay"
                                                value={upiId}
                                                onChange={e => handleUpiChange(e.target.value)}
                                                className={`w-full h-12 border rounded-xl px-4 pr-28 text-sm outline-none transition-all ${upiValidation === 'valid' ? 'border-green-400 bg-green-50/30 focus:border-green-500' :
                                                    upiValidation === 'invalid' ? 'border-red-300 bg-red-50/30 focus:border-red-400' :
                                                        'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10'
                                                    }`}
                                            />
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                                {upiValidation === 'validating' && <Loader2 size={14} className="animate-spin text-gray-400" />}
                                                {upiValidation === 'valid' && <span className="text-[9px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">VERIFIED</span>}
                                                {upiValidation === 'invalid' && <AlertCircle size={14} className="text-red-400" />}
                                            </div>
                                        </div>
                                        {upiValidation === 'valid' && upiInfo && (
                                            <div className="mt-2 flex items-center gap-2 text-xs text-green-600 font-medium bg-green-50 px-3 py-2 rounded-lg">
                                                <CheckCheck size={13} />
                                                ZenPay verified · {upiInfo.holderName} · Balance: {formatCurrency(upiInfo.balancePaise)}
                                            </div>
                                        )}
                                        {upiError && (
                                            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                                                <AlertCircle size={12} /> {upiError}
                                            </p>
                                        )}
                                        <p className="text-xs text-gray-400 mt-2">
                                            Format: <span className="italic">mobilenumber@zenpay</span> · Only ZenPay accounts accepted
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitting || upiValidation !== 'valid'}
                                        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all text-sm active:scale-[0.99] disabled:opacity-50 shadow-md shadow-blue-500/20"
                                    >
                                        Verify and Pay {formatCurrency(total)} <ArrowRight size={18} />
                                    </button>
                                    <p className="text-xs text-gray-400 text-center">
                                        By continuing, you agree to our{' '}
                                        <span className="text-blue-600 cursor-pointer hover:underline">Terms of Service</span> and{' '}
                                        <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span>.
                                    </p>
                                </form>
                            )}

                            {upiTab === 'qr' && (
                                <div className="flex flex-col items-center py-8">
                                    <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xl shadow-blue-500/5 mb-6">
                                        <div className="size-48 flex items-center justify-center bg-white">
                                            <QRCode
                                                value={`upi://pay?pa=merchant_${order?.merchantId || 'test'}@zenpay&pn=${encodeURIComponent(order?.merchant?.businessName || 'ZenPay Merchant')}&am=${(total / 100).toFixed(2)}&cu=INR&tn=${encodeURIComponent('Order ' + orderId.slice(-7))}`}
                                                size={180}
                                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                viewBox={`0 0 256 256`}
                                                level="H"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                            <QrCode size={12} /> Live QR Active
                                        </div>
                                        <p className="text-sm font-bold text-gray-900 text-center">Scan with any UPI app to pay</p>
                                        <p className="text-xs text-gray-500 text-center max-w-[200px]">Use your phone camera or ZenPay app to scan this QR code instantly.</p>
                                        <div className="mt-2 text-lg font-black text-blue-600">
                                            {formatCurrency(total)}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                                <span>SUPPORTED BY ZENPAY</span>
                                <div className="flex items-center gap-1.5 normal-case text-xs font-medium"><Lock size={11} className="text-green-500" /> Safe & Secure</div>
                            </div>
                        </div>
                    )}

                    {/* ── UPI PIN ── */}
                    {step === 'UPI_PIN' && (
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 max-w-sm w-full relative">
                            <button onClick={() => setStep('UPI_FORM')} className="absolute top-4 left-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                                <ArrowLeft size={18} />
                            </button>
                            <div className="flex flex-col items-center">
                                <div className="size-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                    <Lock size={28} className="text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Enter UPI PIN</h2>
                                <p className="text-sm text-gray-500 mt-2 text-center mb-6">
                                    Please enter your 6-digit ZenPay UPI PIN to secure this transaction.
                                </p>

                                <form onSubmit={handleUpiPinSubmit} className="w-full space-y-6">
                                    <div className="relative">
                                        <input
                                            required
                                            type={showUpiPin ? 'text' : 'password'}
                                            placeholder="••••••"
                                            value={upiPin}
                                            onChange={e => setUpiPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                            maxLength={6}
                                            className="w-full h-14 border-2 border-gray-200 rounded-xl px-6 text-center text-2xl font-mono tracking-[0.5em] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all font-bold"
                                        />
                                        <button type="button" onClick={() => setShowUpiPin(!showUpiPin)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500">
                                            {showUpiPin ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={upiPin.length !== 6 || submitting}
                                        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50 shadow-md shadow-blue-500/20"
                                    >
                                        Verify PIN & Pay <ArrowRight size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* ── PROCESSING ── */}
                    {step === 'PROCESSING' && (
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-16 flex flex-col items-center text-center">
                            <div className="relative mb-8">
                                <Loader2 size={56} className="text-blue-600 animate-spin" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="size-2.5 bg-blue-600 rounded-full" />
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Processing Payment</h2>
                            <p className="text-sm text-gray-500 mt-2 max-w-xs">Please wait while we verify your transaction securely…</p>
                        </div>
                    )}

                    {/* ── SUCCESS ── */}
                    {step === 'SUCCESS' && (
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-14 flex flex-col items-center text-center">
                            <div className="size-20 bg-green-50 rounded-full flex items-center justify-center mb-6 relative">
                                <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping" />
                                <CheckCircle2 size={44} strokeWidth={2} className="text-green-500 relative z-10" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Payment Successful!</h2>
                            <p className="text-sm text-gray-500 mt-2">Transaction #{orderId.slice(-6).toUpperCase()} completed.</p>
                            <button onClick={() => onSuccess({ status: 'success' })} className="mt-8 px-8 h-11 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-md shadow-blue-500/20">
                                Finish & Return
                            </button>
                        </div>
                    )}

                    {/* ── FAILURE ── */}
                    {step === 'FAILURE' && (
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-14 flex flex-col items-center text-center">
                            <div className="size-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
                                <XCircle size={44} strokeWidth={2} className="text-red-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Payment Failed</h2>
                            <p className="text-sm text-gray-500 mt-2 max-w-xs">{error || 'Something went wrong. Please try again.'}</p>
                            <button onClick={() => { setError(null); setStep('SELECT_METHOD'); }} className="mt-8 px-8 h-11 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-md shadow-blue-500/20">
                                Try Again
                            </button>
                            <button onClick={() => onFailure({ error })} className="mt-3 text-sm text-blue-600 hover:underline">
                                Cancel Payment
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-3 text-center flex-shrink-0">
                <p className="text-xs text-gray-400">
                    Powered by <span className="font-bold text-gray-600">⚡ ZenPay</span> — Secure Payment Infrastructure
                </p>
                <p className="text-[10px] text-gray-300 mt-0.5">Terms of Service · Privacy Policy · Refund Policy</p>
            </footer>
        </div>
    );
};
