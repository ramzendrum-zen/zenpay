import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface Merchant {
    id: string;
    name: string;
    email: string;
    businessName?: string;
    publicKey: string;
}

interface AuthContextType {
    merchant: Merchant | null;
    token: string | null;
    login: (token: string, merchant: Merchant) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [merchant, setMerchant] = useState<Merchant | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('zw_token');
        const storedMerchant = localStorage.getItem('zw_merchant');
        if (storedToken && storedMerchant) {
            setToken(storedToken);
            setMerchant(JSON.parse(storedMerchant));
        }
    }, []);

    const login = (t: string, m: Merchant) => {
        localStorage.setItem('zw_token', t);
        localStorage.setItem('zw_merchant', JSON.stringify(m));
        setToken(t);
        setMerchant(m);
    };

    const logout = () => {
        localStorage.removeItem('zw_token');
        localStorage.removeItem('zw_merchant');
        setToken(null);
        setMerchant(null);
    };

    return (
        <AuthContext.Provider value={{ merchant, token, login, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};
