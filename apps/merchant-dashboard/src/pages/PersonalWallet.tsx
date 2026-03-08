import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import axios from 'axios';
import { io } from 'socket.io-client';
import QRCode from 'react-qr-code';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { FlippableCreditCard } from '../components/ui/credit-debit-card';
import {
    Wallet,
    ArrowUpRight,
    ArrowDownLeft,
    QrCode,
    Plus,
    History,
    ShieldCheck,
    X,
    Copy
} from 'lucide-react';

import { API_BASE as _API_BASE, SOCKET_URL } from '../lib/config';
const API_BASE = `${_API_BASE}/consumer`;

const AnimatedCounter = ({ value }: { value: number }) => {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        const controls = animate(displayValue, value, {
            duration: 0.8,
            ease: "easeOut",
            onUpdate: (latest) => setDisplayValue(latest)
        });
        return () => controls.stop();
    }, [value]);

    const formatted = (displayValue / 100).toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const [whole, decimal] = formatted.split('.');

    return (
        <span className="tabular-nums flex items-baseline">
            <span className="text-slate-400 font-medium mr-0.5 text-2xl">₹</span>
            <span className="text-slate-900">{whole}</span>
            <span className="text-slate-400 text-2xl font-medium">.{decimal}</span>
        </span>
    );
};

