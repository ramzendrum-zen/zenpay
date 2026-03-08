import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Loader2, Download, Search, Filter, Calendar, CheckCircle2, Clock, RotateCcw, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { API_BASE } from '../lib/config';

export const Transactions: React.FC = () => {
    const { token } = useAuth();
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState<any[]>([]);
    const [apiKeys, setApiKeys] = useState<any[]>([]);
    const [selectedKey, setSelectedKey] = useState('all');
    const [showUserMode, setShowUserMode] = useState(false);
    const [walletToken] = useState<string | null>(localStorage.getItem('zw_wallet_token'));
    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        axios.get(`${API_BASE}/dashboard/apikeys`, { headers: { Authorization: `Bearer ${token}` } })
            .then(r => setApiKeys(r.data.data || []))
            .catch(() => { });
    }, [token]);

    useEffect(() => {
        const fetchTxns = async () => {
            setLoading(true);
            try {
                if (showUserMode) {
                    const activeToken = walletToken || token;
                    const { data } = await axios.get(`${API_BASE}/consumer/ledger`, {
                        headers: { Authorization: `Bearer ${activeToken}` }
                    });
                    if (data.status === 'success') {
                        const ledgerRows = data.data.map((l: any) => ({
                            id: l.id,
                            customer: l.type === 'CREDIT' ? 'Received' : 'Sent',
                            email: `ref: ${l.referenceId}`,
                            amount: l.amountPaise,
                            status: l.type === 'CREDIT' ? 'PAID' : 'DEBIT',
                            date: l.createdAt
                        }));
                        setTransactions(ledgerRows);
                    }
                } else {
                    const { data } = await axios.get(`${API_BASE}/dashboard/transactions?apiKeyId=${selectedKey}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    if (data.status === 'success') setTransactions(data.data);
                }
            } catch (err) { } finally { setLoading(false); }
        };
        if (token) fetchTxns();
    }, [token, selectedKey, showUserMode]);

    const filtered = transactions.filter(t => {
        const matchesSearch = !searchQuery ||
            t.id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.customer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (t.amount / 100).toString().includes(searchQuery);

        const tDate = new Date(t.date);
        const matchesDate = (!startDate || tDate >= new Date(startDate)) &&
            (!endDate || tDate <= new Date(endDate));

        return matchesSearch && matchesDate;
    });

    const formatPaise = (paise: number) => {
        return (paise / 100).toLocaleString('en-IN', {
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
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                    <h1 className="text-lg font-bold text-slate-900 tracking-tight">
                        {showUserMode ? 'Personal Ledger' : 'Payment Ledger'}
                    </h1>
                    <p className="text-[11px] text-slate-400 font-medium">
                        {showUserMode ? 'Your personal UPI & card transaction history.' : 'Capture and reconcile real-time transactions.'}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {/* Mode Toggle */}
                    <div className="bg-slate-100 p-1 rounded-xl flex">
                        <button onClick={() => setShowUserMode(false)}
                            className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${!showUserMode ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}>
                            Merchant
                        </button>
                        <button onClick={() => setShowUserMode(true)}
                            className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${showUserMode ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}>
                            Personal
                        </button>
                    </div>
                    {/* API Key Dropdown */}
                    {!showUserMode && (
                        <div className="relative">
                            <select value={selectedKey} onChange={e => setSelectedKey(e.target.value)}
                                className="appearance-none bg-white border border-slate-200 px-4 pr-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest outline-none shadow-sm cursor-pointer">
                                <option value="all">All API Keys</option>
                                {apiKeys.map(k => <option key={k.id} value={k.id}>{k.name}</option>)}
                            </select>
                            <Filter size={11} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                        </div>
                    )}
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/60 rounded-lg text-[10px] font-bold text-slate-600 hover:bg-slate-50 shadow-sm transition-all">
                        <Download size={14} /> Export
                    </button>
                </div>
            </div>

            {/* List & Filtering */}
            <div className="bg-white border border-slate-200/60 rounded-[2rem] shadow-sm overflow-hidden flex flex-col min-h-[500px]">
                {/* Search & Utility Bar */}
                <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-slate-50/20">
                    <div className="relative flex-1 min-w-[200px] max-w-xs">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Search by ID, customer or amount..."
                            className="w-full h-10 pl-9 pr-4 bg-white border border-slate-200 rounded-xl text-[11px] font-medium outline-none focus:border-blue-500/20 transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-2 h-10">
                            <Calendar size={12} className="text-slate-400" />
                            <input
                                type="date"
                                value={startDate}
                                onChange={e => setStartDate(e.target.value)}
                                className="bg-transparent text-[10px] font-bold uppercase outline-none text-slate-600"
                            />
                            <span className="text-slate-300">-</span>
                            <input
                                type="date"
                                value={endDate}
                                onChange={e => setEndDate(e.target.value)}
                                className="bg-transparent text-[10px] font-bold uppercase outline-none text-slate-600"
                            />
                        </div>
                        <button
                            onClick={() => { setStartDate(''); setEndDate(''); setSearchQuery(''); }}
                            className="flex items-center gap-1.5 px-3 py-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest bg-white border border-slate-200 rounded-xl hover:text-red-500 transition-all"
                        >
                            Reset
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
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Payment ID</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Customer info</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Amount</th>
                                    <th className="px-6 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Date & Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100/60 font-medium">
                                {filtered.length === 0 && (
                                    <tr><td colSpan={5} className="text-center py-16 text-slate-300 text-xs font-bold uppercase tracking-widest">No transactions found</td></tr>
                                )}
                                {filtered.map((txn, idx) => (
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
                                            <code className="text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">#{txn.id.slice(-8).toUpperCase()}</code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-900 leading-tight">{txn.customer}</p>
                                                <p className="text-[9px] text-slate-400 font-medium mt-0.5">{txn.email || 'customer@node'}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <p className={`text-xs font-bold leading-none ${txn.status === 'DEBIT' ? 'text-red-500' : 'text-slate-900'}`}>₹{formatPaise(txn.amount)}</p>
                                            <p className="text-[9px] text-slate-400 mt-1 uppercase font-bold tracking-tighter">{txn.status === 'DEBIT' ? 'Sent' : 'INR'}</p>
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
                        <p className="font-bold text-slate-400 uppercase tracking-widest">Total records: <span className="text-slate-900">{filtered.length}</span></p>
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
