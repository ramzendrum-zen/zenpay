import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Loader2, RotateCcw, Search, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE } from '../lib/config';
import toast from 'react-hot-toast';

export const Refunds: React.FC = () => {
    const { token } = useAuth();
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTxn, setSelectedTxn] = useState<any>(null);
    const [refundAmount, setRefundAmount] = useState('');
    const [refundReason, setRefundReason] = useState('Duplicate Payment');
    const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        fetchTransactions();
    }, [token]);

    const fetchTransactions = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${API_BASE.replace('/consumer', '')}/dashboard/transactions?status=PAID`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (data.status === 'success') {
                setTransactions(data.data);
            }
        } catch (err) {
            toast.error('Failed to load transactions');
        } finally {
            setLoading(false);
        }
    };

    const handleRefundSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedTxn) return;

        setIsProcessing(true);
        try {
            // Mocking logic for refund as backend might not have it yet
            // In a real app: await axios.post(`${API_BASE}/refund`, { txnId: selectedTxn.id, amount })
            await axios.post(`${API_BASE}/payments/${selectedTxn.id}/refund`, {
                amountPaise: Math.round(parseFloat(refundAmount) * 100),
                reason: refundReason
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            toast.success('Refund processed successfully', {
                style: {
                    borderRadius: '12px',
                    background: '#09090b',
                    color: '#fff',
                }
            });
            setIsRefundModalOpen(false);
            fetchTransactions();
        } catch (err) {
            toast.error('Refund failed');
        } finally {
            setIsProcessing(false);
        }
    };

    // Duplicate detection logic logic: finding transactions with same amount and same customer/email
    const findDuplicates = (txn: any) => {
        return transactions.filter(t =>
            t.id !== txn.id &&
            t.amount === txn.amount &&
            t.customer === txn.customer
        );
    };

    const filtered = transactions.filter(t =>
        !searchQuery ||
        t.id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.customer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (t.amount / 100).toString().includes(searchQuery)
    );

    return (
        <div className="w-full space-y-8 pb-20">
            <div>
                <h1 className="text-lg font-bold text-slate-900 tracking-tight">Refund Management</h1>
                <p className="text-[11px] text-slate-400 font-medium tracking-tight">Process refunds and manage duplicate payment resolutions.</p>
            </div>

            <div className="bg-white border border-slate-200/60 rounded-[2rem] shadow-sm overflow-hidden flex flex-col min-h-[500px]">
                <div className="p-4 border-b border-slate-100 flex items-center gap-4">
                    <div className="relative flex-1 max-w-xs">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Find transaction to refund..."
                            className="w-full h-10 pl-9 pr-4 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-medium outline-none focus:border-blue-500/20 transition-all"
                        />
                    </div>
                </div>

                <div className="flex-1">
                    {loading ? (
                        <div className="h-64 flex flex-col items-center justify-center gap-4">
                            <Loader2 className="animate-spin text-blue-600" size={24} />
                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Loading Transactions...</p>
                        </div>
                    ) : (
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/10">
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Transaction</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Amount</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Duplicates</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100/60 font-medium">
                                {filtered.length === 0 && (
                                    <tr><td colSpan={5} className="text-center py-16 text-slate-300 text-xs font-bold uppercase tracking-widest">No refundable transactions found</td></tr>
                                )}
                                {filtered.map((txn, idx) => {
                                    const dups = findDuplicates(txn);
                                    return (
                                        <motion.tr key={txn.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.02 }} className="group hover:bg-slate-50/40 transition-all">
                                            <td className="px-6 py-4 font-mono text-[10px] text-slate-400">#{txn.id.slice(-8).toUpperCase()}</td>
                                            <td className="px-6 py-4">
                                                <p className="text-[11px] font-bold text-slate-900">{txn.customer}</p>
                                                <p className="text-[9px] text-slate-400 mt-0.5">{txn.email || 'customer@node'}</p>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <p className="text-xs font-bold text-slate-900">₹{(txn.amount / 100).toLocaleString()}</p>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {dups.length > 0 ? (
                                                    <div className="flex items-center justify-end gap-1.5 text-amber-500 font-bold text-[9px] uppercase">
                                                        <AlertCircle size={10} />
                                                        {dups.length} Duplicate(s)
                                                    </div>
                                                ) : (
                                                    <span className="text-[9px] text-slate-300 font-bold uppercase">None</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => {
                                                        setSelectedTxn(txn);
                                                        setRefundAmount((txn.amount / 100).toString());
                                                        setIsRefundModalOpen(true);
                                                    }}
                                                    className="px-3 py-1.5 bg-slate-900 text-white text-[9px] font-bold uppercase tracking-widest rounded-lg hover:bg-blue-600 transition-all"
                                                >
                                                    Refund
                                                </button>
                                            </td>
                                        </motion.tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Refund Modal */}
            <AnimatePresence>
                {isRefundModalOpen && (
                    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setIsRefundModalOpen(false)} />
                        <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative bg-white w-full max-w-[400px] rounded-[2.5rem] p-10 shadow-2xl overflow-hidden">
                            <div className="absolute top-6 right-6">
                                <button onClick={() => setIsRefundModalOpen(false)} className="size-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all">
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="flex flex-col items-center gap-6 mb-10">
                                <div className="size-16 bg-amber-50 rounded-[1.5rem] flex items-center justify-center text-amber-500 shadow-sm border border-amber-100">
                                    <RotateCcw size={32} />
                                </div>
                                <div className="text-center space-y-1">
                                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Initiate Refund</h3>
                                    <p className="text-[10px] text-slate-400 font-medium">Refund will be processed back to original source.</p>
                                </div>
                            </div>

                            <form onSubmit={handleRefundSubmit} className="space-y-6">
                                <div className="p-5 bg-slate-50 border border-slate-100 rounded-3xl space-y-2">
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Original Transaction</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs font-bold text-slate-900">{selectedTxn?.customer}</p>
                                        <p className="text-xs font-bold text-slate-900">₹{(selectedTxn?.amount / 100).toLocaleString()}</p>
                                    </div>
                                    <p className="text-[9px] font-mono text-slate-400">ID: #{selectedTxn?.id.toUpperCase()}</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Refund Amount (₹)</label>
                                        <input
                                            required
                                            type="number"
                                            value={refundAmount}
                                            onChange={e => setRefundAmount(e.target.value)}
                                            className="w-full h-14 px-6 bg-slate-50 border border-slate-100 rounded-3xl text-xl font-bold text-slate-900 outline-none focus:bg-white focus:border-blue-500/20 transition-all font-mono"
                                        />
                                        <p className="text-[9px] text-blue-500 font-bold uppercase tracking-[0.15em] p-1 cursor-pointer" onClick={() => setRefundAmount((selectedTxn?.amount / 100).toString())}>Full Refund Available</p>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Reason for Refund</label>
                                        <select
                                            value={refundReason}
                                            onChange={e => setRefundReason(e.target.value)}
                                            className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-700 outline-none focus:bg-white transition-all"
                                        >
                                            <option value="Duplicate Payment">Duplicate Payment</option>
                                            <option value="Customer Request">Customer Request</option>
                                            <option value="Fraudulent Activity">Fraudulent Activity</option>
                                            <option value="Order Cancelled">Order Cancelled</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full h-14 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl shadow-xl shadow-slate-900/10 active:scale-95 transition-all flex items-center justify-center"
                                >
                                    {isProcessing ? <Loader2 size={16} className="animate-spin" /> : 'Confirm Refund'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
