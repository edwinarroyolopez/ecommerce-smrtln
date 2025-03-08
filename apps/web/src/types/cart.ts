export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface CartState {
    cart: CartItem[];
    addToCart: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}