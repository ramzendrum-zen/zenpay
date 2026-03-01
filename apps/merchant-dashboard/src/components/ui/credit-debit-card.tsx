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
        const [password, setPassword] = React.useState('');
        const [showPwd, setShowPwd] = React.useState(false);
        const [pwdError, setPwdError] = React.useState('');
        const [verifying, setVerifying] = React.useState(false);

        const getCardTheme = () => {
            if (spending >= 100000) return {
                bgColor: "#000000",
                border: "border-yellow-400/50 shadow-[0_0_25px_rgba(250,204,21,0.4)]",
                glow: "after:content-[''] after:absolute after:inset-0 after:rounded-[2.5rem] after:shadow-[inset_0_0_15px_rgba(250,204,21,0.3)]"
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
            if (!text || text.includes('•')) return;
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
                    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md" onClick={() => setShowPasswordModal(false)}>
                        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 w-full max-w-[360px] shadow-2xl" onClick={e => e.stopPropagation()}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 bg-violet-500/10 rounded-2xl flex items-center justify-center">
                                        <Lock size={18} className="text-violet-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black text-white">Secure Access</h3>
                                        <p className="text-[10px] text-slate-500">Enter your password to view card details</p>
                                    </div>
                                </div>
                                <button onClick={() => setShowPasswordModal(false)} className="size-8 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-slate-400 transition-colors">
                                    <X size={14} />
                                </button>
                            </div>
                            <form onSubmit={handlePasswordSubmit} className="space-y-4">
                                <div className="relative">
                                    <input
                                        autoFocus
                                        type={showPwd ? "text" : "password"}
                                        placeholder="Enter your account password"
                                        value={password}
                                        onChange={e => { setPassword(e.target.value); setPwdError(''); }}
                                        className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl px-5 pr-12 text-white text-sm font-medium placeholder:text-slate-600 outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
                                    />
                                    <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors">
                                        {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                                {pwdError && <p className="text-[11px] text-red-400 font-medium pl-1">{pwdError}</p>}
                                <button
                                    type="submit"
                                    disabled={verifying || !password}
                                    className="w-full h-12 bg-violet-600 hover:bg-violet-700 text-white font-black rounded-2xl flex items-center justify-center gap-2 transition-all text-sm uppercase tracking-widest disabled:opacity-50 active:scale-98"
                                >
                                    {verifying ? 'Verifying...' : 'Unlock Card'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Card */}
                <div
                    className={cn("group h-56 w-full max-w-[360px] [perspective:1000px] cursor-pointer", className)}
                    ref={ref}
                    onClick={handleCardClick}
                    {...props}
                >
                    <div
                        className={cn(
                            "relative h-full w-full rounded-2xl shadow-xl transition-transform duration-700 [transform-style:preserve-3d]",
                            isFlipped && isUnlocked && "[transform:rotateY(180deg)]"
                        )}
                    >
                        {/* --- CARD FRONT --- */}
                        <div
                            className={cn(
                                "absolute h-full w-full rounded-[2.5rem] transition-all duration-500 text-white [backface-visibility:hidden] border p-[1px]",
                                theme.border,
                                (theme as any).glow
                            )}
                            style={{ backgroundColor: theme.bgColor }}
                        >
                            <div className="relative flex h-full flex-col justify-between p-7">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold tracking-widest text-slate-400">ZENWALLET</span>
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
                                        onClick={(e) => !masked && copyToClipboard(cardNumber, "Card number", e)}
                                        className={cn("group/copy px-6 py-3 rounded-2xl transition-all relative border border-transparent", !masked && "hover:bg-white/[0.03] hover:border-white/5")}
                                    >
                                        <div className="font-mono text-xl tracking-[0.2em] text-slate-200 whitespace-nowrap group-hover/copy:text-white transition-colors">
                                            {displayCard}
                                        </div>
                                        {!masked && (
                                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/copy:opacity-100 transition-all flex items-center gap-1 bg-black/50 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap">
                                                <span className="text-[8px] font-bold text-violet-400 uppercase tracking-widest">Click to copy</span>
                                                <Copy size={10} className="text-violet-400" />
                                            </div>
                                        )}
                                    </button>
                                </div>
                                <div className="flex items-end justify-between">
                                    <button
                                        onClick={(e) => !masked && copyToClipboard(cardholderName, "Holder name", e)}
                                        className={cn("text-left group/copy p-2 rounded-xl transition-all border border-transparent relative", !masked && "hover:bg-white/[0.03] hover:border-white/5")}
                                    >
                                        <p className="text-[9px] font-bold uppercase text-slate-500 tracking-widest mb-1">Card Holder</p>
                                        <p className="font-mono text-xs font-medium text-slate-300 group-hover/copy:text-white transition-colors uppercase">{cardholderName}</p>
                                        {!masked && <Copy size={10} className="absolute top-2 right-2 opacity-0 group-hover/copy:opacity-100 text-violet-500" />}
                                    </button>
                                    <button
                                        onClick={(e) => !masked && copyToClipboard(expiryDate, "Expiry date", e)}
                                        className={cn("text-right group/copy p-2 rounded-xl transition-all border border-transparent relative", !masked && "hover:bg-white/[0.03] hover:border-white/5")}
                                    >
                                        <p className="text-[9px] font-bold uppercase text-slate-500 tracking-widest mb-1">Expires</p>
                                        <p className="font-mono text-xs font-medium text-slate-300 group-hover/copy:text-white transition-colors">{displayExpiry}</p>
                                        {!masked && <Copy size={10} className="absolute top-2 left-2 opacity-0 group-hover/copy:opacity-100 text-violet-500" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* --- CARD BACK --- */}
                        <div
                            className={cn(
                                "absolute h-full w-full rounded-[2.5rem] transition-all duration-500 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] border",
                                theme.border
                            )}
                            style={{ backgroundColor: theme.bgColor }}
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
                                        This card is issued by ZenWallet for secure transactions. Authorized use only. Do not share your CVV.
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
