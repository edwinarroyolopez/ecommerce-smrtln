import { create } from "zustand";
import { AuthState, User } from "@src/types/auth";

export const useAuthStore = create<AuthState>((set) => ({
    user: (() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    })(),
    isAuthenticated: !!localStorage.getItem("user"),

    login: (username) => {

        const user: User = {
            username,
            role: username === "admin" ? "admin" : "client", 
        };

        localStorage.setItem("user", JSON.stringify(user));
        set({ user, isAuthenticated: true });
    },

    logout: () => {
        localStorage.removeItem("user");
        set({ user: null, isAuthenticated: false });
    }
}));
