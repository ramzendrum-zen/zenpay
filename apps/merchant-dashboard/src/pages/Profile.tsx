import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';
import { Fingerprint, Copy, Shield, Lock, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { FlippableCreditCard } from '../components/ui/credit-debit-card';

import { API_BASE as _API_BASE } from '../lib/config';
const API_BASE = `${_API_BASE}/consumer`;

export const Profile: React.FC = () => {
    const { token, merchant } = useAuth();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);
    const [revealedCard, setRevealedCard] = useState<{ cardNumber: string; cvv: string } | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data } = await axios.get(`${API_BASE}/me`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(data.data);
            } catch (err) {
                console.error("Failed to fetch consumer data", err);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, [token]);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const verifyCardPassword = async (credential: string): Promise<boolean> => {
        try {
            // Check if it's a 6-digit PIN or a password
            const isPin = /^\d{6}$/.test(credential);
            const payload = isPin ? { pin: credential } : { password: credential };

            const { data } = await axios.post(`${API_BASE}/reveal-card`, payload, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (data.status === 'success') {
                setRevealedCard({
                    cardNumber: data.data.cardNumber,
                    cvv: data.data.cvv
                });
                return true;
            }
            return false;
        } catch (err) {
            console.error("Reveal card failed", err);
            return false;
        }
    };

    if (loading) {
        return (
            <div className="flex h-full items-center justify-center bg-[#09090b] text-white">
                <p className="animate-pulse tracking-widest text-xs font-bold text-slate-500 uppercase">Loading Profile...</p>
            </div>
        );
    }

    const upiId = user?.user?.upiId || `${merchant?.name?.toLowerCase().replace(/\s/g, '') || 'user'}@zenpay`;
    const email = user?.user?.email || merchant?.email || "user@example.com";
    const name = user?.user?.name || merchant?.name || "ZenPay User";
    const initial = name.charAt(0).toUpperCase();

    // Reconstruct data for QR (using UPI as the unique identifier)
    const qrData = JSON.stringify({
        id: user?.user?.id || merchant?.id,
        upiId: upiId,
        type: 'ZenPay_node'
    });

    return (
        <div className="min-h-[calc(100vh-8rem)] bg-[#09090b] rounded-[2rem] p-10 font-sans text-white border border-white/5 shadow-2xl overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="relative z-10 mb-12">
                <h1 className="text-3xl font-black tracking-tight uppercase">My Identity</h1>
                <p className="text-sm font-medium text-slate-400 italic mt-1">Manage your cryptographic profile.</p>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                {/* Left Column (Details) */}
                <div className="flex-1 space-y-6">
                    {/* User Header Card */}
                    <div className="flex items-center gap-6 mb-8">
                        <div className="relative size-24 bg-zinc-800 rounded-3xl flex items-center justify-center text-3xl font-black shadow-lg">
                            {initial}
                            <div className="absolute -bottom-2 -right-2 size-8 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center">
                                <Fingerprint size={14} className="text-violet-500" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black tracking-tight">{name}</h2>
                            <div className="flex items-center gap-2 text-slate-400 mt-1 mb-2">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span className="text-sm font-medium">{email}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-emerald-500 font-bold uppercase tracking-widest text-[9px]">
                                <Check size={10} strokeWidth={3} /> Verified Member
                            </div>
                        </div>
                    </div>

                    {/* Official Asset Handle Card */}
                    <div className="bg-[#121214] border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
                        <div className="absolute top-4 right-4 text-white/5 group-hover:text-white/10 transition-colors">
                            <Zap size={120} strokeWidth={1} />
                        </div>
                        <div className="relative z-10">
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-4">Official Asset Handle</p>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-black tracking-tight font-mono">{upiId.toUpperCase()}</h3>
                                <button
                                    onClick={() => handleCopy(upiId)}
                                    className="size-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors border border-white/5 group relative"
                                >
                                    {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className="text-slate-400" />}
                                    <span className="absolute -top-8 bg-black/80 px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="size-1.5 rounded-full bg-violet-500" />
                                <span className="text-[10px] text-slate-500 font-medium italic">Unique cryptographic identification string</span>
                            </div>
                        </div>
                    </div>

                    {/* Protocol Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#121214] border border-white/5 p-6 rounded-3xl flex items-center gap-4">
                            <div className="size-10 bg-white/5 rounded-2xl flex items-center justify-center">
                                <Shield size={16} className="text-slate-400" />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest">Cold Storage</h4>
                                <p className="text-[9px] text-slate-500 italic mt-0.5">Encrypted offline management.</p>
                            </div>
                        </div>
                        <div className="bg-[#121214] border border-white/5 p-6 rounded-3xl flex items-center gap-4">
                            <div className="size-10 bg-white/5 rounded-2xl flex items-center justify-center">
                                <Lock size={16} className="text-slate-400" />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest">Identity Protocol</h4>
                                <p className="text-[9px] text-slate-500 italic mt-0.5">AES-256 secure shielding.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (QR & Card) */}
                <div className="w-[360px] flex-shrink-0 space-y-8">
                    {/* QR Code Card */}
                    <div className="bg-[#121214] border border-white/5 p-12 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent pointer-events-none" />
                        <div className="bg-white p-4 rounded-3xl mb-8 relative z-10 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                            <QRCode
                                value={qrData}
                                size={200}
                                level="H"
                                bgColor="#ffffff"
                                fgColor="#000000"
                            />
                        </div>
                        <div className="text-center relative z-10">
                            <h4 className="text-[10px] font-black text-violet-500 uppercase tracking-[0.2em] mb-1">Secure Node</h4>
                            <p className="text-[10px] text-slate-500 font-medium">Identification access key</p>
                        </div>
                    </div>

                    {/* Custom Flip Card implementation */}
                    <div className="flex justify-center">
                        <FlippableCreditCard
                            cardholderName={name}
                            cardNumber={revealedCard?.cardNumber || user?.cards?.[0]?.cardNumber || ''}
                            expiryDate={`${user?.cards?.[0]?.expiryMonth || 12}/${user?.cards?.[0]?.expiryYear?.toString().padStart(2, '0') || '30'}`}
                            cvv={revealedCard?.cvv || '•••'}
                            spending={user?.user?.balance ? user.user.balance / 100 : 0}
                            requiresPassword={!!user?.cards?.[0]}
                            onPasswordVerify={verifyCardPassword}
                            className="scale-90 origin-top"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Zap icon since it was missing in imports on the right spot
const Zap = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
)
