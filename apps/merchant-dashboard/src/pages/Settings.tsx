import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Building2,
    Users,
    Bell,
    Shield,
    CreditCard,
    ChevronRight,
    Monitor,
    Terminal,
    LogOut,
    Check,
    Lock
} from 'lucide-react';
import toast from 'react-hot-toast';

export const Settings: React.FC = () => {
    const { merchant } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');

    const MENU_ITEMS = [
        { id: 'profile', icon: <User size={14} />, label: 'Identity' },
        { id: 'business', icon: <Building2 size={14} />, label: 'Entity' },
        { id: 'team', icon: <Users size={14} />, label: 'Access Control' },
        { id: 'alerts', icon: <Bell size={14} />, label: 'Triggers' },
        { id: 'security', icon: <Shield size={14} />, label: 'Cryptography' },
        { id: 'billing', icon: <CreditCard size={14} />, label: 'Settlement Plan' },
    ];

    return (
        <div className="w-full space-y-8 pb-20 font-sans">
            {/* Top Left Header - Consistent with Transactions/Wallet */}
            <div className="flex flex-col gap-0.5">
                <h1 className="text-lg font-bold text-slate-900 tracking-tight">System Preferences</h1>
                <p className="text-[11px] text-slate-400 font-medium tracking-tight">Configure account nodes and identity protocols.</p>
                <div className="flex items-center gap-1.5 mt-2">
                    <div className="size-1 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Global Config: Synchronized</span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Slim Side Nav - Using same sizing as Sidebar for consistency */}
                <aside className="w-full lg:w-48 shrink-0">
                    <nav className="space-y-1">
                        {MENU_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-[10px] font-bold uppercase tracking-widest ${activeTab === item.id
                                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/10'
                                    : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                <span className="shrink-0">{item.icon}</span>
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Content Area */}
                <main className="flex-1 max-w-3xl space-y-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}
                        >
                            {activeTab === 'profile' && (
                                <div className="space-y-10">
                                    <div className="flex items-center gap-6">
                                        <div className="size-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl shadow-sm">
                                            {merchant?.name?.charAt(0)}
                                        </div>
                                        <div className="space-y-0.5">
                                            <h2 className="text-base font-bold text-slate-900 tracking-tight">{merchant?.name}</h2>
                                            <p className="text-[11px] text-slate-400 font-medium tracking-tight">{merchant?.email}</p>
                                            <button className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mt-3 hover:text-blue-700">Rotate Alias</button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 bg-white border border-slate-200/60 p-8 rounded-[2rem] shadow-sm">
                                        <div className="col-span-2 space-y-1.5">
                                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Legal Designation</label>
                                            <input type="text" defaultValue={merchant?.name} className="w-full h-11 px-4 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-900 focus:border-blue-500/20 outline-none placeholder:text-slate-300" />
                                        </div>
                                        <div className="col-span-2 space-y-1.5">
                                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Communication Endpoint</label>
                                            <div className="relative">
                                                <input disabled type="email" defaultValue={merchant?.email} className="w-full h-11 px-4 bg-slate-50/50 border border-slate-100 rounded-xl text-xs font-medium text-slate-400 cursor-not-allowed outline-none" />
                                                <Lock size={12} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-200" />
                                            </div>
                                        </div>
                                        <div className="col-span-2 pt-2">
                                            <button className="h-11 px-8 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all shadow-sm active:scale-95">Update Identity</button>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                            <Shield size={10} className="text-blue-500" />
                                            Access Stream
                                        </h3>
                                        <div className="space-y-2">
                                            {[
                                                { device: 'Safari on macOS', ip: '192.168.1.1', time: 'Just now', icon: <Monitor size={14} /> },
                                                { device: 'Zen Terminal CLI', ip: '10.0.0.12', time: '2h ago', icon: <Terminal size={14} /> }
                                            ].map((log, i) => (
                                                <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-blue-100 transition-all group cursor-pointer">
                                                    <div className="flex items-center gap-4">
                                                        <div className="size-9 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors">{log.icon}</div>
                                                        <div>
                                                            <p className="text-xs font-bold text-slate-900 tracking-tight">{log.device}</p>
                                                            <p className="text-[10px] text-slate-400 font-medium tracking-tight">{log.ip} • <span className="text-emerald-500 font-bold">{log.time}</span></p>
                                                        </div>
                                                    </div>
                                                    <ChevronRight size={14} className="text-slate-200 group-hover:text-blue-500 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'security' && (
                                <div className="space-y-8">
                                    <div className="grid gap-4">
                                        {[
                                            { label: 'Two-Step Auth', desc: 'Secure sessions via HW keys.', icon: <Monitor size={16} />, active: true },
                                            { label: 'Master Password', desc: 'Encryption key for sensitive ops.', icon: <Shield size={16} />, active: true },
                                        ].map((item, i) => (
                                            <div key={i} className="p-6 bg-white border border-slate-200/60 rounded-[2rem] flex items-center justify-between group hover:border-blue-100 transition-all">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">{item.icon}</div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <h4 className="text-xs font-bold text-slate-900 tracking-tight">{item.label}</h4>
                                                            <span className="text-[8px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded border border-emerald-100">Verified</span>
                                                        </div>
                                                        <p className="text-[11px] text-slate-400 font-medium mt-0.5 tracking-tight">{item.desc}</p>
                                                    </div>
                                                </div>
                                                <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">Configure</button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden group border border-slate-800">
                                        <div className="absolute top-0 right-0 p-8 opacity-5 text-blue-500 -rotate-12 transition-transform group-hover:rotate-0"><LogOut size={120} /></div>
                                        <div className="relative z-10">
                                            <h3 className="text-base font-bold tracking-tight">Revocation Sweep</h3>
                                            <p className="text-slate-400 text-[11px] mt-1.5 max-w-[280px] mb-8 leading-relaxed font-medium">Immediately invalidate all Bearer tokens and terminate all active organizational sessions.</p>
                                            <button onClick={() => toast.error('Emergency Protocol Armed')} className="h-11 px-8 bg-red-600 text-white font-bold text-[10px] uppercase tracking-widest rounded-xl shadow-lg shadow-red-600/20 active:scale-95 transition-all">Execute Revoke</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'billing' && (
                                <div className="space-y-10">
                                    <div className="bg-white border-2 border-blue-600 p-10 rounded-[2.5rem] shadow-xl shadow-blue-500/5 relative overflow-hidden group">
                                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-widest shadow-lg">Active Node</div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Service Tier</p>
                                        <h4 className="text-3xl font-bold text-slate-900 tracking-tight">Enterprise <span className="text-sm font-medium text-slate-400 tracking-normal">/ $0.00 mo</span></h4>
                                        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4">
                                            {['Unlimited Volume', 'Dedicated Success Node', 'Live API Streaming', 'Direct Settlement'].map(f => (
                                                <div key={f} className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                                                    <Check size={14} className="text-emerald-500" />
                                                    {f}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};
