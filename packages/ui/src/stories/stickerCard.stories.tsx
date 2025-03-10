import type { Meta, StoryObj } from "@storybook/react";
import StickerCard from "../components/sticker-card";

const meta: Meta<typeof StickerCard> = {
  title: "Components/StickerCard",
  component: StickerCard,
  argTypes: {
    titleTransKey: {
      control: "text",
      description: "Texto del título",
    },
    icon: {
      control: "object",
      description: "Ícono del card",
    },
    color: {
      control: "color",
      description: "Color del borde inferior",
    },
    price: {
      control: "number",
      description: "Precio mostrado",
    },
    indicator: {
      control: "radio",
      options: ["up", "down"],
      description: "Indicador de tendencia (arriba o abajo)",
    },
    indicatorText: {
      control: "text",
      description: "Texto del indicador",
    },
    note: {
      control: "text",
      description: "Nota adicional",
    },
    link: {
      control: "text",
      description: "Enlace",
    },
    linkText: {
      control: "text",
      description: "Texto del enlace",
    },
  },
};

export default meta;

type Story = StoryObj<typeof StickerCard>;

export const Default: Story = {
  args: {
    titleTransKey: "Total Revenue",
    icon: <span>💰</span>,
    price: 1000,
    color: "#03D3B5",
  },
};

export const WithUpIndicator: Story = {
  args: {
    titleTransKey: "Total Revenue",
    icon: <span>💰</span>,
    price: 1000,
    color: "#03D3B5",
    indicator: "up",
    indicatorText: "10%",
    note: "vs last month",
  },
};

export const WithDownIndicator: Story = {
  args: {
    titleTransKey: "Total Revenue",
    icon: <span>💰</span>,
    price: 1000,
    color: "#FC6687",
    indicator: "down",
    indicatorText: "5%",
    note: "vs last month",
  },
};

export const WithLink: Story = {
  args: {
    titleTransKey: "Total Revenue",
    icon: <span>💰</span>,
    price: 1000,
    color: "#7C3AED",
    link: "https://example.com",
    linkText: "View Details",
  },
};