import { render, screen } from "@testing-library/react";
import DashboardSkeleton from "@/components/admin/DashboardSkeleton/DashboardSkeleton";
import { describe, it, expect, vi } from "vitest";

// Mock del componente Skeleton para evitar errores de importación
type SkeletonProps = { width: string; height: string };
vi.mock("ecommerce-smrtln-ui", () => ({
  Skeleton: ({ width, height }: SkeletonProps) => (
    <div data-testid="skeleton" style={{ width, height }}></div>
  ),
}));

describe("DashboardSkeleton Component", () => {
  it("renders the correct number of skeleton elements", () => {
    render(<DashboardSkeleton />);

    // Se espera que haya al menos 7 elementos esqueleto
    const skeletons: HTMLElement[] = screen.getAllByTestId("skeleton");
    expect(skeletons.length).toBeGreaterThanOrEqual(7);
  });

  it("renders the skeleton elements with expected dimensions", () => {
    render(<DashboardSkeleton />);

    const firstSkeleton: HTMLElement = screen.getAllByTestId("skeleton")[0];
    expect(firstSkeleton).toHaveStyle("width: 120px");
    expect(firstSkeleton).toHaveStyle("height: 24px");
  });
});