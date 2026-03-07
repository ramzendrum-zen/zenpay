import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import {
    Wallet,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Rocket,
    ShieldCheck,
    Zap,
    ArrowRight,
    Loader2,
    ShieldAlert,
    Terminal,
    User,
    Building2
} from 'lucide-react';
import { API_BASE } from '../lib/config';

const API = `${API_BASE}/auth`;
type AuthView = 'login' | 'signup' | 'verify-otp' | 'forgot-password' | 'reset-password';

interface AuthPageProps {
    onLoginSuccess: (token: string, merchant: any) => void;
}

const Field = ({ label, type = 'text', value, onChange, placeholder, icon: Icon }: any) => {
    const [show, setShow] = useState(false);
    const inputType = type === 'password' ? (show ? 'text' : 'password') : type;
    return (
        <div className="space-y-1.5 w-full">
            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
            <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-blue-600">
                    <Icon size={16} />
                </div>
                <input
                    type={inputType}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-blue-500/30 transition-all"
                />
                {type === 'password' && (
                    <button type="button" onClick={() => setShow(s => !s)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-900 transition-colors">
                        {show ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                )}
            </div>
        </div>
    );
};

const Alert = ({ msg, type }: { msg: string; type: 'error' | 'success' }) => (
    <div className={`px-4 py-3 rounded-xl text-[11px] font-bold flex items-center gap-2 mb-6 ${type === 'error' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'}`}>
        {type === 'error' ? <ShieldAlert size={14} /> : <ShieldCheck size={14} />}
        {msg}
    </div>
);

export const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess }) => {
    const [view, setView] = useState<AuthView>('login');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [form, setForm] = useState({ name: '', email: '', businessName: '', password: '', otp: '', newPassword: '' });
    const [agree, setAgree] = useState(false);

    const resetMessages = () => { setError(''); };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); resetMessages(); setLoading(true);
        try {
            const { data } = await axios.post(`${API}/login`, { email: form.email, password: form.password });
            if (data.status === 'success') {
                onLoginSuccess(data.data.token, data.data.merchant);
            }
        } catch (err: any) {
            setError(err.response?.data?.error || 'Authorization failed.');
        } finally { setLoading(false); }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault(); resetMessages();
        if (!agree) { setError('Agreement required.'); return; }
        setLoading(true);
        try {
            const { data } = await axios.post(`${API}/register`, {
                name: form.name, email: form.email, businessName: form.businessName, password: form.password
            });
            sessionStorage.setItem('zw_pending_email', form.email);
            setView('verify-otp');
            sessionStorage.setItem('zw_pending_email', form.email);
            setView('verify-otp');
            toast.success(data.message || 'OTP sent to email');
        } catch (err: any) {
            setError(err.response?.data?.error || 'Registration aborted.');
        } finally { setLoading(false); }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault(); resetMessages(); setLoading(true);
        const email = sessionStorage.getItem('zw_pending_email') || form.email;
        try {
            const { data } = await axios.post(`${API}/verify-otp`, { email, otp: form.otp });
            if (data.status === 'success') {
                toast.success('Email verified successfully');
                onLoginSuccess(data.data.token, data.data.merchant);
            }
        } catch (err: any) {
            setError(err.response?.data?.error || 'Verification failed.');
        } finally { setLoading(false); }
    };

    const handleResendOtp = async () => {
        resetMessages(); setLoading(true);
        const email = sessionStorage.getItem('zw_pending_email') || form.email;
        try {
            await axios.post(`${API}/resend-otp`, { email });
            toast.success('Fresh OTP sent to your email.');
        } catch (err: any) {
            setError('Failed to resend OTP.');
        } finally { setLoading(false); }
    };

    const handleFetchDebugOtp = async () => {
        const email = sessionStorage.getItem('zw_pending_email') || form.email;
        if (!email) { toast.error('Email not found.'); return; }
        setLoading(true);
        try {
            const { data } = await axios.get(`${API}/debug-otp?email=${email}`);
            if (data.status === 'success') {
                setForm(f => ({ ...f, otp: data.otp }));
                toast.success('Magic: OTP captured from node logs!');
            }
        } catch (err) {
            toast.error('Could not capture OTP automatically.');
        } finally { setLoading(false); }
    };

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault(); resetMessages(); setLoading(true);
        try {
            const { data } = await axios.post(`${API}/forgot-password`, { email: form.email });
            toast.success(data.message || 'Reset code sent.');
            sessionStorage.setItem('zw_pending_email', form.email);
            setView('reset-password');
        } catch (err: any) {
            setError(err.response?.data?.error || 'Recovery request failed.');
        } finally { setLoading(false); }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault(); resetMessages(); setLoading(true);
        const email = sessionStorage.getItem('zw_pending_email') || form.email;
        try {
            const { data } = await axios.post(`${API}/reset-password`, { email, otp: form.otp, newPassword: form.newPassword });
            toast.success(data.message || 'Key updated. Try logging in.');
            setView('login');
        } catch (err: any) {
            setError(err.response?.data?.error || 'Key update failed.');
        } finally { setLoading(false); }
    };

    return (
        <div className="flex min-h-screen bg-white font-sans overflow-hidden">
            {/* Minimal Left Content */}
            <div className="hidden lg:flex flex-col flex-1 bg-slate-50/50 p-24 justify-between border-r border-slate-100 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.03)_0%,transparent_50%)]" />

                <div className="relative z-10 flex items-center gap-3">
                    <div className="size-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                        <Wallet size={20} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 italic">ZenWallet<span className="text-blue-600 font-medium">OS</span></span>
                </div>

                <div className="relative z-10 space-y-8 max-w-md">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-slate-900 leading-[1.1] tracking-tight">The Decentralized Financial Interface.</h2>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed">Executive-level payment orchestration with zero-latency liquidity routing.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { label: 'Uptime', val: '99.99%', icon: <Zap size={14} /> },
                            { label: 'Latency', val: '142ms', icon: <Terminal size={14} /> }
                        ].map(stat => (
                            <div key={stat.label} className="space-y-1">
                                <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.icon}{stat.label}</div>
                                <p className="text-xl font-bold text-slate-900">{stat.val}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="relative z-10 text-[9px] font-bold text-slate-300 uppercase tracking-widest">© 2024 Global Node. Layer-1 Encrypted.</p>
            </div>

            {/* Auth Form Container */}
            <div className="flex-1 flex items-center justify-center p-8 bg-white relative">
                <div className="w-full max-w-[340px]">
                    <AnimatePresence mode="wait">
                        {view === 'login' && (
                            <motion.form
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleLogin}
                                className="space-y-6"
                            >
                                <div className="space-y-1">
                                    <h1 className="text-xl font-bold text-slate-900 tracking-tight">Identity Access</h1>
                                    <p className="text-[11px] text-slate-400 font-medium">Enter your credentials to enter the workspace.</p>
                                </div>

                                {error && <Alert msg={error} type="error" />}

                                <div className="space-y-4">
                                    <Field label="Authorized Email" type="email" value={form.email} onChange={(val: string) => setForm({ ...form, email: val })} placeholder="name@company.com" icon={Mail} />
                                    <Field label="Master Security Key" type="password" value={form.password} onChange={(val: string) => setForm({ ...form, password: val })} placeholder="••••••••" icon={Lock} />
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <div className="size-4 border border-slate-200 rounded flex items-center justify-center group peer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="size-2.5 bg-blue-600 rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Persistence</span>
                                    </label>
                                    <button type="button" onClick={() => setView('forgot-password')} className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Recovery</button>
                                </div>

                                <button type="submit" disabled={loading} className="w-full h-12 bg-slate-900 text-white font-bold text-[11px] uppercase tracking-widest rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group">
                                    {loading ? <Loader2 size={16} className="animate-spin" /> : <>Launch Workspace <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></>}
                                </button>

                                <div className="pt-8 border-t border-slate-50 text-center">
                                    <p className="text-[11px] text-slate-400 font-medium">No node authorized? <button type="button" onClick={() => setView('signup')} className="text-blue-600 font-bold hover:underline">Provision ID</button></p>
                                </div>

                                <div className="bg-blue-50/50 border border-blue-100/50 rounded-xl p-4">
                                    <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1 flex items-center gap-2"><Rocket size={12} /> Sandbox Identity</p>
                                    <code className="text-[10px] font-bold text-blue-900">demo@zenpay.os • pass123</code>
                                </div>
                            </motion.form>
                        )}

                        {view === 'signup' && (
                            <motion.form
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleSignup}
                                className="space-y-6"
                            >
                                <div className="space-y-1">
                                    <h1 className="text-xl font-bold text-slate-900 tracking-tight">Provision Infrastructure</h1>
                                    <p className="text-[11px] text-slate-400 font-medium">Initialize your organizational node.</p>
                                </div>

                                {error && <Alert msg={error} type="error" />}

                                <div className="space-y-4">
                                    <Field label="Operator Name" value={form.name} onChange={(val: string) => setForm({ ...form, name: val })} placeholder="Admin User" icon={User} />
                                    <Field label="Legal Entity" value={form.businessName} onChange={(val: string) => setForm({ ...form, businessName: val })} placeholder="Company Ltd" icon={Building2} />
                                    <Field label="Primary Node Email" type="email" value={form.email} onChange={(val: string) => setForm({ ...form, email: val })} placeholder="node@domain.com" icon={Mail} />
                                    <Field label="Master Password" type="password" value={form.password} onChange={(val: string) => setForm({ ...form, password: val })} placeholder="Secure Key" icon={Lock} />
                                </div>

                                <label className="flex items-start gap-3 cursor-pointer p-1">
                                    <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} className="mt-1 size-4 rounded border-slate-200 accent-blue-600" />
                                    <span className="text-[10px] text-slate-400 leading-normal font-medium italic">I authorize node activation under ZenWallet protocols.</span>
                                </label>

                                <button type="submit" disabled={loading} className="w-full h-12 bg-blue-600 text-white font-bold text-[11px] uppercase tracking-widest rounded-xl transition-all active:scale-95 shadow-lg">
                                    {loading ? 'Activating...' : 'Activate Node'}
                                </button>

                                <p className="text-center text-[11px] text-slate-400 font-medium">Authorized user? <button type="button" onClick={() => setView('login')} className="text-blue-600 font-bold">Login Hub</button></p>
                            </motion.form>
                        )}

                        {view === 'verify-otp' && (
                            <motion.form
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleVerifyOtp}
                                className="space-y-6"
                            >
                                <div className="space-y-1">
                                    <h1 className="text-xl font-bold text-slate-900 tracking-tight">Activation Code</h1>
                                    <p className="text-[11px] text-slate-400 font-medium">Verify your node status with the 6-digit key sent to your email.</p>
                                </div>

                                {error && <Alert msg={error} type="error" />}

                                <div className="space-y-4">
                                    <Field label="Verification Key" value={form.otp} onChange={(val: string) => setForm({ ...form, otp: val })} placeholder="000000" icon={ShieldCheck} />
                                </div>

                                <button type="submit" disabled={loading} className="w-full h-12 bg-emerald-600 text-white font-bold text-[11px] uppercase tracking-widest rounded-xl transition-all active:scale-95">
                                    {loading ? 'Verifying...' : 'Verify Identity'}
                                </button>

                                <div className="flex flex-col gap-2 items-center">
                                    <div className="flex gap-4">
                                        <button type="button" onClick={handleResendOtp} disabled={loading} className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Resend Code</button>
                                        <button type="button" onClick={handleFetchDebugOtp} disabled={loading} className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded">Receive via Node Log</button>
                                    </div>
                                    <button type="button" onClick={() => setView('login')} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Back to Login</button>
                                </div>
                            </motion.form>
                        )}

                        {view === 'forgot-password' && (
                            <motion.form
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleForgotPassword}
                                className="space-y-6"
                            >
                                <div className="space-y-1">
                                    <h1 className="text-xl font-bold text-slate-900 tracking-tight">Identity Recovery</h1>
                                    <p className="text-[11px] text-slate-400 font-medium">Initialize a master recovery sequence.</p>
                                </div>

                                {error && <Alert msg={error} type="error" />}

                                <div className="space-y-4">
                                    <Field label="Node Email" type="email" value={form.email} onChange={(val: string) => setForm({ ...form, email: val })} placeholder="name@company.com" icon={Mail} />
                                </div>

                                <button type="submit" disabled={loading} className="w-full h-12 bg-slate-900 text-white font-bold text-[11px] uppercase tracking-widest rounded-xl transition-all active:scale-95">
                                    {loading ? 'Searching...' : 'Request Recovery Key'}
                                </button>

                                <p className="text-center">
                                    <button type="button" onClick={() => setView('login')} className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Abort & Login</button>
                                </p>
                            </motion.form>
                        )}

                        {view === 'reset-password' && (
                            <motion.form
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleResetPassword}
                                className="space-y-6"
                            >
                                <div className="space-y-1">
                                    <h1 className="text-xl font-bold text-slate-900 tracking-tight">Update Master Key</h1>
                                    <p className="text-[11px] text-slate-400 font-medium">Install a new security credential.</p>
                                </div>

                                {error && <Alert msg={error} type="error" />}

                                <div className="space-y-4">
                                    <Field label="Recovery Key" value={form.otp} onChange={(val: string) => setForm({ ...form, otp: val })} placeholder="000000" icon={ShieldCheck} />
                                    <Field label="New Master Key" type="password" value={form.newPassword} onChange={(val: string) => setForm({ ...form, newPassword: val })} placeholder="Min 8 characters" icon={Lock} />
                                </div>

                                <button type="submit" disabled={loading} className="w-full h-12 bg-blue-600 text-white font-bold text-[11px] uppercase tracking-widest rounded-xl transition-all active:scale-95">
                                    {loading ? 'Installing...' : 'Confirm Update'}
                                </button>
                                <div className="mt-4 text-center">
                                    <button type="button" onClick={handleFetchDebugOtp} disabled={loading} className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">Fetch Recovery Key from Log</button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
