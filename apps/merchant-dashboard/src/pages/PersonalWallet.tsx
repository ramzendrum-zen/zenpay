import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import axios from 'axios';
import { io } from 'socket.io-client';
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
    X
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
    const [revealedCard, setRevealedCard] = useState<{ cardNumber: string; cvv: string } | null>(null);
    const wasInitialized = React.useRef(false);

    useEffect(() => {
        fetchWalletData();
        const socket = io(SOCKET_URL, { query: { userId: merchant?.id } });
        socket.on('balance_update', () => fetchWalletData());
        return () => { socket.disconnect(); };
    }, []);

    const fetchWalletData = async () => {
        try {
            const [meRes, ledgerRes] = await Promise.all([
                axios.get(`${API_BASE}/me`, { headers: { Authorization: `Bearer ${token}` } }),
                axios.get(`${API_BASE}/ledger`, { headers: { Authorization: `Bearer ${token}` } })
            ]);
            setUser(meRes.data.data);
            setLedger(ledgerRes.data.data);
            setLoading(false);
        } catch (error: any) {
            if (error.response?.status === 404 && !wasInitialized.current) {
                wasInitialized.current = true;
                initializeWallet();
            } else {
                setLoading(false);
            }
        }
    };

    const initializeWallet = async () => {
        try {
            await axios.post(`${API_BASE}/register`, {
                name: merchant?.name, email: merchant?.email, password: 'password123'
            });
            fetchWalletData();
        } catch (e) {
            setLoading(false);
        }
    };

    const handleTransfer = async (e: React.FormEvent) => {
        e.preventDefault();
        setTransferStatus('sending');
        try {
            await axios.post(`${API_BASE}/transfer`, {
                toUpiId: transferForm.toUpiId,
                amountPaise: Math.round(parseFloat(transferForm.amount) * 100)
            }, { headers: { Authorization: `Bearer ${token}` } });

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
        try {
            await axios.post(`${API_BASE}/top-up`, {
                amountPaise: Math.round(parseFloat(topUpAmount) * 100),
            }, { headers: { Authorization: `Bearer ${token}` } });
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
            const { data } = await axios.post(`${API_BASE}/reveal-card`, payload, {
                headers: { Authorization: `Bearer ${token}` }
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
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-md">
                                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tight">{user?.user?.upiId}</span>
                                <button onClick={() => { navigator.clipboard.writeText(user?.user?.upiId || ''); toast.success('Copied'); }} className="text-slate-200 hover:text-blue-600 transition-colors"><X size={10} /></button>
                            </div>
                        </div>
                        <div className="space-y-0.5">
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

                    <div className="space-y-4">
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

                    <div className="grid grid-cols-2 gap-3">
                        <div onClick={() => setIsTopUpModalOpen(true)} className="bg-white border border-slate-200/60 p-4 rounded-xl shadow-sm hover:border-blue-100 transition-all cursor-pointer group">
                            <Plus size={14} className="text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                            <h4 className="text-[10px] font-bold text-slate-900 uppercase">Add Funds</h4>
                        </div>
                        <div className="bg-white border border-slate-200/60 p-4 rounded-xl shadow-sm hover:border-blue-100 transition-all cursor-pointer group">
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
                </div>
            </div>

            {/* Modals - Minimal & Small */}
            <AnimatePresence>
                {isTransferModalOpen && (
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
                )}

                {isTopUpModalOpen && (
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
                )}
            </AnimatePresence>
        </div>
    );
};
