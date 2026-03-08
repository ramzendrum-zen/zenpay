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
    Copy,
    Lock
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
    const [transferForm, setTransferForm] = useState({ toUpiId: '', amount: '', note: '' });
    const [topUpAmount, setTopUpAmount] = useState('');
    const [isScanModalOpen, setIsScanModalOpen] = useState(false);
    const [scannedUpiId, setScannedUpiId] = useState('');
    const [revealedCard, setRevealedCard] = useState<{ cardNumber: string; cvv: string } | null>(null);
    const [walletToken, setWalletToken] = useState<string | null>(localStorage.getItem('zw_wallet_token'));
    const [isMyQrModalOpen, setIsMyQrModalOpen] = useState(false);
    const [isSetupPinModalOpen, setIsSetupPinModalOpen] = useState(false);
    const [setupPinValue, setSetupPinValue] = useState('');
    const [setupPinStatus, setSetupPinStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const [qrMode, setQrMode] = useState<'display' | 'receive'>('display');
    const [receiveAmount, setReceiveAmount] = useState('');
    const [receiveNote, setReceiveNote] = useState('');
    const [generatedQr, setGeneratedQr] = useState<string | null>(null);

    const wasInitialized = React.useRef(false);

    useEffect(() => {
        fetchWalletData();
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const payTarget = searchParams.get('pay');
        const payAmount = searchParams.get('am');
        const payNote = searchParams.get('tn');

        if (payTarget) {
            setTransferForm({
                toUpiId: payTarget,
                amount: payAmount || '',
                note: payNote || ''
            });
            setIsTransferModalOpen(true);
            // Clean URL
            window.history.replaceState({}, '', window.location.pathname);
        }
    }, [window.location.search]);

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
                amountPaise: Math.round(parseFloat(transferForm.amount) * 100),
                note: transferForm.note
            }, { headers: { Authorization: `Bearer ${activeToken}` } });

            setTransferStatus('success');
            setTimeout(() => {
                setIsTransferModalOpen(false);
                setTransferStatus('idle');
                setTransferForm({ toUpiId: '', amount: '', note: '' });
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

    const handleSetupPin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (setupPinValue.length !== 6) return;
        setSetupPinStatus('loading');
        const activeToken = walletToken || token;
        try {
            await axios.post(`${API_BASE}/setup-pin`, { pin: setupPinValue }, {
                headers: { Authorization: `Bearer ${activeToken}` }
            });
            setSetupPinStatus('success');
            setTimeout(() => {
                setIsSetupPinModalOpen(false);
                setSetupPinStatus('idle');
                fetchWalletData();
            }, 1000);
        } catch (err: any) {
            toast.error(err.response?.data?.error || 'Failed to setup PIN');
            setSetupPinStatus('idle');
        }
    };

    if (loading) return null;

    return (
        <div className="w-full space-y-8 pb-20">
            {/* Setup PIN Banner */}
            {user?.user && !user?.user?.hasTransactionPin && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-600 rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-blue-600/20"
                >
                    <div className="flex items-center gap-3 text-white">
                        <div className="size-8 bg-white/10 rounded-lg flex items-center justify-center">
                            <ShieldCheck size={18} />
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-wider">Setup Security PIN</p>
                            <p className="text-[10px] opacity-80 font-medium">Create a transaction PIN to proceed with payments securely.</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsSetupPinModalOpen(true)}
                        className="bg-white text-blue-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors"
                    >
                        Setup Now
                    </button>
                </motion.div>
            )}

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
                        <div className="space-y-0.5">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><Wallet size={12} className="text-blue-600" /> Active UPI ID</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-slate-800 tracking-tight">{user?.user?.upiId || '---'}</span>
                                <button
                                    onClick={() => {
                                        if (user?.user?.upiId) {
                                            navigator.clipboard.writeText(user.user.upiId);
                                            toast.success('UPI ID Copied');
                                        }
                                    }}
                                    className="p-1 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-blue-600 transition-all border border-transparent hover:border-slate-100"
                                >
                                    <Copy size={12} />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-0.5 mt-6 border-t border-slate-100 pt-6">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Balance</p>
                            <div className="text-2xl font-bold tracking-tight text-slate-800">
                                <AnimatedCounter value={user?.user?.balance || 0} />
                            </div>
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
                </div>

                {/* ── Right Column: Activity Feed (8 Columns) ── */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="bg-white border border-slate-200/60 rounded-2xl shadow-sm flex flex-col min-h-[400px]">
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
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <button onClick={() => setIsTransferModalOpen(true)} className="flex flex-col items-center justify-center gap-2 bg-white border border-slate-200/60 p-4 rounded-xl shadow-sm hover:border-blue-500 hover:text-blue-600 transition-all group active:scale-95">
                            <div className="size-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <ArrowUpRight size={18} />
                            </div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-700 group-hover:text-blue-600">Pay User</h4>
                        </button>
                        <button onClick={() => setIsTopUpModalOpen(true)} className="flex flex-col items-center justify-center gap-2 bg-white border border-slate-200/60 p-4 rounded-xl shadow-sm hover:border-blue-500 hover:text-blue-600 transition-all group active:scale-95">
                            <div className="size-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <Plus size={18} />
                            </div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-700 group-hover:text-blue-600">Add Funds</h4>
                        </button>
                        <button onClick={() => setIsMyQrModalOpen(true)} className="flex flex-col items-center justify-center gap-2 bg-white border border-slate-200/60 p-4 rounded-xl shadow-sm hover:border-blue-500 hover:text-blue-600 transition-all group active:scale-95">
                            <div className="size-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <QrCode size={18} />
                            </div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-700 group-hover:text-blue-600">My QR</h4>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modals - Minimal & Small */}
            <AnimatePresence>
                {
                    isTransferModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]" onClick={() => setIsTransferModalOpen(false)} />
                            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-[320px] rounded-3xl p-8 shadow-2xl border border-slate-100">
                                <h3 className="text-xs font-black text-slate-900 mb-6 uppercase tracking-widest text-center">Transfer Liquidity</h3>
                                <form onSubmit={handleTransfer} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Destination ID</label>
                                        <input required type="text" className="w-full h-12 bg-slate-50 border border-slate-200 rounded-2xl px-5 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-blue-500/20 transition-all" placeholder="user@zenpay" value={transferForm.toUpiId} onChange={e => setTransferForm({ ...transferForm, toUpiId: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Amount (₹)</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-400">₹</span>
                                            <input required type="number" step="0.01" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-5 text-2xl font-black text-slate-900 outline-none focus:bg-white focus:border-blue-500/20 transition-all tabular-nums" placeholder="0.00" value={transferForm.amount} onChange={e => setTransferForm({ ...transferForm, amount: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Note (Optional)</label>
                                        <input type="text" className="w-full h-12 bg-slate-50 border border-slate-200 rounded-2xl px-5 text-[11px] font-bold text-slate-700 outline-none focus:bg-white focus:border-blue-500/20 transition-all" placeholder="What's this for?" value={transferForm.note} onChange={e => setTransferForm({ ...transferForm, note: e.target.value })} />
                                    </div>
                                    <button type="submit" className="w-full h-14 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl transition-all active:scale-95 shadow-xl shadow-slate-900/10 mt-4">
                                        {transferStatus === 'sending' ? 'Clearing...' : 'Execute Payment'}
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
                                                setTransferForm({ toUpiId: scannedUpiId, amount: '', note: '' });
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
                            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-[340px] rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 text-center flex flex-col items-center">
                                <div className="w-full flex justify-between items-center mb-6">
                                    <div className="flex flex-col items-start gap-1">
                                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">My Payment QR</h3>
                                        <div className="flex gap-2">
                                            <button onClick={() => setQrMode('display')} className={`text-[8px] uppercase tracking-[0.2em] font-black px-2 py-1 rounded-md transition-all ${qrMode === 'display' ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'}`}>Static</button>
                                            <button onClick={() => setQrMode('receive')} className={`text-[8px] uppercase tracking-[0.2em] font-black px-2 py-1 rounded-md transition-all ${qrMode === 'receive' ? 'bg-emerald-600 text-white' : 'bg-slate-50 text-slate-400'}`}>Receive</button>
                                        </div>
                                    </div>
                                    <button onClick={() => { setIsMyQrModalOpen(false); setQrMode('display'); setGeneratedQr(null); }} className="size-10 bg-slate-50 hover:bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 transition-all">
                                        <X size={18} />
                                    </button>
                                </div>

                                {qrMode === 'display' ? (
                                    <>
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
                                    </>
                                ) : (
                                    <div className="w-full space-y-6">
                                        {!generatedQr ? (
                                            <div className="space-y-4">
                                                <div className="space-y-2 text-left">
                                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Receive Amount (₹)</label>
                                                    <input
                                                        type="number"
                                                        className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-5 text-2xl font-black text-slate-900 outline-none focus:bg-white focus:border-emerald-500/20 transition-all tabular-nums"
                                                        placeholder="0.00"
                                                        value={receiveAmount}
                                                        onChange={e => setReceiveAmount(e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2 text-left">
                                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Note / Description</label>
                                                    <input
                                                        type="text"
                                                        className="w-full h-12 bg-slate-50 border border-slate-200 rounded-2xl px-5 text-[11px] font-bold text-slate-700 outline-none focus:bg-white focus:border-emerald-500/20 transition-all"
                                                        placeholder="What's this for?"
                                                        value={receiveNote}
                                                        onChange={e => setReceiveNote(e.target.value)}
                                                    />
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        if (!receiveAmount || parseFloat(receiveAmount) <= 0) {
                                                            toast.error('Enter a valid amount');
                                                            return;
                                                        }
                                                        const qrLink = `upi://pay?pa=${user?.user?.upiId}&pn=${encodeURIComponent(user?.user?.name)}&am=${receiveAmount}&tn=${encodeURIComponent(receiveNote)}&cu=INR`;
                                                        setGeneratedQr(qrLink);
                                                    }}
                                                    className="w-full h-14 bg-emerald-600 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl transition-all active:scale-95 shadow-xl shadow-emerald-600/10"
                                                >
                                                    Generate QR
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="space-y-8 flex flex-col items-center">
                                                <div className="bg-white p-6 rounded-3xl shadow-xl shadow-emerald-500/5 border border-slate-100 relative">
                                                    <div className="absolute -top-1.5 -left-1.5 size-4 border-t-2 border-l-2 border-emerald-500 rounded-tl-lg" />
                                                    <div className="absolute -top-1.5 -right-1.5 size-4 border-t-2 border-r-2 border-emerald-500 rounded-tr-lg" />
                                                    <div className="absolute -bottom-1.5 -left-1.5 size-4 border-b-2 border-l-2 border-emerald-500 rounded-bl-lg" />
                                                    <div className="absolute -bottom-1.5 -right-1.5 size-4 border-b-2 border-r-2 border-emerald-500 rounded-br-lg" />

                                                    <div className="size-48 bg-white flex items-center justify-center overflow-hidden">
                                                        <QRCode
                                                            value={generatedQr}
                                                            size={180}
                                                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                            viewBox={`0 0 256 256`}
                                                            level="M"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Receiving Amount</p>
                                                    <p className="text-3xl font-black text-slate-900 tracking-tight">₹{parseFloat(receiveAmount).toFixed(2)}</p>
                                                    {receiveNote && <p className="text-[10px] text-slate-500 font-bold italic">"{receiveNote}"</p>}
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        setGeneratedQr(null);
                                                        setReceiveAmount('');
                                                        setReceiveNote('');
                                                    }}
                                                    className="w-full h-12 bg-slate-50 text-slate-400 font-black text-[9px] uppercase tracking-[0.2em] rounded-xl hover:text-slate-600 transition-all border border-slate-100"
                                                >
                                                    Create Another
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    )
                }
                {/* Setup PIN Modal */}
                {
                    isSetupPinModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]" onClick={() => setIsSetupPinModalOpen(false)} />
                            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-[320px] rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 text-center flex flex-col items-center">
                                <div className="flex flex-col items-center gap-4 mb-8">
                                    <div className="size-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600">
                                        <Lock size={32} />
                                    </div>
                                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Transaction Security</h3>
                                    <p className="text-[10px] text-slate-500 font-medium">Create a 6-digit PIN for authorizing transfers and card reveals.</p>
                                </div>

                                <form onSubmit={handleSetupPin} className="w-full space-y-6">
                                    <div className="relative">
                                        <input
                                            required
                                            type="text"
                                            maxLength={6}
                                            placeholder="••••••"
                                            value={setupPinValue}
                                            onChange={e => setSetupPinValue(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                            className="w-full h-16 bg-slate-50 border border-slate-100 rounded-3xl px-4 text-center text-4xl font-mono tracking-[0.5em] text-slate-900 focus:bg-white focus:border-blue-500/20 transition-all outline-none placeholder:tracking-normal"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={setupPinValue.length !== 6 || setupPinStatus === 'loading'}
                                        className="w-full h-14 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl shadow-xl active:scale-95 transition-all disabled:opacity-50"
                                    >
                                        {setupPinStatus === 'loading' ? 'Encrypting...' : setupPinStatus === 'success' ? 'PIN Active' : 'Enable Security'}
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    )
                }
            </AnimatePresence >
        </div >
    );
};
