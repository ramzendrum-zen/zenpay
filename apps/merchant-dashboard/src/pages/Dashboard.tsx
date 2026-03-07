import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    ArrowDownRight,
    Zap,
    Clock,
    Filter,
} from 'lucide-react';

const STATS = [
    { label: 'Settlement Volume', value: '₹ 142.8k', change: '+12.5%', trend: 'up' },
    { label: 'Success Velocity', value: '99.92%', change: '+0.4%', trend: 'up' },
    { label: 'Active Sessions', value: '184', change: '-2', trend: 'down' },
    { label: 'Liquidity Latency', value: '142ms', change: '-12ms', trend: 'up' },
];

export const Dashboard: React.FC = () => {
    const [timeframe, setTimeframe] = useState('24h');

    return (
        <div className="w-full space-y-10 pb-20">
            {/* Top Left Header */}
            <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold text-slate-900 tracking-tight">Executive Dashboard</h1>
                <p className="text-xs text-slate-400 font-medium">Real-time oversight of payment orchestration and gateway health.</p>
                <div className="flex items-center gap-2 mt-2">
                    <div className="size-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Network Status: Optimized</span>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {STATS.map((stat, i) => (
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
                        {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
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
                        {[
                            { id: '4021', amt: '₹1,200', status: 'success', time: 'Just now' },
                            { id: '3982', amt: '₹4,500', status: 'success', time: '2m ago' },
                            { id: '3951', amt: '₹850', status: 'pending', time: '5m ago' },
                            { id: '3912', amt: '₹2,100', status: 'success', time: '12m ago' },
                        ].map((tx, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className={`size-2 rounded-full ${tx.status === 'success' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                    <div>
                                        <p className="text-xs font-bold text-slate-900">TX-{tx.id}</p>
                                        <p className="text-[9px] text-slate-400 uppercase font-medium">{tx.time}</p>
                                    </div>
                                </div>
                                <p className="text-xs font-bold text-slate-900">{tx.amt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
