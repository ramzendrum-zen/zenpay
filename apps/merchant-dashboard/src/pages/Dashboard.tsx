import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    ArrowDownRight,
    Zap,
    Clock,
    Filter,
    Loader2
} from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { API_BASE } from '../lib/config';

export const Dashboard: React.FC = () => {
    const { token } = useAuth();
    const [timeframe, setTimeframe] = useState('24h');
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState<any>(null);
    const [apiKeys, setApiKeys] = useState<any[]>([]);
    const [selectedKey, setSelectedKey] = useState('all');
    const [showUserMode, setShowUserMode] = useState(false);

    useEffect(() => {
        const fetchKeys = async () => {
            try {
                const res = await axios.get(`${API_BASE.replace('/consumer', '')}/dashboard/apikeys`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setApiKeys(res.data.data);
            } catch (err) { console.error(err); }
        };
        fetchKeys();
    }, [token]);

    useEffect(() => {
        const fetchStats = async () => {
            setLoading(true);
            try {
                const endpoint = showUserMode
                    ? `${API_BASE}/me` // Show personal wallet data
                    : `${API_BASE.replace('/consumer', '')}/dashboard/stats?apiKeyId=${selectedKey}`;

                const res = await axios.get(endpoint, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (showUserMode) {
                    // Adapt user data to dashboard format
                    const user = res.data.data;
                    setStats({
                        totalVolumePaise: user.user.balance,
                        successRate: '100',
                        refundRate: '0.00',
                        avgTicketPaise: 0,
                        recentTransactions: user.ledgerEntries?.slice(0, 5).map((l: any) => ({
                            id: l.id,
                            amount: l.amountPaise,
                            status: 'PAID',
                            date: l.createdAt
                        })) || [],
                        trends: [20, 30, 40, 50, 60, 70, 80, 70, 60, 50, 40, 30] // Mock trend for personal wallet
                    });
                } else {
                    setStats(res.data.data);
                }
            } catch (err) {
                console.error("Dashboard error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, [token, selectedKey, showUserMode]);

    const displayStats = showUserMode ? [
        { label: 'Available Balance', value: `₹ ${(stats?.totalVolumePaise / 100 || 0).toLocaleString()}`, change: '+0.0%', trend: 'up' },
        { label: 'Wallet Reputation', value: 'Excellent', change: '+100%', trend: 'up' },
        { label: 'Pending P2P', value: '0', change: '0', trend: 'down' },
        { label: 'Total Settled', value: `₹ ${(stats?.totalVolumePaise / 100 || 0).toLocaleString()}`, change: '0', trend: 'up' },
    ] : [
        { label: 'Settlement Volume', value: `₹ ${(stats?.totalVolumePaise / 100 || 0).toLocaleString()}`, change: '+12.5%', trend: 'up' },
        { label: 'Success Velocity', value: `${stats?.successRate || 0}%`, change: '+0.4%', trend: 'up' },
        { label: 'Refund Rate', value: `${stats?.refundRate || 0}%`, change: '-2', trend: 'down' },
        { label: 'Avg Ticket', value: `₹ ${(stats?.avgTicketPaise / 100 || 0).toFixed(0)}`, change: '-12ms', trend: 'up' },
    ];

    if (loading && !stats) return (
        <div className="flex items-center justify-center h-96">
            <Loader2 className="animate-spin text-blue-600" size={32} />
        </div>
    );

    return (
        <div className="w-full space-y-10 pb-20">
            {/* Top Left Header with Filtering */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                        {showUserMode ? 'Personal Liquidity' : 'Executive Dashboard'}
                    </h1>
                    <p className="text-xs text-slate-400 font-medium">
                        {showUserMode ? 'Real-time overview of your P2P settlement nodes.' : 'Real-time oversight of payment orchestration and gateway health.'}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {/* Mode Toggle */}
                    <div className="bg-slate-100 p-1 rounded-xl flex">
                        <button
                            onClick={() => setShowUserMode(false)}
                            className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${!showUserMode ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}
                        >
                            Merchant
                        </button>
                        <button
                            onClick={() => setShowUserMode(true)}
                            className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${showUserMode ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}
                        >
                            Personal
                        </button>
                    </div>

                    {/* API Key Dropdown */}
                    {!showUserMode && (
                        <div className="relative group">
                            <select
                                value={selectedKey}
                                onChange={(e) => setSelectedKey(e.target.value)}
                                className="appearance-none bg-white border border-slate-200 px-4 pr-10 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 outline-none focus:border-blue-500/20 shadow-sm transition-all cursor-pointer"
                            >
                                <option value="all">All API Nodes</option>
                                {apiKeys.map(key => (
                                    <option key={key.id} value={key.id}>{key.name || 'API Key'}</option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                <Filter size={12} />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {displayStats.map((stat, i) => (
                    <div key={i} className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm group hover:border-blue-100 transition-all">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        <div className="flex items-end justify-between mt-3">
                            <h3 className="text-xl font-bold text-slate-900 tracking-tight">{stat.value}</h3>
                            <div className={`flex items-center gap-1 text-[10px] font-bold ${stat.trend === 'up' ? 'text-emerald-600' : 'text-slate-400'}`}>
                                {stat.trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                                {stat.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Performance Chart Placeholder */}
                <div className="lg:col-span-8 bg-white border border-slate-200/60 rounded-[2rem] shadow-sm p-8 h-[400px] flex flex-col relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-8 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600"><Zap size={14} /></div>
                            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Processing Volume</h3>
                        </div>
                        <div className="flex bg-slate-100 p-1 rounded-lg">
                            {['24h', '7d', '30d'].map(t => (
                                <button key={t} onClick={() => setTimeframe(t)} className={`px-3 py-1 text-[10px] font-bold uppercase rounded-md transition-all ${timeframe === t ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}>{t}</button>
                            ))}
                        </div>
                    </div>

                    {/* Simulated Chart */}
                    <div className="flex-1 flex items-end gap-2 pb-2">
                        {(stats?.trends || [40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100]).map((h: number, i: number) => (
                            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.05, type: 'spring' }} className="flex-1 bg-slate-100 group-hover:bg-blue-500/20 rounded-t-md transition-colors relative">
                                {i === 11 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-2 text-[9px] font-bold text-blue-600">Peak</div>}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Live Stream */}
                <div className="lg:col-span-4 bg-white border border-slate-200/60 rounded-[2rem] shadow-sm flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/10">
                        <div className="flex items-center gap-2">
                            <Clock size={14} className="text-slate-400" />
                            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Real-time Stream</h3>
                        </div>
                        <Filter size={14} className="text-slate-300 cursor-pointer" />
                    </div>
                    <div className="flex-1 overflow-y-auto no-scrollbar p-2">
                        {(stats?.recentTransactions || []).map((tx: any, i: number) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className={`size-2 rounded-full ${tx.status === 'PAID' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                    <div>
                                        <p className="text-xs font-bold text-slate-900">ID: {tx.id.slice(-6).toUpperCase()}</p>
                                        <p className="text-[9px] text-slate-400 uppercase font-medium">{new Date(tx.date).toLocaleTimeString()}</p>
                                    </div>
                                </div>
                                <p className="text-xs font-bold text-slate-900">₹{(tx.amount / 100).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
