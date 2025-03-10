import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    label: {
      control: "text",
      description: "Etiqueta del campo de entrada",
    },
    error: {
      control: "text",
      description: "Mensaje de error",
    },
    placeholder: {
      control: "text",
      description: "Texto de marcador de posición",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
      description: "Tipo de campo de entrada",
    },
    disabled: {
      control: "boolean",
      description: "Deshabilitar el campo de entrada",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Ingrese su texto aquí",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Nombre",
    placeholder: "Ingrese su nombre",
  },
};

export const WithError: Story = {
  args: {
    label: "Correo electrónico",
    placeholder: "Ingrese su correo electrónico",
    error: "El correo electrónico es inválido",
  },
};

export const Disabled: Story = {
  args: {
    label: "Campo deshabilitado",
    placeholder: "Este campo está deshabilitado",
    disabled: true,
  },
};

export const PasswordInput: Story = {
  args: {
    label: "Contraseña",
    placeholder: "Ingrese su contraseña",
    type: "password",
  },
};