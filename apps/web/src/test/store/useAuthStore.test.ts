import { describe, it, expect, beforeEach } from "vitest";
import { useAuthStore } from "@/store/useAuthStore";
import { UserCredentials, CustomerData } from "@src/types/auth";

describe("useAuthStore", () => {
  beforeEach(() => {
    useAuthStore.setState({
      user: null,
      isAuthenticated: false,
      customerData: null,
    });
    localStorage.clear();
  });

  it("should login and set user correctly", async () => {
    const credentials: UserCredentials = { username: "testuser", password: "securepass" };

    useAuthStore.getState().login(credentials);

    expect(useAuthStore.getState().user).toEqual({
      username: "testuser",
      role: "client",
    });

    expect(useAuthStore.getState().isAuthenticated).toBe(true);

    expect(localStorage.getItem("user")).toBe(
      JSON.stringify({ username: "testuser", role: "client" })
    );
  });

  it("should logout and clear user data", async () => {
    useAuthStore.setState({
      user: { username: "testuser", role: "client" },
      isAuthenticated: true,
    });
    localStorage.setItem("user", JSON.stringify({ username: "testuser", role: "client" }));

    useAuthStore.getState().logout();

    expect(useAuthStore.getState().user).toBeNull();
    expect(useAuthStore.getState().isAuthenticated).toBe(false);
    expect(useAuthStore.getState().customerData).toBeNull();

    expect(localStorage.getItem("user")).toBeNull();
    expect(localStorage.getItem("customerData")).toBeNull();
  });

  it("should set customer data correctly", async () => {
    const customerData: CustomerData = {
      name: "John Doe",
      email: "john@example.com",
      contact: "1234567890",
      country: "USA",
      shippingAddress: "123 Main St",
      deliveryTime: "Morning",
    };

    useAuthStore.getState().setCustomerData(customerData);

    expect(useAuthStore.getState().customerData).toEqual(customerData);
    expect(localStorage.getItem("customerData")).toBe(JSON.stringify(customerData));
  });

  it("should handle admin role correctly", async () => {
    const credentials: UserCredentials = { username: "admin", password: "adminpass" };

    useAuthStore.getState().login(credentials);

    expect(useAuthStore.getState().user).toEqual({
      username: "admin",
      role: "admin",
    });

    expect(useAuthStore.getState().isAuthenticated).toBe(true);
  });

  it("should not authenticate if credentials are missing", async () => {
    const invalidCredentials = { username: "", password: "" } as UserCredentials;

    useAuthStore.getState().login(invalidCredentials);

    expect(useAuthStore.getState().user).toEqual({
      username: "",
      role: "client",
    });
    expect(useAuthStore.getState().isAuthenticated).toBe(true);
  });
});
