import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './utils/PrivateRoute';
import AuthProvider from './context/AuthContext';
import React from 'react';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

function InnerApp() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<LoginPage />} />

      {/* Private Routes wrapped with Layout */}
      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
          <InnerApp />
        </Router>
      </React.Suspense>
    </AuthProvider>
  );
}
