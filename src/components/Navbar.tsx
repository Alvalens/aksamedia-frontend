import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/dashboard" className="text-lg font-bold">My App</Link>
      {user && (
        <div className="relative">
          <button className="bg-gray-700 px-4 py-2 rounded" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
