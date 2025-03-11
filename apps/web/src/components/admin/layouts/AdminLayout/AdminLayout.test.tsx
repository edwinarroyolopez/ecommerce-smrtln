import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import AdminLayout from "./AdminLayout";
import { useAuthStore } from "@/store/useAuthStore";
import { expect, describe, it,beforeEach } from "vitest";


describe("AdminLayout", () => {
  beforeEach(() => {
    useAuthStore.setState({
      user: { username: "admin_user", role: "admin" },
      isAuthenticated: true,
    });
  });

  it("renders correctly", async () => {
    render(<AdminLayout />);
    await waitFor(() => {
      expect(screen.getByText(/Dashboard: admin_user/i)).toBeInTheDocument();
    });
  });

  it("displays the correct username", async () => {
    render(<AdminLayout />);
    await waitFor(() => {
      expect(screen.getByText("Dashboard: admin_user")).toBeInTheDocument();
    });
  });

  it("shows logout button when user is authenticated", async () => {
    render(<AdminLayout />);
    await waitFor(() => {
      expect(screen.getByText(/Logout/i)).toBeInTheDocument();
    });
  });


  it("handles logout correctly", async () => {
    render(<AdminLayout />);
    const logoutButton = await screen.findByText(/Logout/i);
    fireEvent.click(logoutButton);

    await waitFor(() => {
      expect(useAuthStore.getState().user).toBeNull();
      expect(useAuthStore.getState().isAuthenticated).toBe(false);
    });
  });
});