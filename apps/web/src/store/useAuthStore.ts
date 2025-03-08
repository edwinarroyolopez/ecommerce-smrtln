import { create } from "zustand";
import { AuthState, User, UserCredentials } from "@src/types/auth";
import { mockData } from "@/data/products";
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from "@/utils/localStorageUtil";

export const useAuthStore = create<AuthState>((set) => ({
    user: getLocalStorageItem("user", null),
    isAuthenticated: !!getLocalStorageItem("user",null),

    login: (credentials: UserCredentials) => {
        const { username } = credentials;
        const user: User = {
            username,
            role: username === "admin" ? "admin" : "client", 
        };

        setLocalStorageItem("user", user);

        if (!getLocalStorageItem("products", null)) {
            setLocalStorageItem("products", mockData);
        }

        set({ user, isAuthenticated: true });
    },

    logout: () => {
        removeLocalStorageItem("user");
        set({ user: null, isAuthenticated: false });
    }
}));
