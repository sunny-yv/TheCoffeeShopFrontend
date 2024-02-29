import React, { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../lib/auth/service";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async ({ email, password }) => {
    const response = await authService.login(email, password);
    setUser(response);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  useEffect(() => {
    const user = authService.getUser();
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserData = () => {
  const { user } = useAuth();
  if (!user) return null;
  return {
    id: user[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ],
    email:
      user[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
      ],
    roleId:
      user["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
  };
};