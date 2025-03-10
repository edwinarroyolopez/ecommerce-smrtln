import type { Meta, StoryObj } from "@storybook/react";
import Drawer  from "../components/drawer"; 

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controla si el Drawer está abierto o cerrado",
    },
    onClose: {
      action: "closed",
      description: "Función que se ejecuta al cerrar el Drawer",
    },
    title: {
      control: "text",
      description: "Título del Drawer",
    },
    children: {
      control: "text",
      description: "Contenido del Drawer",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const DefaultDrawer: Story = {
  args: {
    isOpen: true,
    title: "Título del Drawer",
    children: "Contenido del Drawer",
  },
};

export const WithoutTitle: Story = {
  args: {
    isOpen: true,
    children: "Contenido del Drawer sin título",
  },
};

export const ClosedDrawer: Story = {
  args: {
    isOpen: false,
    title: "Drawer Cerrado",
    children: "Este contenido no será visible",
  },
};