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
    category: "Category 1",
    name: "Product",
    price: "23",
    route: "#",
    id: "123",
  },
};
