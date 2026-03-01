import React, { useState } from 'react';
import {
    User,
    Bell,
    Shield,
    CreditCard,
    Globe,
    Save,
    Lock,
    ChevronRight,
    Smartphone,
    Key,
    UserPlus,
    Activity,
    Building2,
    LayoutGrid,
    AlertCircle,
    Eye
} from 'lucide-react';

import { useAuth } from '../context/AuthContext';

export const Settings: React.FC = () => {
    const { merchant } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');

    const [firstName, lastName] = (merchant?.name || 'User').split(' ');

    const menuItems = [
        { id: 'profile', icon: User, label: 'Profile' },
        { id: 'business', icon: Globe, label: 'Business' },
        { id: 'team', icon: UserPlus, label: 'Team' },
        { id: 'notifications', icon: Bell, label: 'Alerts' },
        { id: 'security', icon: Shield, label: 'Security' },
        { id: 'billing', icon: CreditCard, label: 'Billing' },
    ];

    return (
        <div className="w-full flex flex-col gap-6 animate-in fade-in duration-500">
            {/* STICKY HEADER & DOCK SECTION */}
            <div className="sticky top-0 z-50 bg-slate-50/95 backdrop-blur-md pt-2 pb-6 -mx-6 px-6 border-b border-slate-200/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 tracking-tight">Settings</h1>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-slate-500 font-medium tracking-wide">Merchant ID:</span>
                            <code className="text-[10px] px-1.5 py-0.5 bg-slate-200/50 rounded text-slate-700 font-mono font-bold">{merchant?.id?.toUpperCase() || 'MID_NEW'}</code>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Floating Top Dock Navigation */}
                        <nav className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all relative ${activeTab === item.id
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                                        }`}
                                >
                                    <item.icon size={14} strokeWidth={3} />
                                    <span className="hidden lg:inline">{item.label}</span>
                                </button>
                            ))}
                        </nav>

                        <div className="flex gap-2 ml-2 pl-4 border-l border-slate-200">
                            <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">Discard</button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                                <Save size={14} />
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT AREA */}
            <div className="w-full max-w-6xl mx-auto py-4">
                {/* 1. Account Profile Tab */}
                {activeTab === 'profile' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="lg:col-span-2 space-y-8">
                            <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
                                <div className="flex items-center gap-6 mb-10">
                                    <div className="relative group">
                                        <div className="size-28 bg-slate-50 rounded-3xl border border-slate-200 flex items-center justify-center text-slate-300 shadow-inner group-hover:border-blue-400 transition-colors">
                                            <User size={56} />
                                        </div>
                                        <button className="absolute -bottom-2 -right-2 size-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-lg hover:text-blue-600 transition-all">
                                            <Smartphone size={16} />
                                        </button>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900">{merchant?.name || 'User'}</h2>
                                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Verified Merchant</p>
                                        <div className="flex gap-4 mt-4">
                                            <button className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">Change Profile Photo</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">First Name</label>
                                        <input type="text" defaultValue={firstName} className="w-full h-12 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Last Name</label>
                                        <input type="text" defaultValue={lastName} className="w-full h-12 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Business Email</label>
                                        <input type="email" defaultValue={merchant?.email} className="w-full h-12 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all" />
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] mb-8">Access Activity</h3>
                                <div className="space-y-1">
                                    {[
                                        { title: 'New API Key generated', date: 'Today, 2:15 PM', ip: '192.168.1.1' },
                                        { title: 'Password changed successfully', date: 'Yesterday, 11:30 AM', ip: '10.0.0.42' },
                                        { title: 'New login from Chrome / macOS', date: 'Feb 26, 2024', ip: '172.16.0.5' },
                                    ].map((log, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl mb-3 hover:bg-white border border-transparent hover:border-slate-200 transition-all group">
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{log.title}</p>
                                                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{log.date} • IP: {log.ip}</p>
                                            </div>
                                            <div className="size-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-300">
                                                <ChevronRight size={14} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="space-y-8">
                            <section className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-500/30">
                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                    <LayoutGrid size={64} />
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-blue-100">Plan Overview</p>
                                <h3 className="text-2xl font-bold mb-2 leading-tight">Pro Master Account</h3>
                                <p className="text-xs text-blue-100/70 mb-8 leading-relaxed">Your account is active. Payouts are currently enabled and processed within 24 hours.</p>
                                <button className="w-full py-3 bg-white text-blue-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-2xl shadow-xl hover:bg-blue-50 transition-all active:scale-95">Upgrade Plan</button>
                            </section>

                            <section className="bg-white border border-slate-200 rounded-3xl p-8 relative">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-slate-100 rounded-xl text-slate-900">
                                        <Activity size={18} strokeWidth={3} />
                                    </div>
                                    <h4 className="text-sm font-bold uppercase tracking-[0.2em]">Platform Status</h4>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-bold text-slate-500">API Latency</p>
                                        <p className="text-xs font-bold text-green-600">42ms</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-bold text-slate-500">System Uptime</p>
                                        <p className="text-xs font-bold text-green-600">99.98%</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )}

                {/* 2. Business Details Tab */}
                {activeTab === 'business' && (
                    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                                    <Building2 size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Business Profile</h3>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.1em] mt-1">Legally Registered Entities</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Registered Name</label>
                                    <input type="text" defaultValue={merchant?.businessName || 'Business Name not set'} className="w-full h-12 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-mono" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Business Type</label>
                                    <select className="w-full h-12 px-5 bg-slate-100 border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none appearance-none cursor-pointer">
                                        <option>Private Limited</option>
                                        <option>Partnership</option>
                                        <option>Individual</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">GSTIN Number</label>
                                    <input type="text" defaultValue="27AAACZ1234F1Z5" className="w-full h-12 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-mono" />
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* 3. Team Members Tab */}
                {activeTab === 'team' && (
                    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Infrastructure Team</h3>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.1em] mt-1">2/10 Members Active</p>
                                </div>
                                <button className="px-5 py-2.5 bg-slate-900 shadow-xl shadow-slate-900/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all">Invite Member</button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { name: 'Johnathan Doe', role: 'Owner', email: 'john@zenwallet.cloud', active: true },
                                    { name: 'Sarah Connor', role: 'Developer', email: 'sarah@zenwallet.cloud', active: true },
                                ].map((member, i) => (
                                    <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-between hover:border-blue-200 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center font-bold text-blue-600 shadow-sm">
                                                {member.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900">{member.name}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{member.role}</p>
                                            </div>
                                        </div>
                                        <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                                            <AlertCircle size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {/* 4. Alerts/Notifications Tab */}
                {activeTab === 'notifications' && (
                    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10">
                            <h3 className="text-xl font-bold text-slate-900 mb-10">Global Alert Settings</h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'Settlement Completion Notifications', desc: 'Receive emails for every successful payout settlement.', enabled: true },
                                    { label: 'Fraudulent Activity Alerts', desc: 'Real-time alert for suspicious payment behaviors.', enabled: true },
                                    { label: 'Monthly Operational Reports', desc: 'Consolidated PDF reports sent to registered business email.', enabled: false },
                                    { label: 'Developer Webhook Failures', desc: 'Urgent alerts when your endpoints return non-200 codes.', enabled: true },
                                ].map((alert, i) => (
                                    <div key={i} className="flex items-start justify-between p-2">
                                        <div className="max-w-md">
                                            <h4 className="text-sm font-bold text-slate-900">{alert.label}</h4>
                                            <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{alert.desc}</p>
                                        </div>
                                        <button className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${alert.enabled ? 'bg-blue-600' : 'bg-slate-200'}`}>
                                            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${alert.enabled ? 'translate-x-5' : 'translate-x-0'}`}></span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {/* 5. Security & Auth Tab */}
                {activeTab === 'security' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start animate-in fade-in slide-in-from-top-4 duration-500">
                        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                                    <Shield size={20} strokeWidth={3} />
                                </div>
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em]">Authentication Hub</h3>
                            </div>

                            <div className="space-y-4">
                                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group cursor-pointer hover:border-blue-200 transition-all">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="size-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                                            <Smartphone size={18} />
                                        </div>
                                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold uppercase rounded-lg">Enabled</span>
                                    </div>
                                    <h4 className="text-sm font-bold mb-1">2-Step Verification</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Primary Device: iPhone 15 Pro</p>
                                </div>

                                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group cursor-pointer hover:border-blue-200 transition-all">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="size-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                                            <Lock size={18} />
                                        </div>
                                    </div>
                                    <h4 className="text-sm font-bold mb-1">Account Password</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Last Rotated: 14 Days Ago</p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl shadow-slate-200">
                            <div className="flex items-center gap-3 mb-8">
                                <Key className="text-blue-500" size={24} />
                                <h3 className="text-lg font-bold tracking-tight">Access Control</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="pb-6 border-b border-white/10">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Live Session Token</p>
                                    <code className="text-[10px] font-mono p-2 bg-white/5 block rounded-lg text-blue-400">auth_v2_f839...k92</code>
                                </div>
                                <button className="w-full py-4 bg-white text-slate-900 text-[10px] font-bold uppercase tracking-[0.3em] rounded-2xl hover:bg-red-50 transition-all">Revoke All Sessions</button>
                            </div>
                        </section>
                    </div>
                )}

                {/* 6. Billing & Plans Tab */}
                {activeTab === 'billing' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Current Rate</p>
                                <h4 className="text-3xl font-bold text-slate-900">0.0%</h4>
                                <p className="text-[10px] font-bold text-slate-500 mt-2 uppercase tracking-widest">per transaction</p>
                            </div>
                            <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Next Payout</p>
                                <h4 className="text-2xl font-bold text-slate-900">N/A</h4>
                                <p className="text-[10px] font-bold text-slate-500 mt-2 uppercase tracking-widest">₹ 0</p>
                            </div>
                            <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Invoices</p>
                                <h4 className="text-2xl font-bold text-slate-900">None</h4>
                                <p className="text-[10px] font-bold text-green-600 mt-1 uppercase tracking-widest">Account Status: Good</p>
                            </div>
                        </div>

                        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10 overflow-hidden">
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] mb-10">Historical Ledger</h3>
                            <div className="py-20 text-center">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="size-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 border border-slate-100">
                                        <Activity size={32} strokeWidth={1.5} />
                                    </div>
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">No payout history available yet.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
};
