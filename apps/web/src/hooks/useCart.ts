import { useMemo, useCallback } from "react";
import { useCartStore } from "@/store/useCartStore";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorageUtil";
import { Product } from "@/types/product";

export const useCart = () => {
  const { cart, clearCart } = useCartStore();

  const totalAmount = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const updateProductStock = useCallback(() => {
    const products = getLocalStorageItem<Product[]>("products", []);
    const updatedProducts = products.map((product) => {
      const itemInCart = cart.find((cartItem) => cartItem.id === product.id);
      return itemInCart
        ? { ...product, stock: Math.max(product.stock - itemInCart.quantity, 0) }
        : product;
    });
    setLocalStorageItem("products", updatedProducts);
  }, [cart]);

  return { cart, clearCart, totalAmount, updateProductStock };
};