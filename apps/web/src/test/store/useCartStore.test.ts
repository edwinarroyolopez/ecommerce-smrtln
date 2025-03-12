import { describe, it, expect, beforeEach, vi } from "vitest";
import { useCartStore } from "@/store/useCartStore";

vi.mock("@/utils/localStorageUtil", () => ({
  getLocalStorageItem: vi.fn(() => []),
  setLocalStorageItem: vi.fn(),
}));

describe("useCartStore", () => {
    beforeEach(() => {
        vi.clearAllMocks(); 
        useCartStore.setState({ cart: [] });
    });

    it("should add a product to the cart", () => {
        const showToast = vi.fn();
        vi.mock("@/utils/localStorageUtil", () => ({
            getLocalStorageItem: vi.fn((key) => {
              if (key === "products") {
                return [{ id: 1, name: "Product 1", price: 100, stock: 1 }];
              }
              return [];
            }),
            setLocalStorageItem: vi.fn(),
          }));
        
        useCartStore.getState().addToCart(1, showToast);

        expect(useCartStore.getState().cart).toEqual([
            { id: 1, name: "Product 1", price: 100, quantity: 1 }
        ]);
    });
    

    it("should not add more products than stock available", () => {
        const showToast = vi.fn();
        
        useCartStore.setState({ 
            cart: [], 
        });
    
        useCartStore.getState().addToCart(1, showToast);
        useCartStore.getState().addToCart(1, showToast); 
    
        expect(showToast).toHaveBeenCalledWith("Solo quedan 1 unidades en stock", "warning");
        expect(useCartStore.getState().cart[0].quantity).toBe(1);
    });
    

  it("should remove one quantity from the cart", () => {
    useCartStore.setState({ cart: [{ id: 1, name: "Product 1", price: 100, thumbnail: "img.jpg", quantity: 2 }] });
    useCartStore.getState().removeOneToCart(1);

    expect(useCartStore.getState().cart[0].quantity).toBe(1);
  });

  it("should remove the product from the cart if quantity reaches zero", () => {
    useCartStore.setState({ cart: [{ id: 1, name: "Product 1", price: 100, thumbnail: "img.jpg", quantity: 1 }] });
    useCartStore.getState().removeOneToCart(1);

    expect(useCartStore.getState().cart).toEqual([]);
  });

  it("should remove the product from the cart completely", () => {
    useCartStore.setState({ cart: [{ id: 1, name: "Product 1", price: 100, thumbnail: "img.jpg", quantity: 2 }] });
    useCartStore.getState().removeFromCart(1);

    expect(useCartStore.getState().cart).toEqual([]);
  });

  it("should clear the cart", () => {
    useCartStore.setState({ cart: [
      { id: 1, name: "Product 1", price: 100, thumbnail: "img.jpg", quantity: 2 },
      { id: 2, name: "Product 2", price: 200, thumbnail: "img2.jpg", quantity: 1 }
    ] });
    useCartStore.getState().clearCart();

    expect(useCartStore.getState().cart).toEqual([]);
  });
});