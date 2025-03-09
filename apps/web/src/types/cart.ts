import { ToastType } from "@src/types/toast";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail?: string;
    image?: string;
}

export interface CartState {
    cart: CartItem[];
    addToCart: (productId: number, showToast: (message: string, type: ToastType) => void) => void;
    removeOneToCart: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}