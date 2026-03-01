import React, { useState } from 'react';
import axios from 'axios';
import { Wallet, Mail, Lock, Eye, EyeOff, Building2, User, ArrowRight, Shield } from 'lucide-react';

const API = 'http://localhost:4000/v1/auth';

type AuthView = 'login' | 'signup' | 'verify-otp' | 'forgot-password' | 'reset-password';

interface AuthPageProps {
    onLoginSuccess: (token: string, merchant: any) => void;
}

// ----- Shared left panel -----
const LeftPanel = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="hidden lg:flex w-[480px] flex-shrink-0 bg-[#1e3a8a] flex-col justify-between p-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #fff 39px, #fff 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #fff 39px, #fff 40px)'
        }} />
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-20">
                <div className="size-9 bg-white/15 rounded-xl flex items-center justify-center">
                    <Wallet size={18} className="text-white" strokeWidth={2.5} />
                </div>
                <span className="text-white font-bold text-lg tracking-tight">ZenWallet</span>
            </div>
            <h2 className="text-4xl font-black text-white leading-tight mb-4">{title}</h2>
            <p className="text-blue-200 text-base leading-relaxed">{subtitle}</p>
        </div>
        <div className="relative z-10 grid grid-cols-3 gap-6">
            {[['99.9%', 'Uptime'], ['24/7', 'Support'], ['120+', 'Currencies']].map(([val, label]) => (
                <div key={label}>
                    <p className="text-white text-2xl font-black">{val}</p>
                    <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mt-1">{label}</p>
                </div>
            ))}
        </div>
        <p className="relative z-10 text-blue-300/60 text-xs mt-8">© 2024 ZenWallet Inc. All rights reserved.</p>
    </div>
);

// ----- Input field -----
const Field = ({ label, type = 'text', value, onChange, placeholder, icon: Icon }: any) => {
    const [show, setShow] = useState(false);
    const inputType = type === 'password' ? (show ? 'text' : 'password') : type;
    return (
        <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{label}</label>
            <div className="relative group">
                {Icon && <Icon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />}
                <input
                    type={inputType}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all"
                    style={{ paddingLeft: Icon ? '44px' : '16px', paddingRight: type === 'password' ? '44px' : '16px' }}
                />
                {type === 'password' && (
                    <button type="button" onClick={() => setShow(s => !s)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors">
                        {show ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                )}
            </div>
        </div>
    );
};

// ----- OTP Input -----
const OtpInput = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
    const digits = value.split('').concat(Array(6).fill('')).slice(0, 6);
    const handleKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        const inputs = document.querySelectorAll<HTMLInputElement>('.otp-input');
        if (e.key === 'Backspace' && !digits[i] && i > 0) inputs[i - 1]?.focus();
    };
    const handleChange = (i: number, v: string) => {
        const d = value.split('').concat(Array(6).fill('')).slice(0, 6);
        d[i] = v.slice(-1);
        const newVal = d.join('').replace(/[^0-9]/g, '');
        onChange(newVal);
        if (v && i < 5) {
            const inputs = document.querySelectorAll<HTMLInputElement>('.otp-input');
            inputs[i + 1]?.focus();
        }
    };
    return (
        <div className="flex gap-3 justify-center">
            {digits.map((d, i) => (
                <input
                    key={i}
                    className="otp-input w-12 h-14 text-center text-xl font-black border-2 border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all"
                    maxLength={1}
                    value={d}
                    onChange={e => handleChange(i, e.target.value)}
                    onKeyDown={e => handleKey(i, e)}
                />
            ))}
        </div>
    );
};

