import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CustomerLayout from "./CustomerLayout";
import { expect, describe, it } from "vitest";

describe("CustomerLayout", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <CustomerLayout />
      </MemoryRouter>
    );

    expect(screen.getByTestId("customer-layout")).toBeInTheDocument();

    expect(screen.getByText(/Facturas/i)).toBeInTheDocument();
    expect(screen.getByText(/Productos/i)).toBeInTheDocument();
  });

  it("renders correctly with a specific route", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <CustomerLayout />
      </MemoryRouter>
    );

    expect(screen.getByTestId("customer-layout")).toBeInTheDocument();
  });
});
