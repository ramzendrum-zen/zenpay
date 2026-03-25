import * as React from "react";
import { cn } from "../../lib/utils";
import { Copy, Check, Eye, EyeOff, Lock, X } from "lucide-react";
import toast from "react-hot-toast";

interface FlippableCreditCardProps extends React.HTMLAttributes<HTMLDivElement> {
    cardholderName: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    spending?: number;
    requiresPassword?: boolean;
    onPasswordVerify?: (password: string) => Promise<boolean>;
}

const FlippableCreditCard = React.forwardRef<HTMLDivElement, FlippableCreditCardProps>(
    ({ className, cardholderName, cardNumber, expiryDate, cvv, spending = 0, requiresPassword = false, onPasswordVerify, ...props }, ref) => {
        const [isFlipped, setIsFlipped] = React.useState(false);
        const [isUnlocked, setIsUnlocked] = React.useState(!requiresPassword);
        const [showPasswordModal, setShowPasswordModal] = React.useState(false);
        const [unlockStep, setUnlockStep] = React.useState<'SELECT' | 'PIN' | 'PASSWORD'>('SELECT');
        const [password, setPassword] = React.useState('');
        const [showPwd, setShowPwd] = React.useState(false);
        const [pwdError, setPwdError] = React.useState('');
        const [verifying, setVerifying] = React.useState(false);

        const getCardTheme = () => {
            if (spending >= 100000) return {
                bgColor: "#000000",
                border: "border-yellow-400/50 shadow-[0_0_25px_rgba(250,204,21,0.4)]",
                glow: "after:content-[''] after:absolute after:inset-0 after:rounded-[2.5rem] after:shadow-[inset_0_0_15px_rgba(250,204,21,0.3)] after:pointer-events-none"
            };
            if (spending >= 80000) return { bgColor: "#022c22", border: "border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.25)]" };
            if (spending >= 60000) return { bgColor: "#2a0a0a", border: "border-red-500/40 shadow-[0_0_25px_rgba(239,68,68,0.25)]" };
            if (spending >= 40000) return { bgColor: "#0f0a22", border: "border-violet-500/40 shadow-[0_0_25px_rgba(139,92,246,0.25)]" };
            if (spending >= 30000) return { bgColor: "#0a1c12", border: "border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.25)]" };
            if (spending >= 20000) return { bgColor: "#180a0a", border: "border-red-500/40 shadow-[0_0_25px_rgba(239,68,68,0.25)]" };
            if (spending >= 10000) return { bgColor: "#1a0b0b", border: "border-orange-500/40 shadow-[0_0_25px_rgba(249,115,22,0.25)]" };
            return { bgColor: "#09090b", border: "border-white/10 shadow-lg" };
        };

        const theme = getCardTheme();

        // Whether card details should be masked (not yet unlocked)
        const masked = !isUnlocked;

        const displayCard = masked
            ? '•••• •••• •••• ••••'
            : (cardNumber?.length === 16
                ? `${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(8, 12)} ${cardNumber.slice(12, 16)}`
                : cardNumber);
        const displayExpiry = masked ? '••/••' : expiryDate;
        const displayCvv = masked ? '•••' : cvv;

        const handleCardClick = () => {
            if (requiresPassword && !isUnlocked) {
                setUnlockStep('SELECT');
                setShowPasswordModal(true);
            } else {
                setIsFlipped(!isFlipped);
            }
        };

        const handlePasswordSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setPwdError('');
            setVerifying(true);
            try {
                if (onPasswordVerify) {
                    const ok = await onPasswordVerify(password);
                    if (ok) {
                        setIsUnlocked(true);
                        setShowPasswordModal(false);
                        setPassword('');
                        toast.success('Card unlocked!', {
                            style: {
                                borderRadius: '12px',
                                background: '#09090b',
                                color: '#fff',
                                border: '1px solid rgba(255,255,255,0.05)',
                                fontSize: '12px'
                            }
                        });
                    } else {
                        setPwdError('Incorrect password. Try again.');
                    }
                } else {
                    // Default: just unlock it
                    setIsUnlocked(true);
                    setShowPasswordModal(false);
                    setPassword('');
                }
            } finally {
                setVerifying(false);
            }
        };

        const copyToClipboard = (text: string, label: string, e: React.MouseEvent) => {
            e.stopPropagation();
            e.preventDefault();
            if (!text || text.includes('•') || text.includes('*')) return;
            navigator.clipboard.writeText(text.replace(/\s/g, ''));
            toast.success(`${label} copied!`, {
                icon: <Check className="h-4 w-4 text-emerald-500" />,
                style: {
                    borderRadius: '12px',
                    background: '#09090b',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.05)',
                    fontSize: '12px'
                },
            });
        };

        return (
            <>
                {/* Password Modal */}
                {showPasswordModal && (
                    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm" onClick={() => setShowPasswordModal(false)}>
                        <div className="bg-white border border-slate-100 rounded-[2rem] p-8 w-full max-w-[400px] shadow-2xl relative overflow-hidden" onClick={e => e.stopPropagation()}>
                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                        <Lock size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 tracking-tight">Secure Reveal</h3>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Verify identity to view card</p>
                                    </div>
                                </div>
                                <button onClick={() => setShowPasswordModal(false)} className="size-10 bg-slate-50 hover:bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 transition-all hover:rotate-90">
                                    <X size={18} />
                                </button>
                            </div>

                            {unlockStep === 'SELECT' && (
                                <div className="space-y-4 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
                                    <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">Choose your preferred method to unlock your secure virtual card details.</p>
                                    <button
                                        onClick={() => { setUnlockStep('PIN'); setPassword(''); setPwdError(''); }}
                                        className="w-full group flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-md transition-all text-left shadow-sm"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="size-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-100/50 transition-colors">
                                                <span className="text-xs font-black text-slate-400 group-hover:text-blue-600">123</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900">Unlock with PIN</p>
                                                <p className="text-[10px] text-slate-500 font-medium">Use your 6-digit secure PIN</p>
                                            </div>
                                        </div>
                                        <div className="size-5 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-blue-500">
                                            <div className="size-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => { setUnlockStep('PASSWORD'); setPassword(''); setPwdError(''); }}
                                        className="w-full group flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-md transition-all text-left shadow-sm"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="size-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-100/50 transition-colors">
                                                <Lock size={18} className="text-slate-400 group-hover:text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900">Unlock with Password</p>
                                                <p className="text-[10px] text-slate-500 font-medium">Use your account password</p>
                                            </div>
                                        </div>
                                        <div className="size-5 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-blue-500">
                                            <div className="size-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </button>
                                </div>
                            )}

                            {(unlockStep === 'PIN' || unlockStep === 'PASSWORD') && (
                                <form onSubmit={handlePasswordSubmit} className="space-y-6 relative z-10 animate-in fade-in zoom-in-95 duration-300">
                                    <div className="flex items-center gap-2 mb-2">
                                        <button
                                            type="button"
                                            onClick={() => setUnlockStep('SELECT')}
                                            className="text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:text-blue-700 flex items-center gap-1"
                                        >
                                            ← Back to methods
                                        </button>
                                    </div>

                                    <div className="relative">
                                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                                            {unlockStep === 'PIN' ? 'Enter 6-Digit PIN' : 'Enter Password'}
                                        </label>
                                        <div className="relative">
                                            <input
                                                autoFocus
                                                type={showPwd ? "text" : "password"}
                                                placeholder={unlockStep === 'PIN' ? "••••••" : "••••••••"}
                                                value={password}
                                                maxLength={unlockStep === 'PIN' ? 6 : undefined}
                                                onChange={e => {
                                                    const val = unlockStep === 'PIN' ? e.target.value.replace(/\D/g, '').slice(0, 6) : e.target.value;
                                                    setPassword(val);
                                                    setPwdError('');
                                                }}
                                                className={cn(
                                                    "w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-5 pr-12 text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all [&::-ms-reveal]:hidden [&::-webkit-reveal]:hidden",
                                                    unlockStep === 'PIN' ? "text-center text-3xl font-mono tracking-[0.5em] placeholder:tracking-normal" : "text-sm font-medium"
                                                )}
                                            />
                                            <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                                {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    {pwdError && (
                                        <p className="text-xs text-red-600 font-bold bg-red-50 p-3 rounded-xl border border-red-100 flex items-center gap-2">
                                            <X size={14} /> {pwdError}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={verifying || (unlockStep === 'PIN' ? password.length !== 6 : !password)}
                                        className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-[0.1em] disabled:opacity-40 active:scale-95 shadow-md shadow-slate-900/10"
                                    >
                                        {verifying ? 'Verifying...' : 'Unlock Now'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                )}

                {/* Card */}
                <div
                    className={cn("group h-56 w-full max-w-[360px] cursor-pointer", className)}
                    style={{ perspective: "1000px" }}
                    ref={ref}
                    {...props}
                    onClick={(e) => {
                        handleCardClick();
                        props.onClick?.(e);
                    }}
                >
                    <div
                        className="relative h-full w-full rounded-2xl shadow-xl transition-transform duration-700"
                        style={{ transformStyle: "preserve-3d", transform: isFlipped && isUnlocked ? "rotateY(180deg)" : "rotateY(0deg)" }}
                    >
                        {/* --- CARD FRONT --- */}
                        <div
                            className={cn(
                                "absolute inset-0 h-full w-full rounded-[2.5rem] transition-all duration-500 text-white border p-[1px]",
                                theme.border,
                                (theme as any).glow
                            )}
                            style={{ backgroundColor: theme.bgColor, WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'rotateY(0deg)', pointerEvents: isFlipped && isUnlocked ? 'none' : 'auto' }}
                        >
                            <div className="relative flex h-full flex-col justify-between p-7">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold tracking-widest text-slate-400">ZenPay</span>
                                        <span className="text-[9px] font-bold text-violet-500/80 mt-1">SECURE VIRTUAL CARD</span>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                            <circle cx="25" cy="25" r="23" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10" />
                                            <path d="M25 10 L25 40 M10 25 L40 25" stroke="currentColor" strokeWidth="1" className="text-violet-500/30" />
                                            <rect x="15" y="15" width="20" height="20" rx="4" fill="currentColor" className="text-violet-500/20" />
                                        </svg>
                                        <span className="text-[10px] text-violet-400 font-black uppercase tracking-[0.15em] animate-pulse mt-1 bg-violet-400/10 px-2 py-0.5 rounded-full border border-violet-400/20">
                                            {masked ? '🔒 Tap to view details' : 'Tap to flip'}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-center -mt-4">
                                    <button
                                        onClick={(e) => {
                                            if (masked) return;
                                            e.stopPropagation();
                                            copyToClipboard(cardNumber, "Card number", e);
                                        }}
                                        className={cn(
                                            "group/copy px-5 py-2.5 rounded-2xl transition-all relative border border-transparent flex items-center gap-3",
                                            !masked ? "hover:bg-white/10 active:scale-95 cursor-copy" : "pointer-events-none"
                                        )}
                                    >
                                        <div className="font-mono text-xl tracking-[0.2em] text-slate-200 whitespace-nowrap group-hover/copy:text-white transition-colors">
                                            {displayCard}
                                        </div>
                                        {!masked && (
                                            <Copy size={16} className="text-white/30 group-hover/copy:text-white transition-colors" />
                                        )}
                                    </button>
                                </div>
                                <div className="flex items-end justify-between">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); if (!masked) copyToClipboard(cardholderName, "Holder name", e); }}
                                        className={cn("text-left group/copy p-2 rounded-xl transition-all border border-transparent relative flex flex-col items-start gap-1", !masked && "hover:bg-white/10 active:scale-95 cursor-copy")}
                                    >
                                        <p className="text-[9px] font-bold uppercase text-slate-400 tracking-widest group-hover/copy:text-slate-300 transition-colors">Card Holder</p>
                                        <div className="flex items-center gap-2">
                                            <p className="font-mono text-xs font-bold text-slate-200 group-hover/copy:text-white transition-colors uppercase">{cardholderName}</p>
                                            {!masked && <Copy size={12} className="text-white/30 group-hover/copy:text-white transition-colors" />}
                                        </div>
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); if (!masked) copyToClipboard(expiryDate, "Expiry date", e); }}
                                        className={cn("text-right group/copy p-2 rounded-xl transition-all border border-transparent relative flex flex-col items-end gap-1", !masked && "hover:bg-white/10 active:scale-95 cursor-copy")}
                                    >
                                        <p className="text-[9px] font-bold uppercase text-slate-400 tracking-widest group-hover/copy:text-slate-300 transition-colors">Expires</p>
                                        <div className="flex items-center gap-2">
                                            {!masked && <Copy size={12} className="text-white/30 group-hover/copy:text-white transition-colors" />}
                                            <p className="font-mono text-xs font-bold text-slate-200 group-hover/copy:text-white transition-colors">{displayExpiry}</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* --- CARD BACK --- */}
                        <div
                            className={cn(
                                "absolute inset-0 h-full w-full rounded-[2.5rem] transition-all duration-500 text-white border",
                                theme.border
                            )}
                            style={{ backgroundColor: theme.bgColor, WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', pointerEvents: isFlipped && isUnlocked ? 'auto' : 'none' }}
                        >
                            <div className="flex h-full flex-col py-6">
                                <div className="mt-6 h-12 w-full bg-zinc-800/80" />
                                <div className="mx-6 mt-6 flex justify-end">
                                    <button
                                        onClick={(e) => !masked && copyToClipboard(cvv, "CVV", e)}
                                        className="group/copy bg-white h-10 w-16 flex items-center justify-center rounded-lg relative"
                                    >
                                        <span className="font-mono text-sm text-zinc-900 font-bold">{displayCvv}</span>
                                        {!masked && (
                                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/copy:opacity-100 transition-all flex items-center gap-1 whitespace-nowrap bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                                                <span className="text-[8px] font-bold text-violet-400 uppercase tracking-widest">Copy CVV</span>
                                                <Copy size={10} className="text-violet-400" />
                                            </div>
                                        )}
                                    </button>
                                </div>
                                <div className="mt-auto px-6 flex justify-between items-end">
                                    <div className="text-slate-500 text-[8px] font-medium leading-relaxed max-w-[60%]">
                                        This card is issued by ZenPay for secure transactions. Authorized use only. Do not share your CVV.
                                    </div>
                                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                        <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
                                        <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
                                        <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48C20.376,15.05,18,19.245,18,24z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
);

FlippableCreditCard.displayName = "FlippableCreditCard";
export { FlippableCreditCard };
