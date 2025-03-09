export type CustomerData = {
    name: string;
    email: string;
    contact: string;
    country: string;
    shippingAddress: string;
    deliveryTime: string;
};

export type User = {
    username: string;
    role: string;
};

export type UserCredentials = {
    username: string;
    password: string;
};

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    customerData: CustomerData | null;
    login: (credentials: UserCredentials) => void;
    logout: () => void;
    setCustomerData: (customerData: CustomerData) => void;
}
