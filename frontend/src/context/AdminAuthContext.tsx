import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { AdminUser } from '../services/api';
import { adminGetProfileApi } from '../services/api';

interface AdminAuthContextType {
  token: string | null;
  adminUser: AdminUser | null;
  isLoading: boolean;
  login: (token: string, user: AdminUser) => void;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('thukral_admin_token'));
  const [adminUser, setAdminUser] = useState<AdminUser | null>(() => {
    const cached = localStorage.getItem('thukral_admin_user');
    return cached ? JSON.parse(cached) : null;
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifyToken = async () => {
      const storedToken = localStorage.getItem('thukral_admin_token');
      if (!storedToken) {
        setIsLoading(false);
        return;
      }

      try {
        const user = await adminGetProfileApi(storedToken);
        setAdminUser(user);
        setToken(storedToken);
      } catch (err) {
        // Token invalid or expired
        localStorage.removeItem('thukral_admin_token');
        localStorage.removeItem('thukral_admin_user');
        setToken(null);
        setAdminUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, []);

  const login = (newToken: string, user: AdminUser) => {
    localStorage.setItem('thukral_admin_token', newToken);
    localStorage.setItem('thukral_admin_user', JSON.stringify(user));
    setToken(newToken);
    setAdminUser(user);
  };

  const logout = () => {
    localStorage.removeItem('thukral_admin_token');
    localStorage.removeItem('thukral_admin_user');
    setToken(null);
    setAdminUser(null);
  };

  return (
    <AdminAuthContext.Provider value={{ token, adminUser, isLoading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