export const PersonalWallet: React.FC = () => {
    const { token, merchant } = useAuth();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [ledger, setLedger] = useState<any[]>([]);

    const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
    const [isTopUpModalOpen, setIsTopUpModalOpen] = useState(false);
    const [transferStatus, setTransferStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const [topUpStatus, setTopUpStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [transferForm, setTransferForm] = useState({ toUpiId: '', amount: '' });
    const [topUpAmount, setTopUpAmount] = useState('');
    const [isScanModalOpen, setIsScanModalOpen] = useState(false);
    const [scannedUpiId, setScannedUpiId] = useState('');
    const [revealedCard, setRevealedCard] = useState<{ cardNumber: string; cvv: string } | null>(null);
    const [walletToken, setWalletToken] = useState<string | null>(localStorage.getItem('zw_wallet_token'));
    const [isMyQrModalOpen, setIsMyQrModalOpen] = useState(false);
    const wasInitialized = React.useRef(false);

    useEffect(() => {
        fetchWalletData();
    }, []);

    useEffect(() => {
        if (!user?.user?.id) return;

        const socket = io(SOCKET_URL, {
            query: { userId: user.user.id }
        });

        socket.on('balance_update', (data) => {
            fetchWalletData();
            if (data.amountPaise) {
                const amt = (data.amountPaise / 100).toFixed(2);
                toast(`Balance updated: ₹${amt}`, { icon: '💰' });
            }
        });

        socket.on('payment_received', (data) => {
            const amt = (data.amount / 100).toFixed(2);
            toast.success(`Received ₹${amt} from ${data.from || 'ZenPay User'}`, {
                duration: 4000,
                style: {
                    borderRadius: '12px',
                    background: '#09090b',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.05)',
                }
            });
            fetchWalletData();
        });

        return () => { socket.disconnect(); };
    }, [user?.user?.id]);

    const fetchWalletData = async () => {
        try {
            const activeToken = walletToken || token;
            const [meRes, ledgerRes] = await Promise.all([
                axios.get(`${API_BASE}/me`, { headers: { Authorization: `Bearer ${activeToken}` } }),
                axios.get(`${API_BASE}/ledger`, { headers: { Authorization: `Bearer ${activeToken}` } })
            ]);
            setUser(meRes.data.data);
            setLedger(ledgerRes.data.data);
            setLoading(false);
        } catch (error: any) {
            // Trigger initialization if user doesn't exist (404) or session is missing (401)
            if ((error.response?.status === 404 || error.response?.status === 401) && !wasInitialized.current) {
                wasInitialized.current = true;
                initializeWallet();
            } else {
                setLoading(false);
            }
        }
    };

    const initializeWallet = async () => {
        try {
            const res = await axios.post(`${API_BASE}/register`, {
                name: merchant?.name,
                email: merchant?.email?.toLowerCase(),
                password: 'password123'
            });
            if (res.data?.data?.token) {
                localStorage.setItem('zw_wallet_token', res.data.data.token);
                setWalletToken(res.data.data.token);
            }
            fetchWalletData();
        } catch (error: any) {
            // If user already exists, just try fetching data again
            if (error.response?.data?.error?.includes('already exists')) {
                fetchWalletData();
            } else {
                setLoading(false);
            }
        }
    };

    const handleTransfer = async (e: React.FormEvent) => {
        e.preventDefault();
        setTransferStatus('sending');
        const activeToken = walletToken || token;
        try {
            await axios.post(`${API_BASE}/transfer`, {
                toUpiId: transferForm.toUpiId,
                amountPaise: Math.round(parseFloat(transferForm.amount) * 100)
            }, { headers: { Authorization: `Bearer ${activeToken}` } });

            setTransferStatus('success');
            setTimeout(() => {
                setIsTransferModalOpen(false);
                setTransferStatus('idle');
                setTransferForm({ toUpiId: '', amount: '' });
                fetchWalletData();
            }, 800);
        } catch { setTransferStatus('idle'); toast.error('Check funds'); }
    };

    const handleTopUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setTopUpStatus('loading');
        const activeToken = walletToken || token;
        try {
            await axios.post(`${API_BASE}/top-up`, {
                amountPaise: Math.round(parseFloat(topUpAmount) * 100),
            }, { headers: { Authorization: `Bearer ${activeToken}` } });
            setTopUpStatus('success');
            setTimeout(() => {
                setIsTopUpModalOpen(false);
                setTopUpStatus('idle');
                setTopUpAmount('');
                fetchWalletData();
            }, 800);
        } catch (err: any) {
            setTopUpStatus('idle');
            const msg = err.response?.data?.error || 'Failed to add funds';
            toast.error(msg);
        }
    };

    const verifyCardPassword = async (credential: string): Promise<boolean> => {
        try {
            const isPin = /^\d{6}$/.test(credential);
            const payload = isPin ? { pin: credential } : { password: credential };
            const activeToken = walletToken || token;
            const { data } = await axios.post(`${API_BASE}/reveal-card`, payload, {
                headers: { Authorization: `Bearer ${activeToken}` }
            });
            if (data.status === 'success') {
                setRevealedCard({ cardNumber: data.data.cardNumber, cvv: data.data.cvv });
                return true;
            }
            return false;
        } catch { return false; }
    };

    if (loading) return null;

    return (
        <div className="w-full space-y-8 pb-20">
            {/* Top Left Header */}
            <div className="flex flex-col gap-0.5">
                <h1 className="text-lg font-bold text-slate-900 tracking-tight">Main Wallet</h1>
                <p className="text-[11px] text-slate-400 font-medium tracking-tight">Manage P2P settlement nodes and liquidity.</p>
                <div className="flex items-center gap-1.5 mt-2">
                    <div className="size-1 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Active</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* ── Left Column: Primary Wallet Stats (4 Columns) ── */}
                <div className="lg:col-span-4 space-y-4">
                    <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm relative group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="size-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                <Wallet size={16} />
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg">
                                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{user?.user?.upiId || 'Loading...'}</span>
                            </div>
                        </div>

                        <div className="space-y-0.5">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Active UPI ID</p>
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-black text-slate-900 tracking-tight">{user?.user?.upiId || '---'}</span>
                                <button
                                    onClick={() => {
                                        if (user?.user?.upiId) {
                                            navigator.clipboard.writeText(user.user.upiId);
                                            toast.success('UPI ID Copied');
                                        }
                                    }}
                                    className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-blue-600 transition-all border border-transparent hover:border-slate-100"
                                >
                                    <Copy size={14} />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-0.5 mt-4">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Balance</p>
                            <div className="text-3xl font-bold tracking-tight text-slate-900">
                                <AnimatedCounter value={user?.user?.balance || 0} />
                            </div>
                        </div>

                        <div className="mt-8 flex gap-2">
                            <button onClick={() => setIsTransferModalOpen(true)} className="flex-1 h-10 bg-blue-600 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-sm">Transfer</button>
                            <button onClick={() => setIsTopUpModalOpen(true)} className="flex-1 h-10 bg-white text-slate-900 border border-slate-200 rounded-lg font-bold text-[10px] uppercase tracking-widest active:scale-95">Deposit</button>
                        </div>
                    </div>

                    <FlippableCreditCard
                        cardholderName={user?.user?.name || merchant?.name || 'ZenWallet User'}
                        cardNumber={revealedCard?.cardNumber || user?.cards?.[0]?.cardNumber || ''}
                        expiryDate={`${user?.cards?.[0]?.expiryMonth || 12}/${user?.cards?.[0]?.expiryYear?.toString().padStart(2, '0') || '30'}`}
                        cvv={revealedCard?.cvv || '•••'}
                        spending={user?.user?.balance ? user.user.balance / 100 : 0}
                        requiresPassword={!!user?.cards?.[0]}
                        onPasswordVerify={verifyCardPassword}
                        className="w-full"
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <div onClick={() => setIsTopUpModalOpen(true)} className="bg-white border border-slate-200/60 p-4 rounded-xl shadow-sm hover:border-blue-100 transition-all cursor-pointer group">
                            <Plus size={14} className="text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                            <h4 className="text-[10px] font-bold text-slate-900 uppercase">Add Funds</h4>
                        </div>
                        <div onClick={() => setIsMyQrModalOpen(true)} className="bg-white border border-slate-200/60 p-4 rounded-xl shadow-sm hover:border-blue-100 transition-all cursor-pointer group">
                            <QrCode size={14} className="text-emerald-500 mb-2 group-hover:scale-110 transition-transform" />
                            <h4 className="text-[10px] font-bold text-slate-900 uppercase">My QR</h4>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-4 text-white relative overflow-hidden">
                        <h4 className="text-[9px] font-bold uppercase tracking-widest text-blue-400 flex items-center gap-1.5"><ShieldCheck size={10} /> Secure Node</h4>
                        <p className="text-[10px] text-slate-500 mt-1 font-medium">Biometric signing is enabled.</p>
                    </div>
                </div>

                {/* ── Right Column: Activity Feed (8 Columns) ── */}
                <div className="lg:col-span-8 bg-white border border-slate-200/60 rounded-2xl shadow-sm flex flex-col min-h-[400px]">
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2"><History size={12} /> Ledger Activity</h3>
                    </div>

                    <div className="flex-1 overflow-y-auto max-h-[500px] no-scrollbar p-2">
                        {ledger.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-all border border-transparent">
                                <div className="flex items-center gap-3">
                                    <div className={`size-8 rounded-lg flex items-center justify-center border text-xs ${item.type === 'CREDIT' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
                                        {item.type === 'CREDIT' ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-slate-900">{item.referenceType === 'TOPUP' ? 'Deposit' : 'Transfer'}</p>
                                        <p className="text-[9px] text-slate-400 font-medium uppercase tracking-tighter">{new Date(item.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit' })}</p>
                                    </div>
                                </div>
                                <p className={`text-[12px] font-bold ${item.type === 'CREDIT' ? 'text-emerald-600' : 'text-slate-900'}`}>
                                    {item.type === 'CREDIT' ? '+' : '-'}₹{(item.amountPaise / 100).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>
                        ))}
                    </div>
                </div >
            </div >

            {/* Modals - Minimal & Small */}
            <AnimatePresence>
                {
                    isTransferModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]" onClick={() => setIsTransferModalOpen(false)} />
                            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-[280px] rounded-2xl p-6 shadow-xl border border-slate-100">
                                <h3 className="text-xs font-bold text-slate-900 mb-4 tracking-tight">Transfer Liquidity</h3>
                                <form onSubmit={handleTransfer} className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[8px] font-bold text-slate-400 uppercase tracking-widest ml-1">Destination ID</label>
                                        <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-[11px] font-bold text-slate-800 outline-none focus:border-blue-500/20" placeholder="user@zenpay" value={transferForm.toUpiId} onChange={e => setTransferForm({ ...transferForm, toUpiId: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[8px] font-bold text-slate-400 uppercase tracking-widest ml-1">Amount (₹)</label>
                                        <input required type="number" step="0.01" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-lg font-bold text-slate-900 outline-none focus:border-blue-500/20" placeholder="0.00" value={transferForm.amount} onChange={e => setTransferForm({ ...transferForm, amount: e.target.value })} />
                                    </div>
                                    <button type="submit" className="w-full h-11 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all active:scale-95 shadow-md">
                                        {transferStatus === 'sending' ? 'Clearing...' : 'Execute'}
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    )
                }

                {
                    isTopUpModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]" onClick={() => setIsTopUpModalOpen(false)} />
                            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-[280px] rounded-[2rem] p-8 shadow-2xl border border-slate-100 text-center">
                                <h3 className="text-xs font-bold text-slate-900 mb-6 uppercase tracking-widest">Deposit</h3>
                                <form onSubmit={handleTopUp} className="space-y-6">
                                    <div className="relative w-full">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl font-bold text-slate-300">₹</span>
                                        <input required type="number" step="0.01" min="1" className="w-full bg-transparent text-4xl font-bold text-center outline-none tabular-nums text-slate-900 pl-8" placeholder="0.00" value={topUpAmount} onChange={e => setTopUpAmount(e.target.value)} />
                                    </div>
                                    <div className="flex justify-center gap-1.5">
                                        {['100', '500', '1000', '2000'].map(amt => (
                                            <button key={amt} type="button" onClick={() => setTopUpAmount(amt)} className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-bold text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-all">+₹{amt}</button>
                                        ))}
                                    </div>
                                    <button type="submit" className="w-full h-11 bg-slate-900 text-white font-bold text-[10px] uppercase tracking-widest rounded-xl active:scale-95">
                                        {topUpStatus === 'loading' ? 'Checking...' : 'Initiate'}
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    )
                }
                {/* Scan & Pay Modal */}
                {
                    isScanModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]" onClick={() => setIsScanModalOpen(false)} />
                            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-[320px] rounded-[2rem] p-8 shadow-2xl border border-slate-100 text-center">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Scan & Pay</h3>
                                    <button onClick={() => setIsScanModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X size={16} /></button>
                                </div>

                                <div className="aspect-square bg-slate-100 rounded-3xl mb-6 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <p className="text-white text-[10px] font-bold uppercase tracking-widest">Simulating Scanner...</p>
                                    </div>
                                    <QrCode size={48} className="text-slate-300 mb-2" />
                                    <p className="text-[10px] text-slate-400 font-medium px-6 text-center">In production, this would open the device camera to scan ZenPay QR codes.</p>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest px-4">Or Enter UPI ID Manually</p>
                                    <input
                                        type="text"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[11px] font-bold text-slate-800 outline-none focus:border-blue-500/20"
                                        placeholder="e.g. 1234567890@zenpay"
                                        value={scannedUpiId}
                                        onChange={(e) => setScannedUpiId(e.target.value)}
                                    />
                                    <button
                                        onClick={() => {
                                            if (scannedUpiId.includes('@zenpay')) {
                                                setTransferForm({ toUpiId: scannedUpiId, amount: '' });
                                                setIsScanModalOpen(false);
                                                setIsTransferModalOpen(true);
                                                setScannedUpiId('');
                                            } else {
                                                toast.error('Invalid ZenPay UPI ID');
                                            }
                                        }}
                                        className="w-full h-12 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-widest rounded-xl shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                                    >
                                        Proceed to Pay
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )
                }
                {/* My QR Modal */}
                {
                    isMyQrModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]" onClick={() => setIsMyQrModalOpen(false)} />
                            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-[320px] rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 text-center flex flex-col items-center">
                                <div className="w-full flex justify-between items-center mb-8">
                                    <div className="flex flex-col items-start gap-0.5">
                                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">My Payment QR</h3>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">ZenPay Ecosystem</p>
                                    </div>
                                    <button onClick={() => setIsMyQrModalOpen(false)} className="size-10 bg-slate-50 hover:bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 transition-all">
                                        <X size={18} />
                                    </button>
                                </div>

                                <div className="bg-white p-6 rounded-3xl shadow-xl shadow-blue-500/5 border border-slate-100 mb-8 relative">
                                    <div className="absolute -top-1.5 -left-1.5 size-4 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
                                    <div className="absolute -top-1.5 -right-1.5 size-4 border-t-2 border-r-2 border-blue-500 rounded-tr-lg" />
                                    <div className="absolute -bottom-1.5 -left-1.5 size-4 border-b-2 border-l-2 border-blue-500 rounded-bl-lg" />
                                    <div className="absolute -bottom-1.5 -right-1.5 size-4 border-b-2 border-r-2 border-blue-500 rounded-br-lg" />

                                    <div className="size-48 bg-white flex items-center justify-center overflow-hidden">
                                        <QRCode
                                            value={`upi://pay?pa=${user?.user?.upiId}&pn=${encodeURIComponent(user?.user?.name)}&cu=INR`}
                                            size={180}
                                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                            viewBox={`0 0 256 256`}
                                            level="M"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4 w-full">
                                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">Your UPI ID</p>
                                        <p className="text-sm font-black text-slate-900 tracking-tight">{user?.user?.upiId}</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(user?.user?.upiId);
                                            toast.success('UPI ID Copied');
                                        }}
                                        className="w-full h-12 bg-slate-900 text-white font-bold text-[10px] uppercase tracking-widest rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Copy size={14} /> Copy ID
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )
                }
            </AnimatePresence >
        </div >
    );
};
