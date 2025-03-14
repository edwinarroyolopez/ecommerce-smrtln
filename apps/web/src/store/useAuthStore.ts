import { create } from "zustand";
import { AuthState, User, UserCredentials, CustomerData } from "@src/types/auth";
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from "@/utils/localStorageUtil";
import logger from "@/utils/logger";

export const useAuthStore = create<AuthState>((set) => ({
    user: getLocalStorageItem("user", null),
    isAuthenticated: !!getLocalStorageItem<User | null>("user", null),
    customerData: getLocalStorageItem<CustomerData | null>("customerData", null),

    login: (credentials: UserCredentials) => {
        const { username } = credentials;
        const user: User = {
            username,
            role: username === "admin" ? "admin" : "client", 
        };

        setLocalStorageItem("user", user);
        set({ user, isAuthenticated: true });

        logger.log(`User logged in: ${username}, Role: ${user.role}`);
    },

    logout: () => {
        removeLocalStorageItem("user");
        removeLocalStorageItem("customerData");
        set({ user: null, isAuthenticated: false, customerData: null });
    },

    setCustomerData: (customerData: CustomerData) => {
        setLocalStorageItem("customerData", customerData);
        set({ customerData });
    }
}));
