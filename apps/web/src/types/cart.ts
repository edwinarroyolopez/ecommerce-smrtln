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
    addToCart: (productId: number) => void;
    removeOneToCart: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}