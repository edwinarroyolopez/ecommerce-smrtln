import { create } from "zustand";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorageUtil";
import { CartItem, CartState } from "@src/types/cart";

export const useCartStore = create<CartState>((set, get) => {
    const storedCart = getLocalStorageItem<CartItem[]>("cart", []);
    const products = getLocalStorageItem<CartItem[]>("products", []);

    return {
        cart: storedCart,

        addToCart: (productId: number) => {
            const { cart } = get();
            const product = products.find((p) => p.id === productId);
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

        removeOneToCart: (productId: number) => {
            const { cart } = get();
            const updatedCart = cart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0); // Elimina productos con cantidad 0
        
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
