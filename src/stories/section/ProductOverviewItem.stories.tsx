import type { Meta, StoryObj } from "@storybook/react";
import { ProductOverviewItem } from "@/components/section/ProductOverviewItem";

const meta = {
  title: "components/Section/ProductOverviewItem",
  component: ProductOverviewItem,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductOverviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt Text",
    },
    categories: ["Category 1", "Category 2", "Category 3"],
    name: "Product",
    price: 23,
    route: "Product",
    id: "123",
  },
};
