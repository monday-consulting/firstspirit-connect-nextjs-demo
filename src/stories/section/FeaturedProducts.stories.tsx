import type { StoryObj } from "@storybook/react";
import { FeaturedProducts } from "@/components/section/FeaturedProducts";

const meta = {
  title: "components/Section/FeaturedProducts",
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
        name: "ExampleName",
        abstract: "ExampleAbstract",
        route: "#",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt text",
        },
        name: "ExampleName",
        abstract: "ExampleAbstract",
        route: "#",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt text",
        },
        name: "ExampleName",
        abstract: "ExampleAbstract",
        route: "#",
      },
    ],
  },
};
