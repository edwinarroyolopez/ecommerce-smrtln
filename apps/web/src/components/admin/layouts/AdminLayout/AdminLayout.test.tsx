import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import AdminLayout from "./AdminLayout";
import { useAuthStore } from "@/store/useAuthStore";
import { MemoryRouter } from "react-router-dom"; // Importa MemoryRouter
import { expect, describe, it, beforeEach } from "vitest";

describe("AdminLayout", () => {
  beforeEach(() => {
    // Configura el estado inicial del store antes de cada prueba
    useAuthStore.setState({
      user: { username: "admin_user", role: "admin" },
      isAuthenticated: true,
    });
  });

  it("renders correctly", async () => {
    render(
      <MemoryRouter>
        <AdminLayout />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Dashboard: admin_user/i)).toBeInTheDocument();
    });
  });

  it("displays the correct username", async () => {
    render(
      <MemoryRouter>
        <AdminLayout />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Dashboard: admin_user")).toBeInTheDocument();
    });
  });

  it("shows logout button when user is authenticated", async () => {
    render(
      <MemoryRouter>
        <AdminLayout />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Cerrar Sesión/i)).toBeInTheDocument();
    });
  });

  it("handles logout correctly", async () => {
    render(
      <MemoryRouter>
        <AdminLayout />
      </MemoryRouter>
    );

    const logoutButton = await screen.findByText(/Cerrar Sesión/i);
    fireEvent.click(logoutButton);

    await waitFor(() => {
      expect(useAuthStore.getState().user).toBeNull();
      expect(useAuthStore.getState().isAuthenticated).toBe(false);
    });
  });
});