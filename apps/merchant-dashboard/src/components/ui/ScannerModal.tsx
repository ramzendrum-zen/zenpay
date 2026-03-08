import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, ShieldCheck, Zap } from 'lucide-react';

interface ScannerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ScannerModal: React.FC<ScannerModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-[420px] bg-white rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.3)] border border-white/20"
                    >
                        {/* Header */}
                        <div className="p-6 pb-0 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="size-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <Camera size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-900 leading-tight tracking-tight">Scan & Pay</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                        <ShieldCheck size={10} className="text-emerald-500" /> Secure Terminal
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="size-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Scanner View Finder */}
                        <div className="p-6">
                            <div className="relative aspect-square w-full rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center border-4 border-slate-50 shadow-inner">
                                {/* Simulation Grid */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{ backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                                <div className="z-10 flex flex-col items-center gap-4 text-center px-8">
                                    <div className="size-16 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
                                        <Zap className="text-white" size={24} fill="white" />
                                    </div>
                                    <p className="text-white font-bold text-xs uppercase tracking-[0.2em] opacity-80">Initializing Lens...</p>
                                </div>

                                {/* Viewfinder Corners */}
                                <div className="absolute top-8 left-8 size-10 border-t-4 border-l-4 border-blue-500 rounded-tl-xl" />
                                <div className="absolute top-8 right-8 size-10 border-t-4 border-r-4 border-blue-500 rounded-tr-xl" />
                                <div className="absolute bottom-8 left-8 size-10 border-b-4 border-l-4 border-blue-500 rounded-bl-xl" />
                                <div className="absolute bottom-8 right-8 size-10 border-b-4 border-r-4 border-blue-500 rounded-br-xl" />

                                {/* Animated Scan Line */}
                                <motion.div
                                    animate={{ top: ['20%', '80%', '20%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                                />
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="p-6 bg-slate-50 border-t border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="size-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                                    <ShieldCheck size={20} className="text-slate-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Biometric Encrypted</p>
                                    <p className="text-[11px] text-slate-500 font-medium">Verified by ZenWallet Security Node.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
