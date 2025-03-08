import { create } from "zustand";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorageUtil";
import { mockData } from "@/data/products";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    cart: CartItem[];
    addToCart: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => {
    const storedCart = getLocalStorageItem<CartItem[]>("cart", []);

    return {
        cart: storedCart,

        addToCart: (productId: number) => {
            const { cart } = get();
            const product = mockData.find((p) => p.id === productId);
            if (!product) return;

            const existingItem = cart.find((item) => item.id === productId);
            const updatedCart = existingItem
                ? cart.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                )
                : [...cart, { id: product.id, name: product.name, price: product.price, quantity: 1 }];

            setLocalStorageItem("cart", updatedCart);
            set({ cart: updatedCart });
        },

        removeFromCart: (productId: number) => {
            const { cart } = get();
            const updatedCart = cart.filter((item) => item.id !== productId);

            setLocalStorageItem("cart", updatedCart);
            set({ cart: updatedCart });
        },

        clearCart: () => {
            setLocalStorageItem("cart", []);
            set({ cart: [] });
        },
    };
});