// ----- Error / Success Alert -----
const Alert = ({ msg, type }: { msg: string; type: 'error' | 'success' }) => (
    <div className={`px-4 py-3 rounded-xl text-sm font-semibold ${type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
        {msg}
    </div>
);

// ----- Main AuthPage -----
export const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess }) => {
    const [view, setView] = useState<AuthView>('login');
    const [pendingEmail, setPendingEmail] = useState(() => sessionStorage.getItem('zw_pending_email') || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const savePendingEmail = (email: string) => {
        setPendingEmail(email);
        sessionStorage.setItem('zw_pending_email', email);
    };

    // Form states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const reset = () => { setError(''); setSuccess(''); };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); reset(); setLoading(true);
        try {
            const { data } = await axios.post(`${API}/login`, { email, password });
            if (data.status === 'success') {
                sessionStorage.removeItem('zw_pending_email');
                onLoginSuccess(data.data.token, data.data.merchant);
            }
        } catch (err: any) {
            const resp = err.response?.data;
            if (resp?.status === 'unverified') {
                savePendingEmail(email);
                setView('verify-otp');
                setSuccess('Email verification pending. A new code has been sent.');
            } else {
                setError(resp?.error || 'Authentication failed. Please check your credentials.');
            }
        } finally { setLoading(false); }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault(); reset();
        if (!agree) { setError('Please agree to the Terms of Service.'); return; }
        setLoading(true);
        try {
            const { data } = await axios.post(`${API}/register`, { name, email, businessName, password });
            savePendingEmail(email);
            setView('verify-otp');
            setSuccess(data.message || 'Check your inbox for the 6-digit code!');
        } catch (err: any) {
            setError(err.response?.data?.error || 'Registration failed.');
        } finally { setLoading(false); }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault(); reset(); setLoading(true);
        try {
            const { data } = await axios.post(`${API}/verify-otp`, { email: pendingEmail, otp });
            if (data.status === 'success') {
                sessionStorage.removeItem('zw_pending_email');
                onLoginSuccess(data.data.token, data.data.merchant);
            }
        } catch (err: any) {
            setError(err.response?.data?.error || 'Incorrect or expired code. Please try again.');
        } finally { setLoading(false); }
    };

    const handleResendOtp = async () => {
        reset(); setLoading(true);
        try {
            await axios.post(`${API}/resend-otp`, { email: pendingEmail });
            setSuccess('A new code has been sent to your email.');
        } catch (err: any) {
            setError(err.response?.data?.error || 'Failed to resend. Try again.');
        } finally { setLoading(false); }
    };

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault(); reset(); setLoading(true);
        try {
            await axios.post(`${API}/forgot-password`, { email });
            savePendingEmail(email);
            setView('reset-password');
            setSuccess('Reset instructions sent! Please check your email.');
        } catch (err: any) {
            setError(err.response?.data?.error || 'We couldn\'t process that request. Is the email registered?');
        } finally { setLoading(false); }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault(); reset(); setLoading(true);
        try {
            const { data } = await axios.post(`${API}/reset-password`, { email: pendingEmail, otp, newPassword });
            setSuccess(data.message);
            setTimeout(() => { setView('login'); setOtp(''); setNewPassword(''); }, 2000);
        } catch (err: any) {
            setError(err.response?.data?.error || 'Reset failed.');
        } finally { setLoading(false); }
    };

    const panels: Record<AuthView, { title: string; subtitle: string }> = {
        login: { title: 'Empower your business growth.', subtitle: 'Join thousands of merchants using ZenWallet to scale operations with secure payment solutions.' },
        signup: { title: 'Powering the next generation of commerce.', subtitle: 'Join 50,000+ businesses worldwide to streamline payments, manage expenses and scale faster.' },
        'verify-otp': { title: 'One step away from your dashboard.', subtitle: 'We sent a 6-digit code to verify your identity and secure your account.' },
        'forgot-password': { title: 'Account recovery.', subtitle: 'Enter your registered email and we\'ll send a secure reset code instantly.' },
        'reset-password': { title: 'Set a new password.', subtitle: 'Enter the reset code from your email, and choose a new secure password.' },
    };

    return (
        <div className="flex min-h-screen bg-white font-sans">
            <LeftPanel title={panels[view].title} subtitle={panels[view].subtitle} />

            <div className="flex-1 flex items-center justify-center p-8 bg-slate-50">
                <div className="w-full max-w-md">

                    {/* LOGIN */}
                    {view === 'login' && (
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome back</h1>
                                <p className="text-sm text-slate-500 mt-1">Enter your credentials to access your merchant portal.</p>
                            </div>
                            {error && <Alert msg={error} type="error" />}
                            <Field label="Work Email Address" type="email" value={email} onChange={setEmail} placeholder="name@company.com" icon={Mail} />
                            <Field type="password" label="Password" value={password} onChange={setPassword} placeholder="••••••••" icon={Lock} />

                            <div className="flex items-center justify-between pt-1">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="size-4 accent-blue-600 rounded" />
                                    <span className="text-xs text-slate-500 font-medium">Remember me</span>
                                </label>
                                <button type="button" onClick={() => { setView('forgot-password'); reset(); }} className="text-xs font-black text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider">
                                    Forgot password?
                                </button>
                            </div>
                            <button type="submit" disabled={loading} className="w-full h-14 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-black text-sm rounded-[1.25rem] shadow-xl shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-3">
                                {loading ? 'Validating...' : <><span>Enter Portal</span><ArrowRight size={18} /></>}
                            </button>

                            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 mt-2">
                                <p className="text-[10px] uppercase font-black tracking-widest text-blue-600 mb-1">Demo Access</p>
                                <p className="text-xs text-blue-800 leading-relaxed">
                                    Use <span className="font-bold underline">hackerstudent2007@gmail.com</span> to test the verified dashboard.
                                </p>
                            </div>

                            <p className="text-center text-sm text-slate-500 pt-2">New to ZenWallet? <button type="button" onClick={() => { setView('signup'); reset(); }} className="text-blue-600 font-bold hover:underline">Create an account →</button></p>
                            <div className="flex items-center justify-center gap-6 pt-6 border-t border-slate-200/50">
                                {['PCI DSS', '256-bit SSL'].map(t => (
                                    <div key={t} className="flex items-center gap-1.5 text-slate-400">
                                        <Shield size={12} />
                                        <span className="text-[9px] font-bold uppercase tracking-widest">{t}</span>
                                    </div>
                                ))}
                            </div>
                        </form>
                    )}

                    {/* SIGNUP */}
                    {view === 'signup' && (
                        <form onSubmit={handleSignup} className="space-y-5">
                            <div>
                                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Create your merchant account</h1>
                                <p className="text-sm text-slate-500 mt-1">Start accepting payments in minutes. No hidden fees.</p>
                            </div>
                            {error && <Alert msg={error} type="error" />}
                            <Field label="Full Name" value={name} onChange={setName} placeholder="e.g. John Doe" icon={User} />
                            <Field label="Business Name" value={businessName} onChange={setBusinessName} placeholder="e.g. Zen Retail Group" icon={Building2} />
                            <Field label="Work Email" type="email" value={email} onChange={setEmail} placeholder="name@company.com" icon={Mail} />
                            <Field label="Password" type="password" value={password} onChange={setPassword} placeholder="Min. 8 characters" icon={Lock} />
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} className="mt-0.5 size-4 accent-blue-600" />
                                <span className="text-xs text-slate-500 leading-relaxed">I agree to the <span className="text-blue-600 font-semibold">Terms of Service</span> and <span className="text-blue-600 font-semibold">Privacy Policy.</span></span>
                            </label>
                            <button type="submit" disabled={loading} className="w-full h-12 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                                {loading ? 'Creating account...' : 'Create Account'}
                            </button>
                            <p className="text-center text-sm text-slate-500">Already have an account? <button type="button" onClick={() => { setView('login'); reset(); }} className="text-blue-600 font-bold hover:underline">Log In</button></p>
                        </form>
                    )}

                    {/* VERIFY OTP */}
                    {view === 'verify-otp' && (
                        <form onSubmit={handleVerifyOtp} className="space-y-8">
                            <div className="text-center">
                                <div className="size-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-blue-100">
                                    <Shield size={28} className="text-blue-600" strokeWidth={2.5} />
                                </div>
                                <h1 className="text-2xl font-black text-slate-900 tracking-tight">Verify your identity</h1>
                                <p className="text-sm text-slate-500 mt-2">We've sent a 6-digit code to</p>
                                <p className="text-sm font-bold text-slate-900">{pendingEmail}</p>
                            </div>
                            {error && <Alert msg={error} type="error" />}
                            {success && <Alert msg={success} type="success" />}
                            <OtpInput value={otp} onChange={setOtp} />
                            <button type="submit" disabled={loading || otp.length !== 6} className="w-full h-14 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 transition-all active:scale-95 text-sm">
                                {loading ? 'Verifying...' : 'Unlock Account'}
                            </button>

                            <div className="space-y-3">
                                <p className="text-center text-sm text-slate-500">
                                    Email not arriving? <button type="button" onClick={handleResendOtp} disabled={loading} className="text-blue-600 font-bold hover:underline">Resend code</button>
                                </p>
                                <div className="p-3 bg-amber-50 rounded-xl border border-amber-100/50">
                                    <p className="text-[10px] text-amber-700 leading-relaxed font-medium text-center">
                                        Trouble with code? Check your spam folder or try re-entering your email correctly.
                                    </p>
                                </div>
                            </div>

                            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2 pt-4">
                                <Shield size={11} /> Multi-factor authentication active
                            </p>
                        </form>
                    )}

                    {/* FORGOT PASSWORD */}
                    {view === 'forgot-password' && (
                        <form onSubmit={handleForgotPassword} className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Forgot password?</h1>
                                <p className="text-sm text-slate-500 mt-1">No worries. Enter your email and we'll send a reset code.</p>
                            </div>
                            {error && <Alert msg={error} type="error" />}
                            {success && <Alert msg={success} type="success" />}
                            <Field label="Registered Email" type="email" value={email} onChange={setEmail} placeholder="name@company.com" icon={Mail} />
                            <button type="submit" disabled={loading} className="w-full h-12 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                                {loading ? 'Sending...' : 'Send Reset Code'}
                            </button>
                            <p className="text-center text-sm text-slate-500"><button type="button" onClick={() => { setView('login'); reset(); }} className="text-blue-600 font-bold hover:underline">← Back to login</button></p>
                        </form>
                    )}

                    {/* RESET PASSWORD */}
                    {view === 'reset-password' && (
                        <form onSubmit={handleResetPassword} className="space-y-7">
                            <div>
                                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Set new password</h1>
                                <p className="text-sm text-slate-500 mt-1">Enter the code sent to <strong>{pendingEmail}</strong> and choose a new password.</p>
                            </div>
                            {error && <Alert msg={error} type="error" />}
                            {success && <Alert msg={success} type="success" />}
                            <OtpInput value={otp} onChange={setOtp} />
                            <Field label="New Password" type="password" value={newPassword} onChange={setNewPassword} placeholder="Min. 8 characters" icon={Lock} />
                            <button type="submit" disabled={loading || otp.length !== 6 || !newPassword} className="w-full h-12 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                                {loading ? 'Resetting...' : 'Reset Password'}
                            </button>
                            <p className="text-center text-sm text-slate-500"><button type="button" onClick={() => { setView('login'); reset(); }} className="text-blue-600 font-bold hover:underline">← Back to login</button></p>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
};
