export type User = {
    username: string;
    role: string;
}

export type UserCredentials = {
    username: string;
    password: string;
}


export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (credentials: UserCredentials) => void;
    logout: () => void;
}

