import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import {
    TrendingUp,
    TrendingDown,
    Terminal,
    ArrowRight,
    Filter,
    ArrowUpRight,
    MoreHorizontal,
    Loader2,
    History
} from 'lucide-react';

const MetricCard = ({ title, value, change, trend, icon: Icon, loading }: any) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
        {loading && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center z-10 transition-all opacity-100">
                <Loader2 size={24} className="text-blue-600 animate-spin" />
            </div>
        )}
        <div className="flex justify-between items-start mb-4">
            <div className="size-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500 border border-slate-100">
                <Icon size={20} />
            </div>
            <div className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${trend === 'up' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
                }`}>
                {trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {change}
            </div>
        </div>
        <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{value}</h3>
        </div>
    </div>
);

export const Dashboard: React.FC = () => {
    const { token, merchant } = useAuth();
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState<any>({
        totalVolumePaise: 0,
        successRate: '0.0',
        refundRate: '0.00',
        avgTicketPaise: 0,
        recentTransactions: [],
        trends: []
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await axios.get('http://localhost:4000/v1/dashboard/stats', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (data.status === 'success') {
                    setStats(data.data);
                }
            } catch (err) {
                console.error('Failed to fetch stats:', err);
            } finally {
                setLoading(false);
            }
        };

        if (token) fetchStats();
    }, [token]);

    const formatPaise = (paise: number) => {
        return (paise / 100).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: paise % 100 === 0 ? 0 : 2
        });
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Overview</h1>
                    <p className="text-sm text-slate-500 mt-1">Real-time performance analytics for your platform.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-bold rounded-xl shadow-sm transition-all active:scale-95">
                        <Filter size={16} strokeWidth={2.5} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                        Export Data
                    </button>
                </div>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                    title="Total Volume"
                    value={formatPaise(stats.totalVolumePaise)}
                    change="+0.0%"
                    trend="up"
                    icon={TrendingUp}
                    loading={loading}
                />
                <MetricCard
                    title="Success Rate"
                    value={`${stats.successRate}%`}
                    change="+0.0%"
                    trend="up"
                    icon={TrendingUp}
                    loading={loading}
                />
                <MetricCard
                    title="Refund Rate"
                    value={`${stats.refundRate}%`}
                    change="+0.00%"
                    trend="down"
                    icon={TrendingDown}
                    loading={loading}
                />
                <MetricCard
                    title="Avg. Ticket"
                    value={formatPaise(stats.avgTicketPaise)}
                    change="+0.0%"
                    trend="up"
                    icon={TrendingUp}
                    loading={loading}
                />
            </div>

            {/* Charts & Quick Actions Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-8 border border-slate-200 shadow-sm rounded-2xl relative overflow-hidden">
                    {loading && (
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center z-10 transition-all opacity-100">
                            <Loader2 size={32} className="text-blue-600 animate-spin" />
                        </div>
                    )}
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Transaction Trends</h3>
                            <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Volume Growth Over 30 Days</p>
                        </div>
                        <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                            <button className="px-4 py-1.5 text-xs font-bold bg-white text-blue-600 rounded-lg shadow-sm border border-slate-100">30D</button>
                            <button className="px-4 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors">7D</button>
                        </div>
                    </div>
                    <div className="h-64 w-full flex items-end gap-2 pb-2">
                        {stats.trends.length > 0 ? stats.trends.map((h: number, i: number) => (
                            <div key={i} className="flex-1 bg-blue-600/10 hover:bg-blue-600/30 transition-all rounded-t-md relative group cursor-pointer" style={{ height: `${h}%` }}>
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-2xl z-20">
                                    ₹ {h},200
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 bg-slate-900 rotate-45" />
                                </div>
                            </div>
                        )) : [40, 60, 45, 70, 85, 55, 65, 50, 75, 90, 60, 50].map((h, i) => (
                            <div key={i} className="flex-1 bg-slate-100 rounded-t-md transition-all animate-pulse" style={{ height: `${h}%` }} />
                        ))}
                    </div>
                </div>

                <div className="bg-[#0f172a] text-white p-8 flex flex-col justify-between rounded-2xl shadow-xl shadow-blue-900/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-blue-600/20" />
                    <div>
                        <div className="bg-blue-600 size-12 flex items-center justify-center mb-8 rounded-xl text-white shadow-lg shadow-blue-500/30 border border-blue-400/20">
                            <Terminal size={22} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 tracking-tight">Rapid Integration</h3>
                        <p className="text-slate-400 text-sm mb-10 leading-relaxed">Power your commerce platform in minutes with our high-performance APIs and SDKs.</p>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-5 border border-white/10 hover:border-white/20 transition-all group cursor-pointer rounded-2xl">
                                <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest mb-2">Live API Key</p>
                                <code className="text-xs font-mono text-blue-400 block truncate group-hover:text-blue-300 transition-colors">
                                    {merchant?.publicKey || 'zw_live_••••••••'}
                                </code>
                            </div>
                        </div>
                    </div>
                    <button className="mt-10 flex items-center justify-center gap-3 group bg-white text-slate-900 h-14 text-sm font-bold hover:bg-slate-50 transition-all rounded-xl active:scale-95 shadow-lg shadow-white/5">
                        Developer Hub
                        <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Recent Transactions Table */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden relative">
                {loading && (
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center z-10 transition-all opacity-100">
                        <Loader2 size={32} className="text-blue-600 animate-spin" />
                    </div>
                )}
                <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight">Payment Activity</h3>
                        <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Latest 5 Transactions</p>
                    </div>
                    <button className="text-blue-600 text-xs font-bold uppercase tracking-widest hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-700 pb-0.5">Explore All Activity</button>
                </div>
                <div className="overflow-x-auto px-2 pb-2">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">ID / Date</th>
                                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Customer</th>
                                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest text-right">Amount</th>
                                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest text-center">Status</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {stats.recentTransactions.length > 0 ? stats.recentTransactions.map((txn: any) => (
                                <tr key={txn.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-5 whitespace-nowrap">
                                        <p className="font-mono text-[10px] text-slate-500">#{txn.id.slice(-8).toUpperCase()}</p>
                                        <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">{new Date(txn.date).toLocaleDateString()} {new Date(txn.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    </td>
                                    <td className="px-6 py-5 whitespace-nowrap text-sm font-semibold text-slate-900">{txn.customer}</td>
                                    <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-slate-900 text-right">{formatPaise(txn.amount)}</td>
                                    <td className="px-6 py-5 whitespace-nowrap text-center">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${txn.status === 'PAID' ? 'bg-green-50 text-green-700 border border-green-100' :
                                            txn.status === 'PENDING' ? 'bg-yellow-50 text-yellow-700 border border-yellow-100' : 'bg-red-50 text-red-700 border border-red-100'
                                            }`}>
                                            {txn.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right w-10">
                                        <button className="text-slate-300 hover:text-slate-600 transition-colors p-1 hover:bg-slate-100 rounded-lg">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={5} className="px-8 py-20 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="bg-slate-50 size-16 rounded-2xl flex items-center justify-center text-slate-300 border border-slate-100">
                                                <History size={24} />
                                            </div>
                                            <p className="text-sm font-bold text-slate-400">No payment activity recorded yet.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
