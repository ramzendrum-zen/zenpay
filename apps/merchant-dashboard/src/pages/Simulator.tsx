import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import {
    Zap,
    ShoppingBag,
    Sparkles,
    ShieldCheck,
    ArrowRight,
    CheckCircle,
    AlertCircle,
    Loader2
} from 'lucide-react';

export const Simulator: React.FC = () => {
    const { merchant } = useAuth();
    const [step, setStep] = useState<'IDLE' | 'PROCESSING' | 'SUCCESS' | 'FAILURE'>('IDLE');

    const handleMockCheckout = () => {
        setStep('PROCESSING');

        // Dynamically load the SDK if not present
        if (!(window as any).ZenWallet) {
            const script = document.createElement('script');
            script.src = 'http://localhost:5174/src/main.tsx';
            script.type = 'module';
            script.onload = () => {
                // Wait a bit for the module to execute and expose ZenWallet
                setTimeout(() => {
                    launchCheckout();
                }, 500);
            };
            script.onerror = () => {
                setStep('FAILURE');
                console.error('Failed to load ZenWallet SDK from localhost:5174');
            };
            document.head.appendChild(script);
        } else {
            launchCheckout();
        }
    };

    const launchCheckout = () => {
        if ((window as any).ZenWallet) {
            (window as any).ZenWallet.open({
                key: merchant?.publicKey || 'pk_live_demo_123',
                amount: 1050000, // ₹ 10,500
                order_id: 'sim_' + Math.random().toString(36).substring(7),
                onSuccess: (response: any) => {
                    console.log('Simulator Success:', response);
                    setStep('SUCCESS');
                },
                onFailure: (error: any) => {
                    console.error('Simulator Failure:', error);
                    setStep('FAILURE');
                }
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Simulator Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Checkout Simulator</h1>
                    <p className="text-sm text-slate-500 mt-1">Test your integration by triggering a mock payment flow.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-xs font-bold uppercase tracking-widest">
                    <Sparkles size={14} />
                    Sandbox Mode
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Simulator UI (Left) */}
                <div className="lg:col-span-7">
                    <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/20">
                        <div className="p-10 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="size-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                                    <ShoppingBag size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Premium Pro Store</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Demo Merchant Environment</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Order Amount</p>
                                <p className="text-xl font-black text-slate-900">₹ 10,500.00</p>
                            </div>
                        </div>

                        <div className="p-10 space-y-8">
                            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900">Enterprise Pro Bundle</p>
                                        <p className="text-[10px] text-slate-400 font-medium">1 Year Subscription • Priority Support</p>
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-slate-900">x1</span>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between text-sm font-medium text-slate-500">
                                    <span>Subtotal</span>
                                    <span>₹ 10,500.00</span>
                                </div>
                                <div className="flex justify-between text-sm font-medium text-slate-500">
                                    <span>Processing Fee (0%)</span>
                                    <span className="text-emerald-600">FREE</span>
                                </div>
                                <div className="h-px bg-slate-100" />
                                <div className="flex justify-between text-lg font-black text-slate-900">
                                    <span>Total Payable</span>
                                    <span>₹ 10,500.00</span>
                                </div>
                            </div>

                            {step === 'SUCCESS' ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="bg-emerald-50 border-2 border-emerald-100 p-8 rounded-[2rem] text-center"
                                >
                                    <div className="size-16 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-xl shadow-emerald-500/30">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-emerald-900">Transaction Successful!</h4>
                                    <p className="text-emerald-700 text-sm mt-1 mb-6">Your mock payment was processed securely via ZenWallet.</p>
                                    <button
                                        onClick={() => setStep('IDLE')}
                                        className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all text-sm"
                                    >
                                        Try Another Flow
                                    </button>
                                </motion.div>
                            ) : (
                                <button
                                    onClick={handleMockCheckout}
                                    disabled={step === 'PROCESSING'}
                                    className="w-full h-16 bg-slate-900 text-white rounded-[1.5rem] font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3 disabled:bg-slate-700"
                                >
                                    {step === 'PROCESSING' ? (
                                        <>
                                            <Loader2 className="animate-spin" size={24} />
                                            Launching ZenWallet...
                                        </>
                                    ) : (
                                        <>
                                            Pay ₹ 10,500.00
                                            <ArrowRight size={20} />
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Instructions (Right) */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                            <Zap size={120} />
                        </div>
                        <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Sparkles className="text-amber-400" size={20} />
                            Understanding the Flow
                        </h4>
                        <div className="space-y-6 relative z-10">
                            <div className="flex gap-4">
                                <span className="size-6 rounded-full bg-blue-500 text-[10px] font-bold flex items-center justify-center flex-shrink-0">1</span>
                                <p className="text-xs text-slate-300 leading-relaxed">The simulator uses your <strong>Test Public Key</strong> to initialize the checkout session.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="size-6 rounded-full bg-blue-500 text-[10px] font-bold flex items-center justify-center flex-shrink-0">2</span>
                                <p className="text-xs text-slate-300 leading-relaxed">It generates a random <code>order_id</code> and attempts to mount the <strong>ZenWallet SDK</strong>.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="size-6 rounded-full bg-blue-500 text-[10px] font-bold flex items-center justify-center flex-shrink-0">3</span>
                                <p className="text-xs text-slate-300 leading-relaxed">On success, it verifies the transaction response and displays this confirmation view.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8">
                        <h4 className="text-sm font-bold text-slate-900 mb-4">Integration Checklist</h4>
                        <div className="space-y-4">
                            {[
                                { label: 'Public key correctly loaded', done: true },
                                { label: 'SDK script mounted on host', done: true },
                                { label: 'Webhook endpoints active', done: false },
                                { label: 'HMAC validation script ready', done: true },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-slate-500">{item.label}</span>
                                    {item.done ? <CheckCircle className="text-green-500" size={14} /> : <AlertCircle className="text-slate-300" size={14} />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
