import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import InvoicesTable from "@/components/admin/InvoicesTable/InvoicesTable";

import { Invoice,InvoiceItem } from "@src/types/invoice";

vi.mock("ecommerce-smrtln-ui", () => ({
  TableContainer: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Table: ({ children }: { children: React.ReactNode }) => (
    <table>{children}</table>
  ),
  Th: ({ children }: { children: React.ReactNode }) => <th>{children}</th>,
  Td: ({ children }: { children: React.ReactNode }) => <td>{children}</td>,
  EyeIcon: ({ onClick }: { onClick: () => void }) => (
    <svg onClick={onClick}>EyeIcon</svg>
  ),
  CustomerIcon: () => <svg>CustomerIcon</svg>,
  CalendarIcon: () => <svg>CalendarIcon</svg>,
}));

describe("InvoicesTable Component", () => {
  const invoiceItem: InvoiceItem = {
    id: 1,
    name: "Producto A",
    price: 50,
    quantity: 2,
    thumbnail: "https://example.com/product-a.jpg"
  };

  const invoices: Invoice[] = [
    {
      id: 1,
      date: "2023-10-01T12:00:00Z",
      items: [invoiceItem],
      total: 100,
      username: "john.doe",
      orderNote: "Entregar antes del mediodía.",
      customer: {
        name: "John Doe",
        email: "john.doe@example.com",
        country: "USA",
        contact: "+123456789",
        shippingAddress: "123 Main St",
        deliveryTime: "2-3 business days",
      },
    },
    {
        id: 2,
        date: "2023-10-02T12:00:00Z",
        items: [invoiceItem],
        total: 200,
        username: "john.doe",
        orderNote: "Entregar antes del mediodía.",
        customer: {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          country: "USA",
          contact: "+123456789",
          shippingAddress: "123 Main St",
          deliveryTime: "2-3 business days",
        },
      }
  ];

  it("debería renderizar correctamente la tabla con facturas", () => {
    const mockOnInvoiceSelect = vi.fn();
    render(
      <InvoicesTable
        invoices={invoices}
        onInvoiceSelect={mockOnInvoiceSelect}
      />
    );

    expect(screen.getByRole("table")).toBeInTheDocument();

    expect(screen.getByText("N°")).toBeInTheDocument();
    expect(screen.getByText("$")).toBeInTheDocument();

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("2023/10/01")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();

    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("jane.smith@example.com")).toBeInTheDocument();
    expect(screen.getByText("2023/10/02")).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();

    const eyeIcons = screen.getAllByText("EyeIcon");
    expect(eyeIcons.length).toBe(2);
  });

  it("debería llamar a onInvoiceSelect al hacer clic en el ícono EyeIcon", () => {
    const mockOnInvoiceSelect = vi.fn();
    render(
      <InvoicesTable
        invoices={invoices}
        onInvoiceSelect={mockOnInvoiceSelect}
      />
    );

    const eyeIcons = screen.getAllByText("EyeIcon");
    fireEvent.click(eyeIcons[0]);

    expect(mockOnInvoiceSelect).toHaveBeenCalledWith(invoices[0]);
  });

  it("debería mostrar un mensaje cuando no hay facturas", () => {
    const mockOnInvoiceSelect = vi.fn();
    render(
      <InvoicesTable invoices={[]} onInvoiceSelect={mockOnInvoiceSelect} />
    );

    expect(screen.getByText("No hay facturas aún")).toBeInTheDocument();
  });
});
