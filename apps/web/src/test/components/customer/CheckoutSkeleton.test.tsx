import { render, screen } from "@testing-library/react";
import CheckoutSkeleton from "@/components/customer/CheckoutSkeleton/CheckoutSkeleton";
import { describe, it, expect } from "vitest";

describe("CheckoutSkeleton Component", () => {
  it("renders the correct number of skeleton elements", () => {
    render(<CheckoutSkeleton />);

    const skeletons = screen.getAllByTestId(
      /skeleton-(title|cart-summary|customer-data|section|button)/
    );
    expect(skeletons.length).toBeGreaterThanOrEqual(6);
  });

  it("renders the skeleton elements with expected structure", () => {
    render(<CheckoutSkeleton />);

    expect(screen.getByTestId("skeleton-title")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-cart-summary")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-customer-data")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-section")).toBeInTheDocument();
    expect(screen.getAllByTestId("skeleton-button").length).toBe(2);
  });
});
