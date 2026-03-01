import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    LayoutDashboard,
    Receipt,
    Undo2,
    Users,
    Terminal,
    Settings,
    HelpCircle,
    Search,
    Bell,
    Wallet,
    ArrowUpRight,
    Zap,
    LogOut,
    Fingerprint
} from 'lucide-react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { merchant, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/auth');
    };

    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { name: 'Transactions', icon: Receipt, path: '/transactions' },
        { name: 'Settlements', icon: ArrowUpRight, path: '/settlements' },
        { name: 'Refunds', icon: Undo2, path: '/refunds' },
        { name: 'Subscribers', icon: Users, path: '/subscribers' },
    ];

    const personalItems = [
        { name: 'Personal Wallet', icon: Wallet, path: '/personal' },
        { name: 'My Identity', icon: Fingerprint, path: '/profile' }
    ];

    const systemItems = [
        { name: 'API Integration', icon: Terminal, path: '/api-integration' },
        { name: 'Simulator', icon: Zap, path: '/simulator' },
        { name: 'Settings', icon: Settings, path: '/settings' },
        { name: 'Documentation', icon: HelpCircle, path: '/docs' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            {/* Sidebar */}
            <aside className="w-[240px] flex-shrink-0 bg-white border-r border-slate-200 flex flex-col fixed inset-y-0 z-50">
                <div className="h-16 px-6 flex items-center gap-2.5 border-b border-slate-100">
                    <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                        <Wallet size={18} strokeWidth={2.5} />
                    </div>
                    <span className="font-semibold text-slate-900 text-lg tracking-tight">ZenWallet</span>
                </div>

                <div className="flex-1 overflow-y-auto py-6">
                    <div className="px-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.path)
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                <item.icon size={18} className={isActive(item.path) ? 'text-blue-700' : 'text-slate-400'} />
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 px-6">
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">My Finances</h3>
                    </div>

                    <div className="px-3 space-y-1">
                        {personalItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.path)
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                <item.icon size={18} className={isActive(item.path) ? 'text-blue-700' : 'text-slate-400'} />
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 px-6">
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Systems</h3>
                    </div>

                    <div className="px-3 space-y-1">
                        {systemItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.path)
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                <item.icon size={18} className={isActive(item.path) ? 'text-blue-700' : 'text-slate-400'} />
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="p-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 p-2 rounded-lg">
                        <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                            {merchant?.name?.charAt(0)?.toUpperCase() || 'M'}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-slate-900 truncate">{merchant?.name || 'Merchant'}</p>
                            <p className="text-[10px] text-slate-500 truncate">{merchant?.email || ''}</p>
                        </div>
                        <button onClick={handleLogout} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Log out">
                            <LogOut size={15} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col ml-[240px]">
                {/* Header */}
                <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-40 flex items-center justify-between px-8">
                    <div className="flex-1 max-w-xl">
                        <div className="relative group">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search transactions, customers, or help..."
                                className="w-full h-10 bg-slate-100/50 border-transparent focus:bg-white focus:border-slate-200 focus:ring-4 focus:ring-blue-500/5 rounded-lg pl-10 pr-4 text-sm outline-none transition-all placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 size-2 bg-blue-600 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="h-6 w-px bg-slate-200 mx-2"></div>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all shadow-sm shadow-blue-500/20 active:scale-95">
                            <Wallet size={16} />
                            <span>Connect</span>
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden">
                    <div className="max-w-7xl mx-auto px-8 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};
