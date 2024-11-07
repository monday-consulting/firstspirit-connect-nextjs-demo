import type { Meta, StoryObj } from "@storybook/react";
import { ProductOverviewItem } from "@/components/features/Products/ProductOverviewItem";
import { DefaultImage } from "@/stories/mocks/imageMocks";

const meta = {
  title: "components/Features/Products/ProductOverviewItem",
  component: ProductOverviewItem,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductOverviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: DefaultImage,
    category: "Category 1",
    name: "Product",
    price: "23",
    route: "#",
    id: "123",
  },
};
