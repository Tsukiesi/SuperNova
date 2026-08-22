import { createContext, useContext, useEffect, useState } from "react";
import { type AuthContextType, type User } from "./types";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  async function getMe() {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Not authenticated");
        return response.json();
      })
      .then((user) => {
        setUser(user);
        navigate("/");
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getMe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, isLoading, getMe }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext must be used witihn AuthProvider");
  }
  return context;
}
