
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  email: string;
  type: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, type: 'admin' | 'user') => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Verificar se há dados de usuário no localStorage ao inicializar
    const userType = localStorage.getItem('userType');
    const userEmail = localStorage.getItem('userEmail');
    
    if (userType && userEmail) {
      setUser({
        email: userEmail,
        type: userType as 'admin' | 'user'
      });
    }
  }, []);

  const login = (email: string, type: 'admin' | 'user') => {
    const userData = { email, type };
    setUser(userData);
    localStorage.setItem('userType', type);
    localStorage.setItem('userEmail', email);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userType');
    localStorage.removeItem('userEmail');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
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
