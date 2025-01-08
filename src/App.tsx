import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './utils/PrivateRoute';
import AuthProvider from './context/AuthContext';

export default function App() {
  return (<AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  </AuthProvider>);
}
