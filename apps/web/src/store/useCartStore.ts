import { create } from "zustand";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorageUtil";
import { CartItem, CartState } from "@src/types/cart";
import { ToastType } from "@src/types/toast";
import { Product } from "@src/types/product";
import logger from "@/utils/logger";


export const useCartStore = create<CartState>()((set, get) => {
    const storedCart = getLocalStorageItem<CartItem[]>("cart", []);
    const products = getLocalStorageItem<Product[]>("products", []);

    return {
        cart: storedCart,

        addToCart: (productId: number, showToast: (message: string, type: ToastType) => void) => {
            const { cart } = get();
            const product = products.find((p) => p.id === productId);
            if (!product) return;

            const existingItem = cart.find((item) => item.id === productId);
            const newQuantity = existingItem ? existingItem.quantity + 1 : 1;

            if (newQuantity > product.stock) {
                const message = `Solo quedan ${product.stock} unidades en stock`
                showToast(message, "warning");
                logger.warn(message);
                return;
            }

            const updatedCart = existingItem
                ? cart.map((item) =>
                    item.id === productId ? { ...item, quantity: newQuantity } : item
                )
                : [...cart, { id: product.id, name: product.name, price: product.price, thumbnail: product.thumbnail, quantity: 1 }];

            setLocalStorageItem("cart", updatedCart);
            //@ts-ignore
            set({ cart: updatedCart });
        },

        removeOneToCart: (productId: number) => {
            const { cart } = get();
            const updatedCart = cart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0);
        
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
