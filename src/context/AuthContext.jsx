import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  // Simple rule for now (until backend/JWT):
  // if email includes "admin" -> admin
  const deriveRole = (email) => {
    if (!email) return "user";
    return email.toLowerCase().includes("admin") ? "admin" : "user";
  };

  const login = (email, password) => {
    const newUser = { email, role: deriveRole(email) };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const register = (email, password) => {
    const newUser = { email, role: "user" };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
