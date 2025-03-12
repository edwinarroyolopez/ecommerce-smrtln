import { render, screen } from "@testing-library/react";
import ProductSkeleton from "@/components/customer/ProductSkeleton/ProductSkeleton";
import { describe, it, expect } from "vitest";

describe("ProductSkeleton Component", () => {
  it("renders the correct number of skeleton elements", () => {
    render(<ProductSkeleton />);

    const skeletons = screen.getAllByTestId(/skeleton-(image|text-short|text-medium|button)/);
    expect(skeletons.length).toBeGreaterThanOrEqual(4);
  });

  it("renders the skeleton elements with expected structure", () => {
    render(<ProductSkeleton />);

    expect(screen.getByTestId("skeleton-image")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-text-short")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-text-medium")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-button")).toBeInTheDocument();
  });
});
