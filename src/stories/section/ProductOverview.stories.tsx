import type { Meta, StoryObj } from "@storybook/react";
import { ProductOverview } from "@/components/section/ProductOverview";

const meta = {
  title: "components/Section/ProductOverview",
  component: ProductOverview,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: [
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        categories: ["Category 1", "Category 2"],
        name: "Product 1",
        price: "1 €",
        id: "product 1",
        route: "#",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        categories: ["Category 4"],
        name: "Product 2",
        price: "2 €",
        id: "product 2",
        route: "#",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        categories: ["Category 1", "Category 2"],
        name: "Product 1",
        price: "3 €",
        id: "product 1",
        route: "#",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        categories: ["Category 4"],
        name: "Product 2",
        price: "4 €",
        id: "product 2",
        route: "#",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        categories: ["Category 1", "Category 2"],
        name: "Product 1",
        price: "123 €",
        id: "product 1",
        route: "#",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        categories: ["Category 4"],
        name: "Product 2",
        price: "123321 €",
        id: "product 2",
        route: "#",
      },
    ],
  },
};
