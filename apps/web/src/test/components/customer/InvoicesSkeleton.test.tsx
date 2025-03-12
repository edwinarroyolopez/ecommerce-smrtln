import { render, screen } from "@testing-library/react";
import InvoicesSkeleton from "@/components/customer/InvoicesSkeleton/InvoicesSkeleton";
import { describe, it, expect } from "vitest";

describe("InvoicesSkeleton Component", () => {
  it("renders the correct number of skeleton elements", () => {
    render(<InvoicesSkeleton />);

    // Se espera que haya múltiples elementos esqueleto
    const skeletons: HTMLElement[] = screen.getAllByText(/Total:/);
    expect(skeletons.length).toBeGreaterThanOrEqual(3);
  });

  it("renders the section title", () => {
    render(<InvoicesSkeleton />);
    
    const title: HTMLElement = screen.getByText("📜 Tus Facturas");
    expect(title).toBeInTheDocument();
  });
});
