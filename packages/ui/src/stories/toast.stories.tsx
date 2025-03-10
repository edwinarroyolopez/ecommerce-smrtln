import type { Meta, StoryObj } from "@storybook/react";
import Toast from "../components/toast"; 

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    message: {
      control: "text",
      description: "Mensaje que se muestra en el toast",
    },
    type: {
      control: "select",
      options: ["success", "error", "warning"],
      description: "Tipo de toast (success, error, warning)",
    },
    duration: {
      control: "number",
      description: "Duración en milisegundos antes de que el toast desaparezca",
    },
    onClose: {
      action: "closed",
      description: "Función que se ejecuta cuando el toast se cierra",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const SuccessToast: Story = {
  args: {
    message: "Operación exitosa",
    type: "success",
  },
};

export const ErrorToast: Story = {
  args: {
    message: "Ha ocurrido un error",
    type: "error",
  },
};

export const WarningToast: Story = {
  args: {
    message: "Advertencia: acción requerida",
    type: "warning",
  },
};

export const CustomDurationToast: Story = {
  args: {
    message: "Este toast durará 5 segundos",
    type: "success",
    duration: 5000,
  },
};