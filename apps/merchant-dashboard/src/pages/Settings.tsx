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
    Check,
    Lock,
    Camera,
    Save
} from 'lucide-react';
import toast from 'react-hot-toast';

export const Settings: React.FC = () => {
    const { merchant } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');
    const [isUpdating, setIsUpdating] = useState(false);

    const MENU_ITEMS = [
        { id: 'profile', icon: <User size={14} />, label: 'Profile' },
        { id: 'business', icon: <Building2 size={14} />, label: 'Business Details' },
        { id: 'security', icon: <Shield size={14} />, label: 'Security' },
        { id: 'notifications', icon: <Bell size={14} />, label: 'Notifications' },
        { id: 'billing', icon: <CreditCard size={14} />, label: 'Plan & Billing' },
    ];

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsUpdating(true);
        setTimeout(() => {
            setIsUpdating(false);
            toast.success('Settings updated successfully', {
                style: { borderRadius: '12px', background: '#09090b', color: '#fff' }
            });
        }, 1000);
    };

    return (
        <div className="w-full space-y-8 pb-20 font-sans">
            <div className="flex flex-col gap-0.5">
                <h1 className="text-lg font-bold text-slate-900 tracking-tight">Account Settings</h1>
                <p className="text-[11px] text-slate-400 font-medium tracking-tight">Manage your account information and security preferences.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
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
                                    <div className="flex items-center gap-8">
                                        <div className="relative group">
                                            <div className="size-20 bg-slate-100 rounded-[2rem] border-2 border-white shadow-sm flex items-center justify-center text-blue-600 font-bold text-2xl overflow-hidden">
                                                {merchant?.name?.charAt(0)}
                                            </div>
                                            <button className="absolute -bottom-1 -right-1 size-8 bg-blue-600 text-white rounded-xl border-4 border-white flex items-center justify-center hover:bg-blue-700 transition-all opacity-0 group-hover:opacity-100 shadow-xl">
                                                <Camera size={12} />
                                            </button>
                                        </div>
                                        <div className="space-y-0.5">
                                            <h2 className="text-base font-bold text-slate-900 tracking-tight">{merchant?.name}</h2>
                                            <p className="text-[11px] text-slate-400 font-medium tracking-tight">{merchant?.email}</p>
                                            <div className="flex gap-2 mt-3">
                                                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase rounded border border-emerald-100">Verified</span>
                                                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[8px] font-black uppercase rounded border border-blue-100">Merchant</span>
                                            </div>
                                        </div>
                                    </div>

                                    <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-6 bg-white border border-slate-200/60 p-10 rounded-[2.5rem] shadow-sm">
                                        <div className="col-span-2 space-y-2">
                                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                            <input type="text" defaultValue={merchant?.name} className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold text-slate-900 focus:bg-white focus:border-blue-500/20 transition-all outline-none" />
                                        </div>
                                        <div className="col-span-2 space-y-2">
                                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                            <div className="relative">
                                                <input disabled type="email" defaultValue={merchant?.email} className="w-full h-12 px-5 bg-slate-50/50 border border-slate-100 rounded-2xl text-xs font-medium text-slate-400 cursor-not-allowed outline-none" />
                                                <Lock size={12} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200" />
                                            </div>
                                        </div>
                                        <div className="col-span-2 pt-4">
                                            <button type="submit" disabled={isUpdating} className="h-12 px-10 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95 flex items-center gap-2">
                                                {isUpdating ? 'Saving...' : <><Save size={14} /> Update Profile</>}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {activeTab === 'business' && (
                                <div className="space-y-8">
                                    <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-6 bg-white border border-slate-200/60 p-10 rounded-[2.5rem] shadow-sm">
                                        <div className="col-span-2 space-y-2">
                                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Business Name</label>
                                            <input type="text" defaultValue={merchant?.name} className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold text-slate-900 focus:bg-white focus:border-blue-500/20 transition-all outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Category</label>
                                            <select className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold text-slate-900 outline-none">
                                                <option>E-commerce</option>
                                                <option>SaaS</option>
                                                <option>Gaming</option>
                                                <option>Education</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Country</label>
                                            <input type="text" defaultValue="India" disabled className="w-full h-12 px-5 bg-slate-50/50 border border-slate-100 rounded-2xl text-xs font-medium text-slate-400 outline-none" />
                                        </div>
                                        <div className="col-span-2 pt-4">
                                            <button type="submit" disabled={isUpdating} className="h-12 px-10 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-all shadow-xl active:scale-95 flex items-center gap-2">
                                                {isUpdating ? 'Saving...' : 'Save Business Info'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {activeTab === 'security' && (
                                <div className="space-y-8">
                                    <div className="grid gap-4">
                                        {[
                                            { label: 'Two-Factor Auth', desc: 'Secure your account with 2FA.', icon: <Users size={16} />, active: true },
                                            { label: 'Security PIN', desc: 'Required for transaction clearance.', icon: <Lock size={16} />, active: true },
                                        ].map((item, i) => (
                                            <div key={i} className="p-8 bg-white border border-slate-200/60 rounded-[2.5rem] flex items-center justify-between group hover:border-blue-100 transition-all">
                                                <div className="flex items-center gap-5">
                                                    <div className="size-12 bg-blue-50 text-blue-600 rounded-[1.25rem] flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">{item.icon}</div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <h4 className="text-xs font-bold text-slate-900 tracking-tight">{item.label}</h4>
                                                            <span className="text-[8px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded border border-emerald-100">Active</span>
                                                        </div>
                                                        <p className="text-[11px] text-slate-400 font-medium mt-0.5 tracking-tight">{item.desc}</p>
                                                    </div>
                                                </div>
                                                <button className="text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors">Adjust</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'billing' && (
                                <div className="space-y-10">
                                    <div className="bg-white border-2 border-blue-600 p-12 rounded-[3.5rem] shadow-xl shadow-blue-500/5 relative overflow-hidden group">
                                        <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg">Current Plan</div>
                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Service Tier</p>
                                        <h4 className="text-4xl font-black text-slate-900 tracking-tight">Enterprise <span className="text-sm font-medium text-slate-400 tracking-normal">/ Free Tier</span></h4>
                                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                            {['Unlimited Volume', 'Priority Support', 'Live Analytics', 'Instant Settlement'].map(f => (
                                                <div key={f} className="flex items-center gap-3 text-[11px] font-bold text-slate-600">
                                                    <div className="size-5 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100"><Check size={12} /></div>
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
