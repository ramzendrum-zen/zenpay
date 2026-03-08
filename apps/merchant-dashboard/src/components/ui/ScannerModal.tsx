import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, ShieldCheck } from 'lucide-react';
import { Html5Qrcode } from 'html5-qrcode';
import toast from 'react-hot-toast';

interface ScannerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onResult?: (result: string) => void;
}

export const ScannerModal: React.FC<ScannerModalProps> = ({ isOpen, onClose, onResult }) => {
    const scannerRef = useRef<Html5Qrcode | null>(null);

    useEffect(() => {
        if (isOpen) {
            const timeoutId = setTimeout(() => {
                try {
                    const html5QrCode = new Html5Qrcode("reader");
                    scannerRef.current = html5QrCode;

                    html5QrCode.start(
                        { facingMode: "environment" },
                        {
                            fps: 10,
                            qrbox: { width: 250, height: 250 },
                            aspectRatio: 1.0,
                        },
                        (decodedText) => {
                            if (html5QrCode.isScanning) {
                                html5QrCode.stop().then(() => html5QrCode.clear()).catch(console.error);
                            }
                            if (onResult) {
                                onResult(decodedText);
                            } else {
                                toast.success("Scanned: " + decodedText);
                                onClose();
                            }
                        },
                        (errorMessage) => {
                            // ignore decode errors
                        }
                    ).catch(err => {
                        console.error('Camera Error:', err);
                        toast.error('Could not access camera. Please check permissions.');
                    });
                } catch (e) {
                    console.error("Scanner init error", e);
                }
            }, 300);

            return () => {
                clearTimeout(timeoutId);
                if (scannerRef.current && scannerRef.current.isScanning) {
                    scannerRef.current.stop().then(() => {
                        scannerRef.current?.clear();
                    }).catch(console.error);
                }
            };
        }
    }, [isOpen, onClose, onResult]);

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
                        <div className="p-6 pb-2 flex items-center justify-between">
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
                            <div className="relative aspect-square w-full rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center border-4 border-slate-50 shadow-inner group">
                                <div id="reader" className="w-full h-full bg-black" />

                                {/* Simulation Grid Overlay for style */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none group-active:opacity-0 transition-opacity"
                                    style={{ backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                                {/* Viewfinder Corners */}
                                <div className="absolute top-8 left-8 size-10 border-t-4 border-l-4 border-blue-500 rounded-tl-xl pointer-events-none z-20" />
                                <div className="absolute top-8 right-8 size-10 border-t-4 border-r-4 border-blue-500 rounded-tr-xl pointer-events-none z-20" />
                                <div className="absolute bottom-8 left-8 size-10 border-b-4 border-l-4 border-blue-500 rounded-bl-xl pointer-events-none z-20" />
                                <div className="absolute bottom-8 right-8 size-10 border-b-4 border-r-4 border-blue-500 rounded-br-xl pointer-events-none z-20" />

                                {/* Animated Scan Line */}
                                <motion.div
                                    animate={{ top: ['20%', '80%', '20%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 pointer-events-none"
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
