import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
    user: string | null;
    login: (username: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) setUser(savedUser);
    }, []);

    const login = (username: string, password: string): boolean => {
        const VALID_USERNAME = 'testuser';
        const VALID_PASSWORD = 'password123';

        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            setUser(username);
            localStorage.setItem('user', username);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};

export default AuthProvider;
