import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthForm } from './components/AuthForm';
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './pages/LandingPage';
import { useAuthStore } from './store/authStore';
import { Toaster } from 'react-hot-toast';

function App() {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/auth"
            element={
              user ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <div className="min-h-screen bg-black flex items-center justify-center p-4">
                  <AuthForm />
                </div>
              )
            }
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/auth" replace />}
          />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;