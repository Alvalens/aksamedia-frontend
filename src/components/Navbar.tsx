import React from 'react';
import { useAuth } from '../context/AuthContext';
import Dropdown from './Dropdown';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-100 p-4 text-white flex justify-between items-center">
      <div>
      </div>
      {user && (
        <Dropdown
          buttonLabel={user}
          items={[
            { label: 'Profile', link: '/profile' },
            { label: 'Settings', link: '/settings' },
            { label: 'Logout', action: logout },
          ]}
        />
      )}
    </nav>
  );
};

export default Navbar;
