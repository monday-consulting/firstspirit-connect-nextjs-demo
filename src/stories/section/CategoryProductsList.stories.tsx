import type { Meta, StoryObj } from "@storybook/react";
import {
  CategoryProductsList,
  type CategoryProductListProps,
} from "@/components/elements/CategoryProductsList";

const meta: Meta<typeof CategoryProductsList> = {
  title: "components/Elements/CategoryProductsList",
  component: CategoryProductsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CategoryProductsList>;

const mockProductData: CategoryProductListProps = {
  products: [
    {
      name: "Produkt 1",
      description: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      route: "#",
      image: {
        src: "https://via.placeholder.com/640x480",
        alt: "Alt text",
      },
    },
  ],
};

export const Default: Story = {
  args: {
    products: mockProductData.products,
  },
};
