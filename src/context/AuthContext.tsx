import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
    user: string | null;
    loading: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) setUser(savedUser);
        setLoading(false);
    }, []);

    const login = async (username: string, password: string): Promise<boolean> => {
        setLoading(true);
        const VALID_USERNAME = 'testuser';
        const VALID_PASSWORD = 'password123';

        return new Promise((resolve) => {
            setTimeout(() => {
                if (username === VALID_USERNAME && password === VALID_PASSWORD) {
                    setUser(username);
                    localStorage.setItem('user', username);
                    setLoading(false);
                    resolve(true);
                } else {
                    setLoading(false);
                    resolve(false);
                }
            }, 1000); // Simulate an async operation
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
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
