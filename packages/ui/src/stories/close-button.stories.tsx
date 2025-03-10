import type { Meta, StoryObj } from "@storybook/react";
import { CloseButton } from "../components/close-button";

const meta: Meta<typeof CloseButton> = {
  title: "Components/CloseButton",
  component: CloseButton,
  argTypes: {
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al hacer clic en el botón",
    },
    children: {
      control: "text",
      description: "Contenido del botón",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
  args: {
    children: "×",
  },
};

export const WithText: Story = {
  args: {
    children: "Cerrar",
  },
};

export const WithCustomStyle: Story = {
  args: {
    children: "×",
    style: { fontSize: "24px", color: "red" },
  },
};