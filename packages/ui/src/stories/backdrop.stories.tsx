import type { Meta, StoryObj } from "@storybook/react";
import { Backdrop } from "../components/backdrop"; // Asegúrate de que la ruta de importación sea correcta

const meta: Meta<typeof Backdrop> = {
  title: "Components/Backdrop",
  component: Backdrop,
  argTypes: {
    visible: {
      control: "boolean",
      description: "Controla si el backdrop es visible o no",
    },
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al hacer clic en el backdrop",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Visible: Story = {
  args: {
    visible: true,
    children: <div style={{ color: "white", fontSize: "24px" }}>Contenido del Backdrop</div>,
  },
};

export const Hidden: Story = {
  args: {
    visible: false,
    children: <div style={{ color: "white", fontSize: "24px" }}>Contenido del Backdrop</div>,
  },
};

export const WithClickHandler: Story = {
  args: {
    visible: true,
    onClick: () => alert("Backdrop clicked!"),
    children: <div style={{ color: "white", fontSize: "24px" }}>Haz clic en el backdrop</div>,
  },
};