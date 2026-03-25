import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { API_BASE } from '../lib/config';
import {
    Terminal,
    Settings,
    Play,
    CheckCircle2,
    AlertCircle,
    Activity,
    Code2,
    ArrowRight,
    Loader2,
    Eye,
    EyeOff
} from 'lucide-react';

interface LogEntry {
    id: string;
    timestamp: string;
    message: string;
    type: 'info' | 'success' | 'error' | 'warning';
    data?: any;
}

export const Simulator: React.FC = () => {
    const { merchant, token } = useAuth();
    const [step, setStep] = useState<'IDLE' | 'PROCESSING' | 'SUCCESS' | 'FAILURE'>('IDLE');
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [showKey, setShowKey] = useState(false);
    const [config, setConfig] = useState({
        amount: '1050',
        currency: 'USD',
        orderId: 'sim_' + Math.random().toString(36).substring(7),
        customerEmail: merchant?.email || 'customer@example.com'
    });

    const addLog = (message: string, type: LogEntry['type'] = 'info', data?: any) => {
        const newLog: LogEntry = {
            id: Math.random().toString(36).substring(7),
            timestamp: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            message,
            type,
            data
        };
        setLogs(prev => [newLog, ...prev].slice(0, 30));
    };

    const handleMockCheckout = async () => {
        setStep('PROCESSING');
        addLog('Handshake initiated...', 'info');

        try {
            // 1. Create a real test order record so the Checkout SDK can fetch it
            addLog('Synchronizing order with node...', 'info');
            const { data: orderRes } = await axios.post(`${API_BASE}/orders`, {
                amount: Math.round(parseFloat(config.amount) * 100),
                currency: 'INR',
                receipt: 'sim_' + Date.now()
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Idempotency-Key': 'sim_' + Math.random().toString(36).substring(7)
                }
            });

            const realOrderId = orderRes.data.id;
            addLog(`Order ID Generated: ${realOrderId}`, 'success');

            if (!(window as any).ZenPay) {
                const script = document.createElement('script');
                const isLocal = window.location.hostname === 'localhost';
                
                // Primary source: Load directly from our API Gateway
                const gatewayUrl = `${API_BASE.replace('/v1', '')}/ZenPay-sdk.js`;
                script.src = isLocal ? gatewayUrl : 'https://zenpay-jshp.onrender.com/ZenPay-sdk.js';
                
                script.onload = () => {
                    addLog('SDK ready.', 'success');
                    setTimeout(() => launchCheckout(realOrderId), 400);
                };
                script.onerror = () => {
                    setStep('FAILURE');
                    addLog(`SDK Load Error. (Check ${gatewayUrl})`, 'error');
                };
                document.head.appendChild(script);
            } else {
                launchCheckout(realOrderId);
            }
        } catch (err: any) {
            setStep('FAILURE');
            addLog('Handshake failed: Order creation error.', 'error', err.response?.data || err.message);
        }
    };

    const launchCheckout = (realOrderId: string) => {
        if ((window as any).ZenPay) {
            const isLocal = window.location.hostname === 'localhost';
            (window as any).ZenPay.open({
                key: merchant?.publicKey || 'pk_live_demo123',
                amount: Math.round(parseFloat(config.amount) * 100),
                order_id: realOrderId,
                // In local dev, point the iframe to the port 5174 server
                checkoutUrl: isLocal ? 'http://localhost:5174/' : undefined,
                onSuccess: (response: any) => {
                    addLog('Authorized.', 'success', response);
                    setStep('SUCCESS');
                },
                onFailure: (error: any) => {
                    addLog('Rejected.', 'error', error);
                    setStep('FAILURE');
                }
            });
        }
    };

    return (
        <div className="w-full space-y-8 pb-20">
            {/* Top Left Header */}
            <div className="flex flex-col gap-0.5">
                <h1 className="text-lg font-bold text-slate-900 tracking-tight">Integration Sandbox</h1>
                <p className="text-[11px] text-slate-400 font-medium">Test implementation in zero-risk environment.</p>
                <div className="flex items-center gap-1.5 mt-2">
                    <div className="size-1 bg-amber-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Sim Mode</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* ── Left Pane: Configuration (4 Cols) ── */}
                <div className="lg:col-span-4 space-y-4">
                    <div className="bg-white border border-slate-200/60 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <Settings size={14} className="text-slate-400" />
                            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Setup</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[8px] font-bold text-slate-400 uppercase tracking-widest ml-1">PubKey</label>
                                <div className="relative">
                                    <input readOnly type={showKey ? 'text' : 'password'} value={merchant?.publicKey || 'pk_live_demo_123'} className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-[10px] font-mono font-bold text-slate-500 outline-none" />
                                    <button onClick={() => setShowKey(!showKey)} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-300">{showKey ? <EyeOff size={12} /> : <Eye size={12} />}</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="space-y-1">
                                    <label className="text-[8px] font-bold text-slate-400 uppercase tracking-widest ml-1">Sum</label>
                                    <input type="number" value={config.amount} onChange={e => setConfig({ ...config, amount: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 outline-none" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[8px] font-bold text-slate-400 uppercase tracking-widest ml-1">Unit</label>
                                    <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-xs font-bold text-slate-400">USD</div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    onClick={handleMockCheckout}
                                    disabled={step === 'PROCESSING'}
                                    className="w-full h-11 bg-slate-900 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-sm active:scale-95 disabled:bg-slate-100 disabled:text-slate-300 flex items-center justify-center gap-2"
                                >
                                    {step === 'PROCESSING' ? <Loader2 className="animate-spin" size={12} /> : <Play size={12} />}
                                    Launch
                                </button>
                            </div>
                        </div>
                    </div>

                    <AnimatePresence>
                        {(step === 'SUCCESS' || step === 'FAILURE') && (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`p-4 rounded-xl border flex items-center gap-3 ${step === 'SUCCESS' ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
                                <div className={`size-8 rounded-lg flex items-center justify-center text-white ${step === 'SUCCESS' ? 'bg-emerald-600' : 'bg-red-600'}`}>
                                    {step === 'SUCCESS' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                                </div>
                                <div>
                                    <h4 className={`text-[11px] font-bold ${step === 'SUCCESS' ? 'text-emerald-900' : 'text-red-900'}`}>{step === 'SUCCESS' ? 'Complete' : 'Failed'}</h4>
                                    <button onClick={() => { setStep('IDLE'); setLogs([]); }} className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mt-0.5 flex items-center gap-1">Reset <ArrowRight size={8} /></button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* ── Right Pane: Live Logs (8 Cols) ── */}
                <div className="lg:col-span-8">
                    <div className="bg-white rounded-2xl shadow-sm flex flex-col h-[400px] md:h-[580px] border border-slate-200/60 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><Terminal size={12} /> Protocol Stream</h3>
                            <Activity size={10} className="text-slate-200 animate-pulse" />
                        </div>

                        <div className="flex-1 overflow-y-auto p-5 font-mono no-scrollbar">
                            {logs.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center opacity-10">
                                    <Code2 size={32} className="text-slate-400" />
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {logs.map((log) => (
                                        <div key={log.id} className="flex items-start gap-4">
                                            <span className="text-slate-300 text-[9px] font-bold shrink-0 mt-1">{log.timestamp}</span>
                                            <div className="flex-1 space-y-2">
                                                <p className={`text-[11px] font-bold leading-tight ${log.type === 'success' ? 'text-emerald-600' : log.type === 'error' ? 'text-red-600' : 'text-slate-900'}`}>{log.message}</p>
                                                {log.data && (
                                                    <pre className="p-3 bg-slate-50 rounded-lg text-slate-400 text-[9px] overflow-x-auto border border-slate-100">{JSON.stringify(log.data, null, 2)}</pre>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
