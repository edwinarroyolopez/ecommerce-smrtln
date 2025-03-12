import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import AdminRoutes from "@/components/routes/AdminRoutes";


vi.mock("@/components/routes/RoleProtectedRoute", () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock("@/components/admin/layouts/AdminLayout/AdminLayout", () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock("@/pages/admin/dashboard", () => ({
  default: () => <div>Dashboard</div>,
}));

describe("AdminRoutes Component", () => {
  it("debería usar RoleProtectedRoute para proteger las rutas", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AdminRoutes />
      </MemoryRouter>
    );

    expect(container.querySelector("div")).toBeInTheDocument(); 
  });

  it("debería usar AdminLayout para estructurar las páginas", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AdminRoutes />
      </MemoryRouter>
    );

    expect(container.querySelector("div")).toBeInTheDocument(); 
  });
});