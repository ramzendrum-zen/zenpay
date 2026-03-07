import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Loader2, Download, Plus, Search, Filter, Calendar, CheckCircle2, Clock, RotateCcw, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Transactions: React.FC = () => {
    const { token } = useAuth();
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState<any[]>([]);

    useEffect(() => {
        const fetchTxns = async () => {
            try {
                const { data } = await axios.get('http://localhost:4000/v1/dashboard/transactions', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (data.status === 'success') {
                    setTransactions(data.data);
                }
            } catch (err) { } finally { setLoading(false); }
        };
        if (token) fetchTxns();
    }, [token]);

    const formatPaise = (paise: number) => {
        return (paise / 100).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'PAID': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
            case 'PENDING': return 'bg-amber-50 text-amber-600 border-amber-100';
            case 'REFUNDED': return 'bg-blue-50 text-blue-600 border-blue-100';
            default: return 'bg-red-50 text-red-600 border-red-100';
        }
    };

    return (
        <div className="w-full space-y-8 pb-20">
            {/* Top Left Header */}
            <div className="flex flex-col gap-0.5">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-lg font-bold text-slate-900 tracking-tight">Payment Ledger</h1>
                        <p className="text-[11px] text-slate-400 font-medium">Capture and reconcile real-time transactions.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/60 rounded-lg text-[10px] font-bold text-slate-600 hover:bg-slate-50 shadow-sm transition-all">
                            <Download size={14} />
                            Export
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[10px] font-bold shadow-sm hover:bg-blue-700 transition-all">
                            <Plus size={14} />
                            New Node
                        </button>
                    </div>
                </div>
            </div>

            {/* List & Filtering */}
            <div className="bg-white border border-slate-200/60 rounded-[2rem] shadow-sm overflow-hidden flex flex-col min-h-[500px]">
                {/* Search & Utility Bar */}
                <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-xs">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" />
                        <input
                            type="text"
                            placeholder="Filter by ID or Email..."
                            className="w-full h-10 pl-9 pr-4 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-medium outline-none focus:border-blue-500/20 transition-all"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest bg-white border border-slate-100 rounded-xl hover:text-slate-900">
                            <Filter size={12} />
                            Sort
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest bg-white border border-slate-100 rounded-xl hover:text-slate-900">
                            <Calendar size={12} />
                            History
                        </button>
                    </div>
                </div>

                <div className="flex-1">
                    {loading ? (
                        <div className="h-64 flex flex-col items-center justify-center gap-4">
                            <Loader2 className="animate-spin text-blue-600" size={24} />
                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Hydrating Ledger...</p>
                        </div>
                    ) : (
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/10">
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Authority</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Correlation ID</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Metadata</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Volume</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100/60 font-medium">
                                {transactions.map((txn, idx) => (
                                    <motion.tr key={txn.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.02 }} className="group hover:bg-slate-50/40 transition-all cursor-pointer">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`p-1 rounded border ${getStatusStyle(txn.status)}`}>
                                                    {txn.status === 'PAID' ? <CheckCircle2 size={12} /> : txn.status === 'PENDING' ? <Clock size={12} /> : txn.status === 'REFUNDED' ? <RotateCcw size={12} /> : <XCircle size={12} />}
                                                </div>
                                                <span className={`text-[10px] font-bold uppercase tracking-tight ${txn.status === 'PAID' ? 'text-emerald-700' : 'text-slate-500'}`}>{txn.status === 'PAID' ? 'Succeeded' : txn.status.toLowerCase()}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="text-[10px] font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">#{txn.id.slice(-8).toUpperCase()}</code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-900 leading-tight">{txn.customer}</p>
                                                <p className="text-[9px] text-slate-400 font-medium mt-0.5">{txn.email || 'customer@node'}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <p className="text-xs font-bold text-slate-900 leading-none">${formatPaise(txn.amount)}</p>
                                            <p className="text-[9px] text-slate-400 mt-1 uppercase font-bold tracking-tighter">Liquid USD</p>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <p className="text-[11px] font-bold text-slate-900">{new Date(txn.date).toLocaleDateString([], { month: 'short', day: '2-digit' })}</p>
                                            <p className="text-[9px] text-slate-400 mt-0.5 font-medium">{new Date(txn.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="p-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-6">
                        <p className="font-bold text-slate-400 uppercase tracking-widest">Node count: <span className="text-slate-900">{transactions.length}</span></p>
                        <div className="flex items-center gap-2">
                            <p className="text-slate-400 uppercase tracking-widest font-bold">Rows:</p>
                            <select className="bg-transparent font-bold text-slate-900 outline-none cursor-pointer">
                                <option>10</option>
                                <option>25</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-slate-300 font-bold uppercase tracking-widest transition-all hover:text-slate-900" disabled>Previous</button>
                        <button className="px-3 py-1.5 text-slate-900 font-bold uppercase tracking-widest transition-all">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
