import { create } from "zustand";
import { AuthState, User, UserCredentials } from "@src/types/auth";
import { mockData } from "@/data/products";
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from "@/utils/localStorageUtil";
import logger from "@/utils/logger";

export const useAuthStore = create<AuthState>((set) => ({
    user: getLocalStorageItem("user", null),
    isAuthenticated: !!getLocalStorageItem<User | null>("user", null),

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

        logger.log(`User logged in: ${username}, Role: ${user.role}`);
    },

    logout: () => {
        const currentUser = getLocalStorageItem<User | null>("user", null);
        if (currentUser) {
            logger.log(`User logged out: ${currentUser.username}`);
        }

        removeLocalStorageItem("user");
        set({ user: null, isAuthenticated: false });
    }
}));
