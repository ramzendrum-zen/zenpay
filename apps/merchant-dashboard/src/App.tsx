import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { APIIntegration } from './pages/APIIntegration';
import { Transactions } from './pages/Transactions';
import { Settings } from './pages/Settings';
import { PersonalWallet } from './pages/PersonalWallet';
import { Simulator } from './pages/Simulator';
import { AuthPage } from './pages/AuthPage';
import MerchantDemo from './pages/MerchantDemo';


import { Refunds } from './pages/Refunds';

const Settlements = () => <Dashboard />;
// Removed mock Refunds


// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" replace />;
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated, login } = useAuth();

  return (
    <Routes>
      <Route path="/demo" element={<MerchantDemo />} />
      <Route
        path="/auth"
        element={
          isAuthenticated
            ? <Navigate to="/" replace />
            : <AuthPage onLoginSuccess={login} />
        }
      />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/settlements" element={<Settlements />} />
                <Route path="/refunds" element={<Refunds />} />
                <Route path="/api-integration" element={<APIIntegration />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/personal" element={<PersonalWallet />} />

                <Route path="/simulator" element={<Simulator />} />
                <Route path="*" element={<Dashboard />} />
              </Routes>
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Toaster position="top-right" />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
