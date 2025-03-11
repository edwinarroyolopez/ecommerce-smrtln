import { useInvoiceStore } from "@/store/useInvoiceStore";
import { describe, it, expect, beforeEach } from "vitest";
import { Invoice } from "@src/types/invoice";

describe("useInvoiceStore", () => {
  beforeEach(() => {
    useInvoiceStore.setState({
      invoices: [],
    });
    localStorage.clear();
  });

  it("should add a new invoice correctly", async () => {
    const newInvoice: Invoice = {
      id: 1,
      date: "2023-10-01",
      total: 100,
      username: "johndoe",
      orderNote: "Urgent delivery",
      customer: {
        name: "John Doe",
        email: "john@example.com",
        contact: "1234567890",
        country: "USA",
        shippingAddress: "123 Main St",
        deliveryTime: "Morning",
      },
      items: [
        {
          id: 1,
          name: "Item 1",
          quantity: 1,
          price: 100,
        },
      ],
    };

    useInvoiceStore.getState().addInvoice(newInvoice);

    expect(useInvoiceStore.getState().invoices).toEqual([newInvoice]);
    expect(localStorage.getItem("invoices")).toBe(JSON.stringify([newInvoice]));
  });

  it("should add multiple invoices correctly", async () => {
    const firstInvoice: Invoice = {
      id: 1,
      date: "2023-10-01",
      total: 100,
      username: "johndoe",
      customer: {
        name: "John Doe",
        email: "john@example.com",
        contact: "1234567890",
        country: "USA",
        shippingAddress: "123 Main St",
        deliveryTime: "Morning",
      },
      items: [
        { id: 1, name: "Item 1", quantity: 1, price: 100 },
      ],
    };

    const secondInvoice: Invoice = {
      id: 2,
      date: "2023-10-02",
      total: 200,
      username: "janedoe",
      customer: {
        name: "Jane Doe",
        email: "jane@example.com",
        contact: "9876543210",
        country: "Canada",
        shippingAddress: "456 Elm St",
        deliveryTime: "Afternoon",
      },
      items: [
        { id: 2, name: "Item 2", quantity: 2, price: 100 },
      ],
    };

    useInvoiceStore.getState().addInvoice(firstInvoice);
    useInvoiceStore.getState().addInvoice(secondInvoice);

    expect(useInvoiceStore.getState().invoices).toHaveLength(2);
    expect(useInvoiceStore.getState().invoices).toEqual([firstInvoice, secondInvoice]);
    expect(localStorage.getItem("invoices")).toBe(JSON.stringify([firstInvoice, secondInvoice]));
  });
});
