import { describe, beforeEach, it, expect } from "vitest";
import { useToastStore } from "./useToastStore";

describe("useToastStore", () => {
  beforeEach(() => {
    useToastStore.setState({ toast: null });
  });

  it("should show a toast with the correct message and type", () => {
    const message = "This is a test toast";
    const type = "success";

    useToastStore.getState().showToast(message, type);

    expect(useToastStore.getState().toast).toEqual({ message, type });
  });

  it("should clear the toast after 3 seconds", async () => {
    const message = "This is a test toast";
    const type = "error";

    useToastStore.getState().showToast(message, type);

    expect(useToastStore.getState().toast).toEqual({ message, type });

    await new Promise((resolve) => setTimeout(resolve, 3100)); 

    expect(useToastStore.getState().toast).toBeNull();
  });
});
