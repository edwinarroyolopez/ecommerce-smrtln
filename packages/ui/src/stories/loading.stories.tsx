import type { Meta, StoryObj } from "@storybook/react";
import Loading from "../components/loading"; // Asegúrate de que la ruta de importación sea correcta

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  argTypes: {
    // No hay props adicionales para este componente
  },
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {}, // No se necesitan argumentos adicionales
};