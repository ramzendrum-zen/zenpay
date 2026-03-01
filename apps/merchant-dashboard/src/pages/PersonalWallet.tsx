import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { io } from 'socket.io-client';
import {
    Send,
    ArrowDownLeft,
    Plus,
    ArrowRight,
    Loader2,
    X,
    CheckCircle2,
    ArrowUpRight,
    CreditCard,
    ChevronRight,
    Zap,
    QrCode,
    PieChart,
    Lock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { FlippableCreditCard } from '../components/ui/credit-debit-card';
import toast from 'react-hot-toast';

const API_BASE = 'http://localhost:4000/v1/consumer';
const SOCKET_URL = 'http://localhost:4000';

const formatPaise = (paise: number) => {
    return (paise / 100).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
    });
};

export const PersonalWallet: React.FC = () => {
    const { token, merchant } = useAuth();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [ledger, setLedger] = useState<any[]>([]);
    const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
    const [transferStatus, setTransferStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [transferForm, setTransferForm] = useState({ toUpiId: '', amount: '', note: '' });
    const [userEmail, setUserEmail] = useState('');
    const [showPinSetup, setShowPinSetup] = useState(false);
    const [pinForm, setPinForm] = useState('');
    const [pinLoading, setPinLoading] = useState(false);
    const [revealedCard, setRevealedCard] = useState<any>(null);

    useEffect(() => {
        fetchWalletData();
        const socket = io(SOCKET_URL, { query: { userId: merchant?.id } });

        socket.on('balance_update', (data) => {
            console.log('📡 Real-time Balance Update:', data);
            fetchWalletData();
        });

        return () => { socket.disconnect(); };
    }, []);

    const fetchWalletData = async () => {
        try {
            const [meRes, ledgerRes] = await Promise.all([
                axios.get(`${API_BASE}/me`, { headers: { Authorization: `Bearer ${token}` } }),
                axios.get(`${API_BASE}/ledger`, { headers: { Authorization: `Bearer ${token}` } })
            ]);
            setUser(meRes.data.data);
            setUserEmail(meRes.data.data?.user?.email || ''); // Set user email here
            setLedger(ledgerRes.data.data);
        } catch (error) {
            console.error('Failed to fetch wallet data:', error);
            // Handle case where wallet doesn't exist yet (Auto-create for demo)
            if ((error as any).response?.status === 404) {
                initializeWallet();
            }
        } finally {
            setLoading(false);
        }
    };

    const initializeWallet = async () => {
        try {
            await axios.post(`${API_BASE}/register`, {
                name: merchant?.name,
                email: merchant?.email,
                password: 'password123' // Simplified for demo
            });
            fetchWalletData();
        } catch (e) {
            console.error('Wallet initialization failed');
        }
    };

    const handleTransfer = async (e: React.FormEvent) => {
        e.preventDefault();
        setTransferStatus('sending');
        try {
            const amount = parseFloat(transferForm.amount);
            await axios.post(`${API_BASE}/transfer`, {
                toUpiId: transferForm.toUpiId,
                amountPaise: Math.round(amount * 100),
                note: transferForm.note
            }, { headers: { Authorization: `Bearer ${token}` } });

            setTransferStatus('success');
            setTimeout(() => {
                setIsTransferModalOpen(false);
                setTransferStatus('idle');
                setTransferForm({ toUpiId: '', amount: '', note: '' });
                fetchWalletData();
            }, 2000);
        } catch (error) {
            setTransferStatus('error');
            setTimeout(() => setTransferStatus('idle'), 3000);
        }
    };

    // Verify password before revealing card details
    const verifyCardPassword = async (password: string): Promise<boolean> => {
        try {
            const email = user?.user?.email || userEmail;
            if (!email) return false;

            // Call the secure reveal endpoint
            const revealRes = await axios.post(`${API_BASE}/reveal-card`, { password }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (revealRes.data.status === 'success') {
                setRevealedCard(revealRes.data.data);
                return true;
            }
            return false;
        } catch {
            return false;
        }
    };

    const handleSetupPin = async (e: React.FormEvent) => {
        e.preventDefault();
        setPinLoading(true);
        try {
            await axios.post(`${API_BASE}/setup-pin`, { pin: pinForm }, { headers: { Authorization: `Bearer ${token}` } });
            toast.success('Transaction PIN updated successfully!');
            setShowPinSetup(false);
            setPinForm('');
            fetchWalletData();
        } catch (error: any) {
            toast.error(error.response?.data?.error || 'Failed to setup PIN');
        } finally {
            setPinLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="h-[60vh] flex flex-col items-center justify-center gap-4 text-slate-400">
                <Loader2 size={40} className="animate-spin text-blue-600" />
                <p className="text-sm font-medium animate-pulse uppercase tracking-[0.2em]">Synchronizing Ledger...</p>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {/* Setup PIN Banner */}
            {user?.user && !user.user.hasTransactionPin && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-center justify-between">
                    <div>
                        <h4 className="text-amber-900 font-bold flex items-center gap-2">
                            <Lock size={18} /> Setup Transaction PIN Required
                        </h4>
                        <p className="text-xs text-amber-700 mt-1">To secure your ZenPay UPI transactions, please configure a 6-digit PIN.</p>
                    </div>
                    <button onClick={() => setShowPinSetup(true)} className="px-5 py-2.5 bg-amber-600 text-white font-bold rounded-xl text-sm hover:bg-amber-700 transition-colors shadow-sm">
                        Setup PIN Now
                    </button>
                </div>
            )}

            {/* Header Section */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Personal Wallet</h1>
                    <p className="text-sm text-slate-500 mt-1">Manage your personal funds, send money, and track daily expenses.</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">UPI ID</p>
                    <p className="text-sm font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">{user?.user?.upiId}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content (Left) */}
                <div className="lg:col-span-8 space-y-8">
                    {/* PC Card Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <FlippableCreditCard
                            cardholderName={user?.user?.name || merchant?.name || 'ZenWallet User'}
                            cardNumber={revealedCard?.cardNumber || user?.cards?.[0]?.cardNumber || ''}
                            expiryDate={revealedCard
                                ? `${revealedCard.expiryMonth}/${revealedCard.expiryYear.toString().padStart(2, '0')}`
                                : `${user?.cards?.[0]?.expiryMonth || 12}/${user?.cards?.[0]?.expiryYear?.toString().padStart(2, '0') || '30'}`}
                            cvv={revealedCard?.cvv || '•••'}
                            spending={user?.user?.balance ? user.user.balance / 100 : 0}
                            className="w-full max-w-[400px]"
                            requiresPassword={true}
                            onPasswordVerify={verifyCardPassword}
                        />

                        <div className="rounded-[2.5rem] bg-slate-900 p-8 relative overflow-hidden shadow-2xl h-56">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Zap size={100} className="text-white" />
                            </div>
                            <div className="flex flex-col h-full justify-between relative z-10">
                                <div>
                                    <h4 className="text-white/50 text-[10px] font-bold uppercase tracking-widest">ZenVault Protection</h4>
                                    <h3 className="text-xl font-bold text-white mt-1">Stashing Active</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">
                                            <span>Monthly Limit Usage</span>
                                            <span>65%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="w-[65%] h-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-slate-400 font-medium">Auto-protection enabled for transactions over ₹ 10,000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transactions Section */}
                    <section className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold text-slate-900">Live Transaction Stream</h3>
                            <div className="flex items-center gap-2">
                                <div className="size-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            {ledger.map(item => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="p-5 bg-white rounded-[1.5rem] border border-slate-100 flex items-center justify-between shadow-sm hover:border-blue-100 transition-all cursor-pointer group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`size-12 rounded-2xl flex items-center justify-center ${item.type === 'CREDIT' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-600'}`}>
                                            {item.type === 'CREDIT' ? <ArrowDownLeft size={24} /> : <ArrowUpRight size={24} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-slate-900 tracking-tight">{item.referenceType === 'TRANSFER' ? 'Internal Transfer' : item.referenceType}</h4>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{new Date(item.createdAt).toLocaleDateString()} • {item.referenceId}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8">
                                        <div className="text-right">
                                            <p className={`font-black text-sm ${item.type === 'CREDIT' ? 'text-emerald-600' : 'text-slate-900'}`}>
                                                {item.type === 'CREDIT' ? '+' : '-'}{formatPaise(item.amountPaise)}
                                            </p>
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Balance: {formatPaise(item.balanceAfter)}</span>
                                        </div>
                                        <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                                    </div>
                                </motion.div>
                            ))}
                            {ledger.length === 0 && (
                                <div className="p-12 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
                                    <p className="text-slate-400 text-sm font-medium">No transactions recorded yet.</p>
                                </div>
                            )}
                        </div>
                    </section>
                </div>

                {/* Sidebar Widgets (Right) */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Quick Actions Card */}
                    <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                        <h4 className="text-[10px] font-bold text-slate-400 mb-8 uppercase tracking-widest">Wallet Control Hub</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { id: 'send', label: 'Send Funds', icon: Send, color: 'text-blue-600 bg-blue-50', onClick: () => setIsTransferModalOpen(true) },
                                { id: 'receive', label: 'Receive', icon: ArrowDownLeft, color: 'text-emerald-600 bg-emerald-50' },
                                { id: 'scan', label: 'Scan Pay', icon: QrCode, color: 'text-purple-600 bg-purple-50' },
                                { id: 'card', label: 'Card Control', icon: CreditCard, color: 'text-rose-600 bg-rose-50' },
                            ].map(action => (
                                <button
                                    key={action.id}
                                    onClick={action.onClick}
                                    className="flex flex-col items-center gap-3 p-5 rounded-3xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all group active:scale-95"
                                >
                                    <div className={`size-12 rounded-2xl flex items-center justify-center ${action.color} group-hover:scale-110 transition-transform shadow-sm`}>
                                        <action.icon size={22} />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 text-center">{action.label}</span>
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsTransferModalOpen(true)}
                            className="w-full mt-10 py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-900/20 text-sm"
                        >
                            <Plus size={18} />
                            <span>Instant Transfer</span>
                        </button>
                    </div>

                    {/* Analytics Preview */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-200">
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Receive via QR</h4>
                            <div className="size-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                <QrCode size={20} />
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm mb-4">
                                <QRCode
                                    value={`upi://pay?pa=${user?.user?.upiId || ''}&pn=${encodeURIComponent(user?.user?.name || merchant?.name || 'ZenPay User')}&cu=INR`}
                                    size={140}
                                    level="L"
                                />
                            </div>
                            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Your Personal QR</p>
                            <p className="text-center text-xs text-slate-500 max-w-[160px]">Anyone can scan this to pay you instantly on ZenPay.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-8 border border-slate-200">
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Spending Profile</h4>
                            <div className="size-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                <PieChart size={20} />
                            </div>
                        </div>
                        <div className="space-y-6">
                            {[
                                { label: 'Merchant Payments', val: 72, color: 'bg-blue-600' },
                                { label: 'Peer Transfers', val: 18, color: 'bg-emerald-500' },
                                { label: 'ATM Withdrawals', val: 10, color: 'bg-slate-200' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                                        <span className="text-slate-500">{item.label}</span>
                                        <span className="text-slate-900">{item.val}%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Transfer Modal */}
            <AnimatePresence>
                {isTransferModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                            onClick={() => setIsTransferModalOpen(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-[2.5rem] w-full max-w-md p-10 relative z-10 shadow-3xl overflow-hidden"
                        >
                            {transferStatus === 'success' ? (
                                <div className="text-center py-10 space-y-6">
                                    <div className="size-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Transfer Successful!</h3>
                                    <p className="text-slate-500 text-sm">₹ {transferForm.amount} sent to {transferForm.toUpiId}</p>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-2xl font-bold text-slate-900">Send Funds</h3>
                                        <button onClick={() => setIsTransferModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-all"><X size={24} /></button>
                                    </div>

                                    <form onSubmit={handleTransfer} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Recipient UPI ID</label>
                                            <input
                                                required
                                                placeholder="username@zenwallet"
                                                className="w-full h-14 px-6 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none"
                                                value={transferForm.toUpiId}
                                                onChange={e => setTransferForm({ ...transferForm, toUpiId: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount (INR)</label>
                                            <div className="relative">
                                                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-slate-400">₹</span>
                                                <input
                                                    required
                                                    type="number"
                                                    placeholder="0.00"
                                                    className="w-full h-14 pl-12 pr-6 bg-slate-50 border border-slate-200 rounded-2xl text-2xl font-black focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none"
                                                    value={transferForm.amount}
                                                    onChange={e => setTransferForm({ ...transferForm, amount: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Notes (Optional)</label>
                                            <input
                                                placeholder="Reason for payment"
                                                className="w-full h-14 px-6 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:border-blue-600 transition-all outline-none"
                                                value={transferForm.note}
                                                onChange={e => setTransferForm({ ...transferForm, note: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            disabled={transferStatus === 'sending'}
                                            type="submit"
                                            className="w-full h-16 bg-blue-600 text-white font-black rounded-[1.5rem] shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 hover:bg-blue-700 transition-all active:scale-[0.98] disabled:bg-slate-300"
                                        >
                                            {transferStatus === 'sending' ? <Loader2 size={24} className="animate-spin" /> : <>Confirm Transaction <ArrowRight size={20} /></>}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            {/* PIN Setup Modal */}
            <AnimatePresence>
                {showPinSetup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowPinSetup(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
                        <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }} className="bg-white rounded-[2rem] w-full max-w-sm p-8 relative z-10 shadow-2xl">
                            <button onClick={() => setShowPinSetup(false)} className="absolute right-6 top-6 text-slate-400 hover:text-slate-600">
                                <X size={20} />
                            </button>
                            <div className="size-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto">
                                <Lock size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-center text-slate-900">Secure Your Wallet</h3>
                            <p className="text-slate-500 text-center mt-2 text-sm">Enter a 6-digit PIN to authorize future UPI transactions.</p>

                            <form onSubmit={handleSetupPin} className="space-y-6 mt-8">
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        maxLength={6}
                                        value={pinForm}
                                        onChange={(e) => setPinForm(e.target.value.replace(/[^0-9]/g, ''))}
                                        className="w-full text-center text-2xl font-black tracking-[0.5em] h-16 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none"
                                        placeholder="••••••"
                                    />
                                    <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                                        Exactly 6 numeric digits required
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    disabled={pinLoading || pinForm.length !== 6}
                                    className="w-full h-14 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 transition-all active:scale-95 text-sm uppercase tracking-widest mt-4"
                                >
                                    {pinLoading ? 'Saving PIN...' : 'Save Security PIN'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
