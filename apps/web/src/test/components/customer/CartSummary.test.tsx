import { render, screen } from "@testing-library/react";
import CartSummary from "@/components/customer/CartSummary/CartSummary";
import { describe, it, expect } from "vitest";
import { CartItem } from "@src/types/cart";

describe("CartSummary Component", () => {
  it("renders empty cart message when cart is empty", () => {
    render(<CartSummary cart={[]} totalAmount={0} />);
    expect(screen.getByText("Tu carrito está vacío 🛒")).toBeInTheDocument();
  });

  it("renders cart items correctly", () => {
    const cart: CartItem[] = [
      { id: 1, name: "Producto A", price: 100, quantity: 2, thumbnail: "imgA.jpg" },
      { id: 2, name: "Producto B", price: 50, quantity: 1, thumbnail: "imgB.jpg" }
    ];

    render(<CartSummary cart={cart} totalAmount={250} />);

    expect(screen.getByText("Producto A x")).toBeInTheDocument();
    expect(screen.getByText("Producto B x")).toBeInTheDocument();
    expect(screen.getByText("$200")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("Total: $250")).toBeInTheDocument();
  });
});
