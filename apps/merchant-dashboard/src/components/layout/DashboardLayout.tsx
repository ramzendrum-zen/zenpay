import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import { ScannerModal } from '../ui/ScannerModal';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const NAV_ITEMS = [
    { name: 'Dashboard', icon: 'dashboard', path: '/' },
    { name: 'Transactions', icon: 'receipt_long', path: '/transactions' },
    { name: 'Settlements', icon: 'account_balance_wallet', path: '/settlements' },
    { name: 'Scan & Pay', icon: 'qr_code_scanner', path: '/personal' },
    { name: 'Refunds', icon: 'undo', path: '/refunds' },
    { name: 'Personal Wallet', icon: 'wallet', path: '/personal' },
    { name: 'API Integration', icon: 'integration_instructions', path: '/api-integration' },
    { name: 'Simulator', icon: 'terminal', path: '/simulator' },
    { name: 'Settings', icon: 'settings', path: '/settings' },
];

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { merchant, logout } = useAuth();
    const [isScannerOpen, setIsScannerOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/auth');
    };

    const isActive = (path: string) =>
        path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

    const handleScanResult = (result: string) => {
        setIsScannerOpen(false);
        // Handle UPI deep links: upi://pay?pa=...&am=...&tn=...
        if (result.startsWith('upi://') || result.includes('pa=')) {
            try {
                const url = result.startsWith('upi://') ? new URL(result.replace('upi://', 'http://')) : new URL(result);
                const upiId = url.searchParams.get('pa');
                const amount = url.searchParams.get('am');
                const note = url.searchParams.get('tn');

                if (upiId) {
                    let path = `/personal?pay=${upiId}`;
                    if (amount) path += `&am=${amount}`;
                    if (note) path += `&tn=${encodeURIComponent(note)}`;
                    navigate(path);
                    return;
                }
            } catch (e) { console.error("Parse Error", e); }
        }

        // Generic fallback
        navigate(`/personal?pay=${result}`);
    };

    return (
        <div className="flex min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
            {/* ── Slim Minimal Sidebar ── */}
            <aside className="w-[72px] bg-white border-r border-slate-200/60 flex flex-col shrink-0 fixed inset-y-0 z-50">
                <div className="flex items-center justify-center h-16">
                    <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/10">
                        <span className="material-symbols-outlined text-white text-lg font-bold">payments</span>
                    </div>
                </div>

                <nav className="flex-1 flex flex-col items-center py-4 gap-2 overflow-y-auto no-scrollbar">
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.path}
                            onClick={() => {
                                if (item.name === 'Scan & Pay') {
                                    setIsScannerOpen(true);
                                } else {
                                    navigate(item.path);
                                }
                            }}
                            className="relative group flex items-center justify-center p-2.5 rounded-xl transition-all duration-300"
                            title={item.name}
                        >
                            {isActive(item.path) && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-blue-50/80 rounded-xl"
                                    transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
                                />
                            )}
                            <span className={`material-symbols-outlined text-[20px] relative z-10 transition-colors duration-200 ${isActive(item.path) ? 'text-blue-600' : 'text-slate-300 group-hover:text-slate-500'}`}>
                                {item.icon}
                            </span>
                        </button>
                    ))}
                </nav>

                <div className="flex flex-col items-center py-4 gap-4 border-t border-slate-50">
                    <button onClick={handleLogout} className="text-slate-300 hover:text-red-500 transition-colors" title="Logout">
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                    </button>
                </div>
            </aside>

            {/* ── Main Content Area ── */}
            <main className="flex-1 flex flex-col min-h-screen ml-[72px]">
                {/* ── Fixed Header Component (Non-overlapping) ── */}
                <header className="sticky top-0 z-40 bg-[#F8FAFC]/80 backdrop-blur-md px-10 h-16 flex items-center justify-between">
                    <div className="flex-1" />

                    {/* Utilities Bar */}
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                            <input
                                className="w-36 pl-8 pr-3 py-1.5 bg-white border border-slate-200/60 rounded-lg text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500/5 focus:border-blue-500/20 placeholder:text-slate-400 transition-all font-bold uppercase tracking-wider"
                                placeholder="Search..."
                                type="text"
                            />
                        </div>
                        <button className="p-1.5 text-slate-400 hover:text-slate-900 bg-white border border-slate-200/60 rounded-lg shadow-sm">
                            <span className="material-symbols-outlined text-lg">notifications</span>
                        </button>
                        <div className="size-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                            {merchant?.businessName?.charAt(0)?.toUpperCase() || 'M'}
                        </div>
                    </div>
                </header>

                {/* Page View */}
                <div className="flex-1 px-10 pb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full relative"
                    >
                        {children}
                    </motion.div>
                </div>
            </main>

            {/* Global Scanner Modal */}
            <ScannerModal
                isOpen={isScannerOpen}
                onClose={() => setIsScannerOpen(false)}
                onResult={handleScanResult}
            />
        </div>
    );
};
