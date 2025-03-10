import type { Meta, StoryObj } from "@storybook/react";
import Skeleton  from "../components/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    height: {
      control: "text",
      description: "Altura del esqueleto",
    },
    width: {
      control: "text",
      description: "Ancho del esqueleto",
    },
    borderRadius: {
      control: "text",
      description: "Radio de borde del esqueleto",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
};

export const CustomHeight: Story = {
  args: {
    height: "50px",
  },
};

export const CustomWidth: Story = {
  args: {
    width: "200px",
  },
};

export const CustomBorderRadius: Story = {
  args: {
    borderRadius: "10px",
  },
};

export const CombinedCustomizations: Story = {
  args: {
    height: "30px",
    width: "150px",
    borderRadius: "8px",
  },
};