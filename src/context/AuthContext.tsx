import React, { createContext, useContext, useState, useEffect } from 'react';

type Role = 'admin' | 'patient' | 'delivery' | null;

interface User {
  name: string;
  email: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, role: Role) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for existing session
    const savedUser = localStorage.getItem('medi_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email: string, role: Role) => {
    const newUser = { name: email.split('@')[0], email, role };
    setUser(newUser);
    localStorage.setItem('medi_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('medi_user');
  };

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
