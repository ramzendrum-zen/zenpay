import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2, Key, Globe, Activity, Terminal, Copy, Check, Trash2, Plus, ShieldCheck, ExternalLink, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const API_BASE = 'http://localhost:4000/v1';

// ── Shared Minimal Components ───────────────────────────────────────────────
const Badge = ({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'success' | 'warning' | 'error' | 'outline' }) => {
    const variants = {
        default: 'bg-slate-100 text-slate-600',
        success: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
        warning: 'bg-amber-50 text-amber-600 border border-amber-100',
        error: 'bg-red-50 text-red-600 border border-red-100',
        outline: 'border border-slate-200 text-slate-500'
    };
    return (
        <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider ${variants[variant]}`}>
            {children}
        </span>
    );
};

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-white border border-slate-200/60 rounded-xl shadow-sm ${className}`}>
        {children}
    </div>
);

export const APIIntegration: React.FC = () => {
    const { token } = useAuth();
    const [activeTab, setActiveTab] = useState<string>('keys');
    const [loading, setLoading] = useState(true);
    const [copying, setCopying] = useState<string | null>(null);

    // Key Management
    const [keys, setKeys] = useState<any[]>([]);
    const [newKeyData, setNewKeyData] = useState<{ publicKey: string; secretKey: string } | null>(null);
    const [showRegenModal, setShowRegenModal] = useState(false);
    const [keyName, setKeyName] = useState('');
    const [generating, setGenerating] = useState(false);

    // Webhooks
    const [webhooks, setWebhooks] = useState<any[]>([]);
    const [showAddWebhook, setShowAddWebhook] = useState(false);
    const [webhookForm, setWebhookForm] = useState({ url: '', events: ['payment.captured'] });

    // Logs
    const [logs, setLogs] = useState<any[]>([]);
    const [selectedLog, setSelectedLog] = useState<any | null>(null);

    const headers = { Authorization: `Bearer ${token}` };

    useEffect(() => { fetchData(); }, [activeTab]);

    const fetchData = async () => {
        setLoading(true);
        try {
            if (activeTab === 'keys') {
                const res = await axios.get(`${API_BASE}/keys`, { headers });
                setKeys(res.data.data);
            } else if (activeTab === 'webhooks') {
                const res = await axios.get(`${API_BASE}/webhooks`, { headers });
                setWebhooks(res.data.data);
            } else if (activeTab === 'logs') {
                const res = await axios.get(`${API_BASE}/api-logs`, { headers });
                setLogs(res.data.data);
            }
        } catch (error) { } finally { setLoading(false); }
    };

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopying(id);
        toast.success('Copied');
        setTimeout(() => setCopying(null), 2000);
    };

    const handleRegenerate = async () => {
        if (!keyName.trim()) { toast.error('Please enter a key name'); return; }
        if (!token) { toast.error('Not authenticated. Please refresh.'); return; }
        setGenerating(true);
        try {
            const res = await axios.post(
                `${API_BASE}/keys/generate`,
                { environment: 'live', name: keyName },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNewKeyData({ publicKey: res.data.data.publicKey, secretKey: res.data.data.secretKey });
            toast.success('API key generated! Copy your secret key now—it won\'t be shown again.');
            setShowRegenModal(false);
            setKeyName('');
            // Refresh list after revealing the new key banner
            fetchData();
        } catch (err: any) {
            const msg = err.response?.data?.error || 'Failed to generate key. Is the backend running?';
            toast.error(msg);
        } finally {
            setGenerating(false);
        }
    };

    const handleAddWebhook = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post(`${API_BASE}/webhooks`, webhookForm, { headers });
            setShowAddWebhook(false);
            setWebhookForm({ url: '', events: ['payment.captured'] });
            fetchData();
            toast.success('Webhook registered');
        } catch { }
    };

    const handleDeleteKey = async (id: string) => {
        if (!confirm('Revoke this key?')) return;
        try {
            await axios.delete(`${API_BASE}/keys/${id}`, { headers });
            fetchData();
            toast.success('Revoked');
        } catch { }
    };

    const handleDeleteWebhook = async (id: string) => {
        if (!confirm('Remove this endpoint?')) return;
        try {
            await axios.delete(`${API_BASE}/webhooks/${id}`, { headers });
            fetchData();
            toast.success('Removed');
        } catch { }
    };

    const pubKey = keys.find((k: any) => !k.revokedAt)?.publicKey || 'pk_live_demo_123';
    const aiPrompt = `Implement ZenWallet integration using:
- Public Key: ${pubKey}
- API Endpoints: http://localhost:4000/v1
- Security: HMAC-SHA256 signature verification`;

    return (
        <div className="w-full space-y-8 pb-20">
            {/* Top Left Header */}
            <div className="flex flex-col gap-0.5">
                <h1 className="text-lg font-bold text-slate-900 tracking-tight">API & Infrastructure</h1>
                <p className="text-[11px] text-slate-400 font-medium">Configure your connection and webhooks.</p>
                <div className="flex items-center gap-1.5 mt-2">
                    <div className="size-1 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Operational</span>
                </div>
            </div>

            {/* Segmented Control */}
            <div className="inline-flex p-1 bg-slate-100 rounded-xl">
                {[
                    { id: 'keys', label: 'API Keys', icon: <Key size={14} /> },
                    { id: 'webhooks', label: 'Webhooks', icon: <Globe size={14} /> },
                    { id: 'logs', label: 'Logs', icon: <Activity size={14} /> },
                    { id: 'guide', label: 'Guide', icon: <Terminal size={14} /> },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === tab.id
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.15 }}>

                    {loading && activeTab !== 'guide' ? (
                        <div className="h-48 flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" size={20} /></div>
                    ) : (
                        <div className="space-y-6">

                            {activeTab === 'keys' && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-xs font-bold text-slate-700">Access Keys</h3>
                                            <Badge variant="outline">Live</Badge>
                                        </div>
                                        <button onClick={() => setShowRegenModal(true)} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-600 text-white rounded-lg text-[10px] font-bold hover:bg-blue-700 transition-all shadow-sm">
                                            <Plus size={12} />
                                            Generate
                                        </button>
                                    </div>

                                    {newKeyData && (
                                        <Card className="p-3 border-blue-100 bg-blue-50/20">
                                            <div className="flex items-start gap-3">
                                                <div className="p-1.5 bg-blue-100 rounded-lg text-blue-600 animate-pulse"><ShieldCheck size={14} /></div>
                                                <div className="flex-1 space-y-1">
                                                    <p className="text-[10px] font-bold text-blue-900">Copy Secret Key</p>
                                                    <div className="flex items-center gap-2 mt-1 bg-white border border-blue-200 rounded-lg px-2 py-1.5">
                                                        <code className="text-[10px] font-mono font-bold text-slate-800 break-all flex-1">{newKeyData.secretKey}</code>
                                                        <button onClick={() => handleCopy(newKeyData.secretKey, 'sk')} className="p-1 hover:bg-slate-50 rounded text-slate-400 hover:text-blue-600">
                                                            {copying === 'sk' ? <Check size={12} /> : <Copy size={12} />}
                                                        </button>
                                                    </div>
                                                </div>
                                                <button onClick={() => setNewKeyData(null)} className="text-blue-300 hover:text-blue-500 transition-colors"><X size={14} /></button>
                                            </div>
                                        </Card>
                                    )}

                                    <Card className="overflow-hidden">
                                        <table className="w-full text-left font-sans">
                                            <thead>
                                                <tr className="border-b border-slate-100 bg-slate-50/50">
                                                    <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Name</th>
                                                    <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Public Key</th>
                                                    <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100/60 font-medium">
                                                {keys.length > 0 ? keys.map((k) => (
                                                    <tr key={k.id} className="group hover:bg-slate-50/30 transition-all">
                                                        <td className="px-4 py-3 text-[11px] font-bold text-slate-700">{k.name}</td>
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center gap-2">
                                                                <code className="text-[10px] font-mono text-slate-400">pk_live_{k.publicKey?.slice(-8)}</code>
                                                                <button onClick={() => handleCopy(k.publicKey, k.id)} className="p-1 text-slate-200 hover:text-blue-600 transition-all">
                                                                    {copying === k.id ? <Check size={10} /> : <Copy size={10} />}
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 text-right">
                                                            <button onClick={() => handleDeleteKey(k.id)} className="p-1 text-slate-200 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100">
                                                                <Trash2 size={12} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )) : (
                                                    <tr><td colSpan={3} className="px-4 py-8 text-center text-[10px] font-medium text-slate-400">No active keys</td></tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </Card>
                                </div>
                            )}

                            {activeTab === 'webhooks' && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xs font-bold text-slate-700">Endpoints</h3>
                                        <button onClick={() => setShowAddWebhook(true)} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-600 text-white rounded-lg text-[10px] font-bold hover:bg-blue-700 transition-all shadow-sm">
                                            <Plus size={12} />
                                            Register
                                        </button>
                                    </div>

                                    <div className="grid gap-2">
                                        {webhooks.length > 0 ? webhooks.map((wh) => (
                                            <Card key={wh.id} className="p-3 flex items-center justify-between group hover:border-blue-100 transition-all">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                                                        <Globe size={14} />
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[11px] font-bold text-slate-800">{wh.url}</span>
                                                            <Badge variant="success">Active</Badge>
                                                        </div>
                                                        <div className="flex gap-1">
                                                            {wh.events.map((e: string) => (
                                                                <span key={e} className="text-[8px] font-bold text-slate-400 bg-slate-100 px-1 py-0.5 rounded uppercase tracking-tighter">{e}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <button onClick={() => handleDeleteWebhook(wh.id)} className="p-2 text-slate-200 hover:text-red-500 transition-all"><Trash2 size={14} /></button>
                                            </Card>
                                        )) : (
                                            <Card className="py-10 text-center border-dashed text-[10px] font-medium text-slate-400 uppercase tracking-widest">No endpoints registered</Card>
                                        )}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'logs' && (
                                <Card className="overflow-hidden">
                                    <table className="w-full text-left font-sans">
                                        <thead>
                                            <tr className="border-b border-slate-100 bg-slate-50/50">
                                                <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Method</th>
                                                <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Route</th>
                                                <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">Status</th>
                                                <th className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100/60 text-[11px] font-medium">
                                            {logs.map((log) => (
                                                <tr key={log.id} onClick={() => setSelectedLog(log)} className="group hover:bg-slate-50/40 transition-colors cursor-pointer">
                                                    <td className="px-4 py-3"><span className={`px-1 py-0.5 rounded text-[8px] font-bold border ${log.method === 'POST' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>{log.method}</span></td>
                                                    <td className="px-4 py-3 font-mono text-slate-500">{log.endpoint}</td>
                                                    <td className="px-4 py-3 text-center"><Badge variant={log.statusCode >= 400 ? 'error' : 'success'}>{log.statusCode}</Badge></td>
                                                    <td className="px-4 py-3 text-right text-slate-400 tabular-nums">{new Date(log.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </Card>
                            )}

                            {activeTab === 'guide' && (
                                <div className="space-y-6">
                                    <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-sm">
                                        <h2 className="text-base font-bold tracking-tight mb-1">SDK Setup</h2>
                                        <p className="text-slate-400 text-[11px] font-medium max-w-sm">Native orchestration for payment gateways.</p>
                                        <div className="mt-4 flex gap-2">
                                            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-900 font-bold text-[9px] uppercase tracking-widest rounded-lg transition-all hover:bg-slate-50">Docs <ExternalLink size={10} /></button>
                                        </div>
                                    </div>

                                    <Card className="p-4">
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Gateway Config</p>
                                        <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 relative">
                                            <div className="text-slate-600 font-mono text-[10px] leading-relaxed select-all">{aiPrompt}</div>
                                            <button onClick={() => handleCopy(aiPrompt, 'ai')} className="absolute top-4 right-4 text-slate-200 hover:text-blue-600 transition-all">
                                                {copying === 'ai' ? <Check size={12} /> : <Copy size={12} />}
                                            </button>
                                        </div>
                                    </Card>
                                </div>
                            )}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Modals - Minimal & Small */}
            <AnimatePresence>
                {showRegenModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]" onClick={() => setShowRegenModal(false)} />
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-[280px] rounded-2xl p-6 shadow-xl border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-900 mb-4">New API Key</h3>
                            <div className="space-y-4">
                                <input autoFocus type="text" value={keyName} onChange={e => setKeyName(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleRegenerate()} placeholder="e.g. Production Key" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-blue-500/30" />
                                <div className="flex gap-2">
                                    <button onClick={() => setShowRegenModal(false)} disabled={generating} className="flex-1 py-2 text-slate-400 font-bold text-[10px] uppercase hover:text-slate-600 transition-all">Cancel</button>
                                    <button onClick={handleRegenerate} disabled={generating} className="flex-1 py-2.5 bg-blue-600 text-white font-bold text-[10px] uppercase rounded-xl shadow-md active:scale-95 disabled:opacity-60 flex items-center justify-center gap-1.5">
                                        {generating && <Loader2 size={11} className="animate-spin" />}
                                        {generating ? 'Generating…' : 'Generate'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}

                {showAddWebhook && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]" onClick={() => setShowAddWebhook(false)} />
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-[320px] rounded-2xl p-6 shadow-xl border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-900 mb-4">Register Webhook</h3>
                            <form onSubmit={handleAddWebhook} className="space-y-4">
                                <input required type="url" value={webhookForm.url} onChange={e => setWebhookForm({ ...webhookForm, url: e.target.value })} placeholder="HTTPS Endpoint" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-blue-500/30" />
                                <div className="flex flex-wrap gap-1.5">
                                    {['payment.captured', 'payment.failed'].map(ev => (
                                        <button key={ev} type="button" onClick={() => setWebhookForm(p => ({ ...p, events: p.events.includes(ev) ? p.events.filter(x => x !== ev) : [...p.events, ev] }))} className={`px-2 py-1.5 rounded-lg text-[8px] font-bold uppercase transition-all border ${webhookForm.events.includes(ev) ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>{ev}</button>
                                    ))}
                                </div>
                                <div className="flex gap-2 pt-2">
                                    <button type="button" onClick={() => setShowAddWebhook(false)} className="flex-1 py-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">Cancel</button>
                                    <button type="submit" className="flex-1 py-2.5 bg-blue-600 text-white font-bold text-[10px] uppercase rounded-xl">Register</button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}

                {selectedLog && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]" onClick={() => setSelectedLog(null)} />
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border border-slate-100 flex flex-col max-h-[85vh]">
                            <div className="flex justify-between items-center mb-6">
                                <Badge variant="success">{selectedLog.method}</Badge>
                                <button onClick={() => setSelectedLog(null)} className="p-1 hover:bg-slate-100 rounded-full transition-all text-slate-400"><X size={16} /></button>
                            </div>
                            <div className="flex-1 overflow-y-auto font-mono text-[9px] space-y-6 hide-scrollbar">
                                <div className="space-y-1.5">
                                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest px-1">Request</p>
                                    <div className="p-3 bg-slate-900 text-blue-400 rounded-xl overflow-x-auto"><pre>{JSON.stringify(JSON.parse(selectedLog.requestBody || '{}'), null, 2)}</pre></div>
                                </div>
                                <div className="space-y-1.5">
                                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest px-1">Response</p>
                                    <div className="p-3 bg-slate-50 border border-slate-100 text-slate-600 rounded-xl overflow-x-auto"><pre>{JSON.stringify(JSON.parse(selectedLog.responseBody || '{}'), null, 2)}</pre></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
