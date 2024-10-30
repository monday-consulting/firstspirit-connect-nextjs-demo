import type { StoryObj } from "@storybook/react";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";

const meta = {
  title: "components/Sections/FeaturedProducts",
  component: FeaturedProducts,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Headline",
    subline: "This is a subline",
    products: [
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt text",
        },
        name: "Example Name",
        abstract: "Example Abstract",
        route: "#",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt text",
        },
        name: "Example Name",
        abstract: "Example Abstract",
        route: "#",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt text",
        },
        name: "Example Name",
        abstract: "Example Abstract",
        route: "#",
      },
    ],
  },
};
