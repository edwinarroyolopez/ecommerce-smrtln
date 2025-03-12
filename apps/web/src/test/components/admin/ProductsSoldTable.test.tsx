import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProductsSoldTable from "@/components/admin/ProductsSoldTable/ProductsSoldTable";


describe("ProductsSoldTable Component", () => {
  const products = [
    {
      name: "Producto 1",
      quantity: 10,
      thumbnail: "https://example.com/product1.jpg",
    },
    {
      name: "Producto 2",
      quantity: 5,
      thumbnail: undefined,
    },
  ];

  it("debería renderizar correctamente la tabla con productos", () => {
    render(<ProductsSoldTable products={products} />);

    expect(screen.getByRole("table")).toBeInTheDocument();

    expect(screen.getByText("Producto")).toBeInTheDocument();
    expect(screen.getByText("N° Vendidos")).toBeInTheDocument();

    expect(screen.getByText("Producto 1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Producto 2")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();

    const image = screen.getByAltText("Producto 1");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/product1.jpg");

    expect(screen.getByText("Sin imagen")).toBeInTheDocument();
  });

  it("debería mostrar un mensaje cuando no hay productos", () => {
    render(<ProductsSoldTable products={[]} />);

    expect(
      screen.getByText("No se han vendido productos aún")
    ).toBeInTheDocument();
  });
});