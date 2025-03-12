import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import SelectCountry from "./SelectCountry";
import { useCountries } from "@/hooks/useCountries";

vi.mock("@/hooks/useCountries", () => ({
  useCountries: vi.fn(),
}));

describe("SelectCountry Component", () => {
  const mockOnChange = vi.fn();

  it("should display loading state", () => {
    (useCountries as Mock).mockReturnValue({ data: null, isLoading: true, error: null });
    render(<SelectCountry value="" onChange={mockOnChange} />);
    expect(screen.getByText("Cargando países...")).toBeInTheDocument();
  });

  it("should display error message if fetching countries fails", () => {
    (useCountries as Mock).mockReturnValue({ data: null, isLoading: false, error: true });
    render(<SelectCountry value="" onChange={mockOnChange} />);
    expect(screen.getByText("Error al cargar los países")).toBeInTheDocument();
  });

  it("should render the select element with options", () => {
    (useCountries as Mock).mockReturnValue({
      data: [
        { cca2: "US", name: { common: "Estados Unidos" } },
        { cca2: "CO", name: { common: "Colombia" } },
      ],
      isLoading: false,
      error: null,
    });
    render(<SelectCountry value="" onChange={mockOnChange} />);
    expect(screen.getByText("Selecciona un país")).toBeInTheDocument();
    expect(screen.getByText("Estados Unidos")).toBeInTheDocument();
    expect(screen.getByText("Colombia")).toBeInTheDocument();
  });

  it("should call onChange when a country is selected", () => {
    (useCountries as Mock).mockReturnValue({
      data: [
        { cca2: "US", name: { common: "Estados Unidos" } },
      ],
      isLoading: false,
      error: null,
    });
    render(<SelectCountry value="" onChange={mockOnChange} />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Estados Unidos" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("should display error message when error prop is provided", () => {
    (useCountries as Mock).mockReturnValue({ data: [], isLoading: false, error: null });
    render(<SelectCountry value="" onChange={mockOnChange} error="Campo requerido" />);
    expect(screen.getByText("Campo requerido")).toBeInTheDocument();
  });
});
