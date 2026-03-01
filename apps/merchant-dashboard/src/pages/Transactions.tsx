import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import {
    Search,
    Filter,
    Download,
    MoreHorizontal,
    Loader2,
    ArrowDownLeft,
    Inbox
} from 'lucide-react';

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
            } catch (err) {
                console.error('Failed to fetch transactions:', err);
            } finally {
                setLoading(false);
            }
        };
        if (token) fetchTxns();
    }, [token]);

    const formatPaise = (paise: number) => {
        return (paise / 100).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: paise % 100 === 0 ? 0 : 2
        });
    };

    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Payment Explorer</h1>
                    <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-widest">History of all inbound commerce activities.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-[0.15em] rounded-xl shadow-sm transition-all active:scale-95 group">
                        <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                        Export Ledger
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-[0.15em] rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                        New Payment Link
                    </button>
                </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden min-h-[500px] flex flex-col relative">
                {loading && (
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center z-10">
                        <Loader2 size={32} className="text-blue-600 animate-spin" />
                    </div>
                )}

                <div className="px-8 py-6 border-b border-slate-100 flex items-center gap-6 bg-slate-50/50">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Find by ID, email or name..."
                            className="w-full h-11 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-sm font-bold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 text-slate-600 text-[10px] font-bold uppercase tracking-widest hover:bg-white rounded-xl transition-all border border-slate-200 bg-white shadow-sm">
                        <Filter size={14} />
                        Advanced Filter
                    </button>
                </div>

                <div className="flex-1 overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-10 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100">Transaction ID</th>
                                <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100">Contact / Customer</th>
                                <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 text-right">Settled Amount</th>
                                <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 text-center">Status</th>
                                <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100">Activity Date</th>
                                <th className="px-6 py-5 border-b border-slate-100"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 px-4">
                            {transactions.length > 0 ? transactions.map((txn) => (
                                <tr key={txn.id} className="hover:bg-blue-50/30 transition-all group cursor-pointer">
                                    <td className="px-10 py-6 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className={`size-8 rounded-lg flex items-center justify-center ${txn.status === 'PAID' ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-400'}`}>
                                                {txn.status === 'PAID' ? <ArrowDownLeft size={16} /> : <Inbox size={16} />}
                                            </div>
                                            <span className="font-mono text-xs font-bold text-slate-500 tracking-tight group-hover:text-blue-600 transition-colors">#{txn.id.slice(-10).toUpperCase()}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">
                                        <div>
                                            <p className="text-sm font-black text-slate-900 leading-none">{txn.customer}</p>
                                            <p className="text-[10px] font-bold text-slate-400 mt-1.5 uppercase tracking-wide">{txn.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap text-sm font-black text-slate-900 text-right font-mono">{formatPaise(txn.amount)}</td>
                                    <td className="px-6 py-6 whitespace-nowrap text-center">
                                        <span className={`inline-flex items-center px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-[0.15em] border ${txn.status === 'PAID' ? 'bg-green-50 text-green-700 border-green-100' :
                                            txn.status === 'PENDING' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                                txn.status === 'REFUNDED' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                                    'bg-red-50 text-red-700 border-red-100'
                                            }`}>
                                            {txn.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">
                                        <p className="text-[11px] font-bold text-slate-900 uppercase">{new Date(txn.date).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                                        <p className="text-[10px] font-bold text-slate-400 mt-0.5">{new Date(txn.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    </td>
                                    <td className="px-6 py-6 text-right">
                                        <button className="p-2 hover:bg-white border hover:border-slate-200 rounded-xl transition-all text-slate-300 hover:text-slate-900 shadow-sm">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            )) : !loading && (
                                <tr>
                                    <td colSpan={6} className="py-24 text-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="size-20 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-center justify-center text-slate-300">
                                                <Inbox size={40} strokeWidth={1.5} />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-lg font-bold text-slate-900">Quiet in here...</h4>
                                                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">No transaction data recorded for this account yet.</p>
                                            </div>
                                            <button className="mt-4 px-6 py-3 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">Run Sandbox Test</button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="px-10 py-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Page 1 — Data reflects live ledger state</p>
                    <div className="flex items-center gap-2">
                        <button className="px-5 py-2 border border-slate-200 bg-white rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-all shadow-sm disabled:opacity-30" disabled>Previous</button>
                        <button className="px-5 py-2 border border-slate-200 bg-white rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-all shadow-sm">Next Page</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
