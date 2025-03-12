import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Confirmation from "@/pages/customer/confirmation";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));


const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Confirmation Component", () => {
  it("debería renderizar correctamente el mensaje de confirmación", () => {
    render(<Confirmation />);

    expect(screen.getByText("🎉 ¡Compra Confirmada! 🎉")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Gracias por tu compra. Te hemos enviado un correo con los detalles del pedido."
      )
    ).toBeInTheDocument();
  });

  it("debería redirigir a la página de inicio al hacer clic en el botón", () => {
    render(<Confirmation />);

    const button = screen.getByText("Regresar al Inicio");
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});