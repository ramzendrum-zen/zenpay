import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Plus,
    Copy,
    Eye,
    Terminal,
    Webhook,
    History,
    Check,
    X,
    Trash2,
    Code2,
    ShieldCheck,
    Loader2,
    RefreshCw
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const API_BASE = 'http://localhost:4000/v1';

export const APIIntegration: React.FC = () => {
    const { token, merchant } = useAuth();
    const [activeTab, setActiveTab] = useState<string>('keys');
    const [loading, setLoading] = useState(true);
    const [copying, setCopying] = useState<string | null>(null);

    // Key Management
    const [keys, setKeys] = useState<any[]>([]);
    const [newKeyData, setNewKeyData] = useState<{ publicKey: string, secretKey: string } | null>(null);
    const [showRegenModal, setShowRegenModal] = useState(false);
    const [keyName, setKeyName] = useState('');

    // Webhooks
    const [webhooks, setWebhooks] = useState<any[]>([]);
    const [showAddWebhook, setShowAddWebhook] = useState(false);
    const [webhookForm, setWebhookForm] = useState({ url: '', events: ['payment.captured'] });

    // Logs
    const [logs, setLogs] = useState<any[]>([]);
    const [selectedLog, setSelectedLog] = useState<any | null>(null);

    // Notifications & Modals
    const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' | 'info' } | null>(null);
    const [confirmModal, setConfirmModal] = useState<{
        isOpen: boolean,
        title: string,
        message: string,
        onConfirm: () => void,
        isDanger?: boolean
    }>({ isOpen: false, title: '', message: '', onConfirm: () => { } });

    const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 4000);
    };

    const headers = { Authorization: `Bearer ${token}` };

    useEffect(() => {
        fetchData();
    }, [activeTab]);

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
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopying(id);
        setTimeout(() => setCopying(null), 2000);
    };

    const handleRegenerate = async () => {
        if (!keyName.trim()) {
            showToast('Please provide a name for this API key.', 'error');
            return;
        }
        try {
            const res = await axios.post(`${API_BASE}/keys/generate`, {
                environment: 'live',
                name: keyName
            }, { headers });
            setNewKeyData({
                publicKey: res.data.data.publicKey,
                secretKey: res.data.data.secretKey
            });
            setShowRegenModal(false);
            setKeyName('');
            fetchData();
            showToast('New API key generated successfully.', 'success');
        } catch (error: any) {
            console.error('Key generation failed:', error.response?.data || error.message);
            showToast('Failed to generate new keys. Please try again.', 'error');
        }
    };

    const handleAddWebhook = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post(`${API_BASE}/webhooks`, webhookForm, { headers });
            setShowAddWebhook(false);
            setWebhookForm({ url: '', events: ['payment.captured'] });
            fetchData();
            showToast('Webhook endpoint added.', 'success');
        } catch (error) {
            showToast('Failed to add webhook.', 'error');
        }
    };

    const handleDeleteWebhook = async (id: string) => {
        setConfirmModal({
            isOpen: true,
            title: 'Delete Webhook?',
            message: 'This will stop all event notifications to this URL.',
            isDanger: true,
            onConfirm: async () => {
                try {
                    await axios.delete(`${API_BASE}/webhooks/${id}`, { headers });
                    fetchData();
                    showToast('Webhook deleted.', 'success');
                } catch (error) {
                    showToast('Failed to delete webhook.', 'error');
                }
                setConfirmModal(prev => ({ ...prev, isOpen: false }));
            }
        });
    };

    const handleDeleteKey = async (id: string) => {
        setConfirmModal({
            isOpen: true,
            title: 'Delete API Key?',
            message: 'This will permanently remove this API key. Any integrations using this key will stop working. This action cannot be undone.',
            isDanger: true,
            onConfirm: async () => {
                try {
                    await axios.delete(`${API_BASE}/keys/${id}`, { headers });
                    fetchData();
                    showToast('API key deleted forever.', 'success');
                } catch (error: any) {
                    showToast('Failed to delete key.', 'error');
                }
                setConfirmModal(prev => ({ ...prev, isOpen: false }));
            }
        });
    };

    const StatusBadge = ({ active }: { active: boolean }) => (
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
            {active ? 'Active' : 'Inactive'}
        </span>
    );

    return (
        <>
            <div className="space-y-8 max-w-7xl mx-auto pb-20">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Developer Hub</h1>
                        <p className="text-sm text-slate-500 mt-1">Configure your API credentials, monitor integration health, and view logs.</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setActiveTab('guide')}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-all shadow-sm"
                        >
                            <Code2 size={16} />
                            <span>Integration Guide</span>
                        </button>
                        {(activeTab === 'keys' || activeTab === 'webhooks') && (
                            <button
                                onClick={() => activeTab === 'keys' ? setShowRegenModal(true) : setShowAddWebhook(prev => !prev)}
                                className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-all shadow-lg"
                            >
                                {activeTab === 'keys' ? <RefreshCw size={16} /> : <Plus size={16} />}
                                <span>{activeTab === 'keys' ? 'Roll Keys' : (showAddWebhook ? 'Close Form' : 'Add Endpoint')}</span>
                            </button>
                        )}
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white p-1 rounded-2xl border border-slate-200 w-fit flex gap-1">
                    {[
                        { id: 'keys', label: 'API Keys', icon: Terminal },
                        { id: 'webhooks', label: 'Webhooks', icon: Webhook },
                        { id: 'logs', label: 'API Logs', icon: History },
                        { id: 'guide', label: 'Guide', icon: Code2 },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => { setActiveTab(tab.id); setShowAddWebhook(false); }}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id
                                ? 'bg-slate-900 text-white shadow-md'
                                : 'text-slate-500 hover:text-slate-900'
                                }`}
                        >
                            <tab.icon size={16} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {loading && activeTab !== 'guide' ? (
                    <div className="h-64 flex flex-col items-center justify-center text-slate-400 gap-4">
                        <Loader2 className="animate-spin" size={32} />
                        <p className="text-sm font-medium">Synchronizing developer settings...</p>
                    </div>
                ) : (
                    <>
                        {/* 1. API Keys View */}
                        {activeTab === 'keys' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {newKeyData && (
                                    <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-10">
                                            <ShieldCheck size={48} className="text-emerald-600" />
                                        </div>
                                        <h4 className="text-emerald-900 font-bold text-lg flex items-center gap-2">
                                            <Check className="text-emerald-500" size={20} />
                                            Success! Your new Secret Key is ready.
                                        </h4>
                                        <p className="text-emerald-700 text-sm mt-1 max-w-lg mb-4">
                                            Copy it now. We won't show it again. This key should be stored securely on your server.
                                        </p>
                                        <div className="bg-white p-4 rounded-xl border border-emerald-100 flex items-center justify-between">
                                            <code className="text-sm font-mono text-emerald-900 break-all">{newKeyData.secretKey}</code>
                                            <button
                                                onClick={() => handleCopy(newKeyData.secretKey, 'rolled-secret')}
                                                className="ml-4 p-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-all flex-shrink-0"
                                            >
                                                {copying === 'rolled-secret' ? <Check size={16} /> : <Copy size={16} />}
                                            </button>
                                        </div>
                                        <button onClick={() => setNewKeyData(null)} className="mt-4 text-emerald-700 text-xs font-bold uppercase tracking-widest hover:underline">Dismiss Instructions</button>
                                    </div>
                                )}

                                <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-slate-100 bg-slate-50/50">
                                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Name & Environment</th>
                                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Public Key</th>
                                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Status</th>
                                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Created</th>
                                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {keys.map((key) => (
                                                <tr key={key.id} className="hover:bg-slate-50/50 transition-all group">
                                                    <td className="px-8 py-5">
                                                        <div className="flex items-center gap-2">
                                                            <div className={`size-2 rounded-full ${key.environment === 'live' ? 'bg-indigo-500' : 'bg-amber-500'}`}></div>
                                                            <span className="font-bold text-sm text-slate-900">{key.name}</span>
                                                        </div>
                                                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 ml-4">{key.environment === 'live' ? 'Production' : 'Sandbox'}</p>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-100 px-3 py-1.5 rounded-lg w-fit">
                                                            <code className="text-[11px] font-mono text-slate-600">{key.publicKey}</code>
                                                            <button
                                                                onClick={() => handleCopy(key.publicKey, key.id)}
                                                                className="text-slate-400 hover:text-slate-900 transition-colors"
                                                            >
                                                                {copying === key.id ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-5 text-center">
                                                        <StatusBadge active={!key.revokedAt} />
                                                    </td>
                                                    <td className="px-8 py-5 text-xs text-slate-400 font-medium">
                                                        {new Date(key.createdAt).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-8 py-5 text-right">
                                                        <div className="flex justify-end gap-2">
                                                            <button
                                                                title="API secret keys are only visible once"
                                                                onClick={() => showToast('Secret keys are only visible once after generation for your security.', 'info')}
                                                                className="p-2 rounded-lg border border-transparent transition-all text-slate-400 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-200"
                                                            >
                                                                <Eye size={16} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteKey(key.id)}
                                                                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 border border-transparent hover:border-red-100 rounded-lg transition-all"
                                                            >
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            {keys.length === 0 && (
                                                <tr>
                                                    <td colSpan={5} className="py-20 text-center">
                                                        <p className="text-sm font-medium text-slate-400">No API keys yet. Click "Roll Keys" to generate your first key pair.</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* 2. Webhooks View */}
                        {activeTab === 'webhooks' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {showAddWebhook && (
                                    <div className="bg-white rounded-3xl border border-blue-200 shadow-xl shadow-blue-500/5 p-8 animate-in zoom-in-95 duration-200">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-lg font-bold">Configure New Endpoint</h3>
                                            <button onClick={() => setShowAddWebhook(false)} className="p-2 hover:bg-slate-100 rounded-full transition-all"><X size={20} /></button>
                                        </div>
                                        <form onSubmit={handleAddWebhook} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Backend Server URL</label>
                                                <input
                                                    required
                                                    type="url"
                                                    value={webhookForm.url}
                                                    onChange={e => setWebhookForm({ ...webhookForm, url: e.target.value })}
                                                    placeholder="https://api.yourbackend.com/webhooks/zenwallet"
                                                    className="w-full h-12 px-5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all"
                                                />
                                                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                                                    This must be a <span className="font-bold text-slate-500">server-side endpoint</span> on your backend (not your website URL). ZenWallet will POST event data here when payments occur.
                                                </p>
                                            </div>
                                            <div className="space-y-2 text-right">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block text-left">Selected Events</label>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {['payment.captured', 'payment.failed', 'order.paid', 'refund.processed'].map(ev => (
                                                        <button
                                                            key={ev}
                                                            type="button"
                                                            onClick={() => {
                                                                const exists = webhookForm.events.includes(ev);
                                                                setWebhookForm({
                                                                    ...webhookForm,
                                                                    events: exists ? webhookForm.events.filter(e => e !== ev) : [...webhookForm.events, ev]
                                                                });
                                                            }}
                                                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border ${webhookForm.events.includes(ev) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}`}
                                                        >
                                                            {ev}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="md:col-span-2 pt-4 flex justify-end gap-3">
                                                <button type="button" onClick={() => setShowAddWebhook(false)} className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all">Cancel</button>
                                                <button type="submit" className="px-10 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl shadow-lg transition-all hover:bg-slate-800">Save Endpoint</button>
                                            </div>
                                        </form>
                                    </div>
                                )}

                                {webhooks.length === 0 && !showAddWebhook ? (
                                    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-20 text-center">
                                        <div className="size-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-200 mx-auto mb-6 border border-slate-100">
                                            <Webhook size={40} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">Push Notifications for Your API</h3>
                                        <p className="text-slate-500 max-w-sm mx-auto mt-2 leading-relaxed">Connect your backend to receive real-time updates for payments, orders, and settlements.</p>
                                        <button
                                            onClick={() => setShowAddWebhook(true)}
                                            className="mt-10 px-8 py-3 bg-slate-900 text-white text-sm font-bold rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            Add Webhook Endpoint
                                        </button>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 gap-4">
                                        {webhooks.map((wh) => (
                                            <div key={wh.id} className="bg-white rounded-3xl border border-slate-200 p-8 flex items-center justify-between group hover:shadow-xl hover:shadow-slate-200/20 transition-all">
                                                <div className="flex items-center gap-6">
                                                    <div className="size-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100 flex-shrink-0">
                                                        <Webhook size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-3">
                                                            <h4 className="text-slate-900 font-bold">{wh.url}</h4>
                                                            <StatusBadge active={wh.status === 'active'} />
                                                        </div>
                                                        <div className="flex gap-2 mt-2">
                                                            {wh.events.map((e: string) => (
                                                                <span key={e} className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-bold uppercase rounded-md tracking-wider">{e}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-8">
                                                    <div className="text-right">
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Webhook Secret</p>
                                                        <div className="flex items-center gap-2">
                                                            <code className="text-sx font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">whsec_••••••••</code>
                                                            <button onClick={() => handleCopy(wh.secret, wh.id + '-sec')} className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors">
                                                                {copying === wh.id + '-sec' ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleDeleteWebhook(wh.id)}
                                                        className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                    >
                                                        <Trash2 size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* 3. API Logs View */}
                        {activeTab === 'logs' && (
                            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                    <h3 className="text-lg font-bold text-slate-900">Real-time Stream</h3>
                                    <div className="flex gap-2">
                                        <button onClick={fetchData} className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 transition-all">
                                            <RefreshCw size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-slate-100">
                                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">HTTP Verb</th>
                                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Route</th>
                                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Status</th>
                                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Captured Time</th>
                                                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Details</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {logs.map((log) => (
                                                <tr key={log.id} className="hover:bg-slate-50/80 transition-all group">
                                                    <td className="px-8 py-5">
                                                        <span className={`px-2 py-1 rounded-lg text-[10px] font-black tracking-tighter ${log.method === 'POST' ? 'bg-orange-100 text-orange-700' :
                                                            log.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                                                                'bg-red-100 text-red-700'
                                                            }`}>{log.method}</span>
                                                    </td>
                                                    <td className="px-8 py-5 font-mono text-xs text-slate-600">{log.endpoint}</td>
                                                    <td className="px-8 py-5 text-center">
                                                        <span className={`text-xs font-bold ${log.statusCode >= 400 ? 'text-red-500' : 'text-green-600'}`}>
                                                            {log.statusCode}
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-5 text-xs text-slate-400">{new Date(log.createdAt).toLocaleString()}</td>
                                                    <td className="px-8 py-5 text-right">
                                                        <button
                                                            onClick={() => setSelectedLog(log)}
                                                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                        >
                                                            <Plus size={16} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {logs.length === 0 && (
                                                <tr>
                                                    <td colSpan={5} className="py-20 text-center">
                                                        <p className="text-sm font-medium text-slate-400">Waiting for activity...</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* 4. Integration Guide View */}
                        {activeTab === 'guide' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Header */}
                                <div className="bg-slate-900 text-white rounded-[2rem] p-10 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/10 pointer-events-none" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">Production Ready</span>
                                        </div>
                                        <h3 className="text-3xl font-black tracking-tight">ZenWallet Integration Guide</h3>
                                        <p className="text-slate-400 mt-2 max-w-xl">Accept payments in your application using ZenWallet's secure payment infrastructure.</p>
                                        <div className="flex gap-4 mt-6">
                                            {['HMAC Signatures', 'Idempotency Keys', 'Webhooks', 'Rate Limiting'].map(f => (
                                                <span key={f} className="text-xs font-semibold bg-white/10 text-white/80 px-3 py-1 rounded-full">{f}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* AI PROMPT CARD (FOR ANOTHER AI ASSISTANT) */}
                                {(() => {
                                    const pubKey = keys.find((k: any) => !k.revokedAt)?.publicKey || 'pk_live_YOUR_PUBLIC_KEY';
                                    const prompt = `### INSTRUCTIONS FOR AI ASSISTANT:
I am the Developer of this application. I want you to integrate ZenWallet (ZenPay) as our payment gateway.

**PROJECT CONTEXT:**
- **Product Name:** ZenWallet (Secure Payments)
- **Currency:** INR (amounts handled in paise, ₹1 = 100 paise)
- **API Base URL:** http://localhost:4000/v1
- **Public Key:** ${pubKey} (Safe for frontend)
- **Secret Key:** (Ask me to provide sk_live_* from environment variables)

**TASK: IMPLEMENT END-TO-END FLOW**
1. **CREATE ORDER (Server-Side):**
   - Implement an endpoint that calls POST http://localhost:4000/v1/orders
   - Body: { amount, currency: "INR", receipt, notes }
   - Auth: Bearer [SECRET_KEY]
   - Header: 'Idempotency-Key' (Generate a unique UUID for every request)

2. **OPEN CHECKOUT (Client-Side):**
   - Inject ZenWallet checkout script (<script src="http://localhost:5174/embed.js"></script>)
   - Initialize with key: "${pubKey}"
   - Call zen.open({ order_id, amount, handler: (resp) => { ... } })

3. **VERIFY PAYMENT (Server-Side):**
   - Create a verification endpoint
   - Calculate HMAC-SHA256 signature using (order_id + "|" + payment_id) signed by SECRET KEY
   - Compare with response.signature. Only fulfill if they match.

4. **WEBHOOK LISTENER (Server-Side):**
   - Setup POST /webhooks/zenwallet
   - Verify 'X-ZenWallet-Signature' to ensure it's from ZenWallet
   - Handle 'payment.captured' and 'order.paid' events to update DB status.

**OUTPUT REQUIREMENTS:**
- Provide complete code snippets for Node.js/Python/Go (whichever I use).
- Explain the security importance of HMAC verification.
- Guide me through setting up Environment Variables.`;

                                    return (
                                        <div className="space-y-6">
                                            {/* AI Prompt Section */}
                                            <div className="bg-slate-900 rounded-[2.5rem] border border-blue-500/30 overflow-hidden shadow-2xl shadow-blue-500/10">
                                                <div className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 px-10 py-8 border-b border-white/5 flex items-center justify-between">
                                                    <div className="flex items-center gap-6">
                                                        <div className="size-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 animate-pulse">
                                                            <Plus size={32} />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-2xl font-black text-white tracking-tight">AI Agent Auto-Integration</h4>
                                                            <p className="text-blue-300/80 font-medium text-sm mt-1">Paste this into any AI (ChatGPT, Claude, etc.) to integrate instantly.</p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleCopy(prompt, 'ai-prompt')}
                                                        className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-black transition-all transform active:scale-95 ${copying === 'ai-prompt'
                                                            ? 'bg-emerald-500 text-white'
                                                            : 'bg-white text-slate-900 hover:bg-blue-50 hover:shadow-xl'
                                                            }`}
                                                    >
                                                        {copying === 'ai-prompt' ? <Check size={20} /> : <Copy size={20} />}
                                                        {copying === 'ai-prompt' ? 'PROMPT COPIED' : 'COPY AI PROMPT'}
                                                    </button>
                                                </div>
                                                <div className="p-10">
                                                    <div className="bg-slate-950/50 rounded-2xl border border-white/5 p-8 relative group">
                                                        <div className="absolute top-4 right-4 text-[9px] font-bold text-slate-600 uppercase tracking-[0.3em]">AI-READABLE PROMPT</div>
                                                        <pre className="text-sm font-mono text-blue-100/90 leading-relaxed whitespace-pre-wrap select-all">
                                                            {prompt}
                                                        </pre>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Info Cards */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-white border border-slate-200 p-6 rounded-3xl flex items-start gap-4">
                                                    <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                                                        <ShieldCheck size={20} />
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold text-slate-900">Security Built-in</h5>
                                                        <p className="text-xs text-slate-500 mt-1">This prompt includes all necessary security headers and HMAC verification patterns.</p>
                                                    </div>
                                                </div>
                                                <div className="bg-white border border-slate-200 p-6 rounded-3xl flex items-start gap-4">
                                                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                                                        <RefreshCw size={20} />
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold text-slate-900">Dynamic Credentials</h5>
                                                        <p className="text-xs text-slate-500 mt-1">Your live public key is automatically injected into the instructions above.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}

                                {/* Security Checklist */}
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                                    <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                                        <ShieldCheck size={18} className="text-amber-600" />
                                        Security Checklist — Before Going Live
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {[
                                            'Never expose secret key (sk_live_*) in frontend code',
                                            'Always verify HMAC signature on your backend',
                                            'Use HTTPS for all webhook endpoints',
                                            'Store secret key in environment variables only',
                                            'Pass Idempotency-Key for all payment mutations',
                                            'Set up webhook signature verification',
                                            'Implement exponential backoff for 429 errors',
                                            'Validate amount matches before marking order paid'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-2.5 text-sm text-amber-800">
                                                <Check size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* MODALS */}
                {showRegenModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowRegenModal(false)} />
                        <div className="bg-white rounded-[2.5rem] w-full max-w-md p-10 relative z-10 shadow-2xl animate-in zoom-in-95 duration-200">
                            <div className="size-16 bg-red-50 rounded-3xl flex items-center justify-center text-red-600 mb-6 mx-auto">
                                <RefreshCw size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-center text-slate-900">Create API Key</h3>
                            <p className="text-slate-500 text-center mt-3 text-sm leading-relaxed">
                                Generate a new pair of credentials. You can use these to authenticate server-side requests.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Key Name (Label)</label>
                                    <input
                                        type="text"
                                        value={keyName}
                                        onChange={(e) => setKeyName(e.target.value)}
                                        placeholder="e.g. Production Server, Staging Backend"
                                        onKeyDown={(e) => { if (e.key === 'Enter') handleRegenerate(); }}
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mt-8">
                                <button
                                    onClick={handleRegenerate}
                                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <Plus size={18} />
                                    <span>Generate Key Pair</span>
                                </button>
                                <button
                                    onClick={() => { setShowRegenModal(false); setKeyName(''); }}
                                    className="w-full py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* LOG DETAIL MODAL */}
                {selectedLog && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedLog(null)} />
                        <div className="bg-white rounded-[2.5rem] w-full max-w-4xl max-h-[80vh] flex flex-col relative z-10 shadow-2xl animate-in fade-in zoom-in-95">
                            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold flex items-center gap-3">
                                        <span className={`px-3 py-1 rounded-xl text-xs font-black ${selectedLog.method === 'POST' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>{selectedLog.method}</span>
                                        {selectedLog.endpoint}
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-1">Request captured on {new Date(selectedLog.createdAt).toLocaleString()}</p>
                                </div>
                                <button onClick={() => setSelectedLog(null)} className="p-2 hover:bg-slate-100 rounded-full transition-all"><X size={24} /></button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Request Payload</h5>
                                    <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                        <pre className="text-xs font-mono text-blue-400 leading-relaxed">
                                            {JSON.stringify(JSON.parse(selectedLog.requestBody || '{}'), null, 2)}
                                        </pre>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Response Body</h5>
                                    <div className={`rounded-2xl p-6 overflow-x-auto border ${selectedLog.statusCode >= 400 ? 'bg-red-50 border-red-100' : 'bg-slate-50 border-slate-100'}`}>
                                        <pre className={`text-xs font-mono leading-relaxed ${selectedLog.statusCode >= 400 ? 'text-red-700' : 'text-slate-700'}`}>
                                            {JSON.stringify(JSON.parse(selectedLog.responseBody || '{}'), null, 2)}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* CUSTOM TOAST */}
            {toast && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border ${toast.type === 'success' ? 'bg-emerald-900 border-emerald-800 text-emerald-50' :
                        toast.type === 'error' ? 'bg-red-900 border-red-800 text-red-50' :
                            'bg-slate-900 border-slate-800 text-slate-50'
                        }`}>
                        {toast.type === 'success' && <div className="p-1 bg-emerald-500/20 rounded-lg text-emerald-400"><Check size={18} /></div>}
                        {toast.type === 'error' && <div className="p-1 bg-red-500/20 rounded-lg text-red-400"><X size={18} /></div>}
                        {toast.type === 'info' && <div className="p-1 bg-blue-500/20 rounded-lg text-blue-400"><ShieldCheck size={18} /></div>}
                        <span className="text-sm font-bold tracking-tight">{toast.message}</span>
                    </div>
                </div>
            )}

            {/* CONFIRMATION MODAL */}
            {confirmModal.isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))} />
                    <div className="bg-white rounded-[2.5rem] w-full max-w-sm p-8 relative z-10 shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className={`size-14 rounded-2xl flex items-center justify-center mb-6 mx-auto ${confirmModal.isDanger ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                            {confirmModal.isDanger ? <Trash2 size={24} /> : <Check size={24} />}
                        </div>
                        <h3 className="text-xl font-bold text-center text-slate-900">{confirmModal.title}</h3>
                        <p className="text-slate-500 text-center mt-3 text-sm leading-relaxed">{confirmModal.message}</p>
                        <div className="flex flex-col gap-2 mt-8">
                            <button
                                onClick={confirmModal.onConfirm}
                                className={`w-full py-3.5 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95 ${confirmModal.isDanger ? 'bg-red-600 hover:bg-red-700 shadow-red-600/20' : 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/20'}`}
                            >
                                Confirm Action
                            </button>
                            <button
                                onClick={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
                                className="w-full py-3.5 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
