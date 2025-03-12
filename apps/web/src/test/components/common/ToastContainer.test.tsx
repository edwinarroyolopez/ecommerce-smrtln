import { render, screen, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ToastContainer from "@/components/common/ToastContainer";
import { useToastStore } from "@/store/useToastStore";

// Mock del store para simular estados del toast
vi.mock("@/store/useToastStore", () => ({
  useToastStore: vi.fn(),
}));

describe("ToastContainer Component", () => {
  it("does not render when there is no toast", () => {
    vi.mocked(useToastStore).mockReturnValue({ toast: null });

    render(<ToastContainer />);

    expect(screen.queryByTestId("toast-container")).not.toBeInTheDocument();
  });

  it("renders the toast message when there is a toast", () => {
    vi.mocked(useToastStore).mockReturnValue({
      toast: { message: "Test Message", type: "success" },
    });

    render(<ToastContainer />);

    const container = screen.getByTestId("toast-container");
    expect(container).toBeInTheDocument();
    expect(within(container).getByText("Test Message")).toBeInTheDocument();
  });
});