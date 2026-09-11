import { create } from "zustand";
import type { User } from "./types";
import { type NavigateFunction } from "react-router-dom";

type useAuthStore = {
  isLoading: boolean;
  user: User | null | undefined;
  getMe: (navigate: NavigateFunction) => Promise<void>;
  setUser: (userData: User) => void;
  logoutUser: () => void;
};

const useAuthStore = create<useAuthStore>((set) => ({
  isLoading: false,
  user: undefined,
  getMe: async (navigate: NavigateFunction) => {
    set(() => ({ isLoading: true }));
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
    try {
      const response = await fetch("http://localhost:3000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Not authenticated");
      const userData = await response.json();
      set(() => ({ user: userData }));
    } catch {
      set(() => ({ user: null }));
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
  setUser: (userData: User) => {
    set(() => ({ user: userData }));
  },
  logoutUser: () => {
    set(() => ({ user: null }));
  },
}));

export default useAuthStore;
