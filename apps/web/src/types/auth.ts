export type User = {
    username: string;
    role: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: string) => void;
    logout: () => void;
}

