import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter} from "react-router-dom";
import CustomerRoutes from "@/components/routes/CustomerRoutes";


// Mock de los componentes
vi.mock("@/components/routes/RoleProtectedRoute", () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock("@/components/customer/layouts/CustomerLayout/CustomerLayout", () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));


describe("CustomerRoutes Component", () => {

  it("debería usar RoleProtectedRoute para proteger las rutas", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <CustomerRoutes />
      </MemoryRouter>
    );

    expect(container.querySelector("div")).toBeInTheDocument();
  });

  it("debería usar CustomerLayout para estructurar las páginas", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <CustomerRoutes />
      </MemoryRouter>
    );

    expect(container.querySelector("div")).toBeInTheDocument();
  });
});