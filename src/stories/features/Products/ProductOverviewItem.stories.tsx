import { ProductOverviewItem } from "@/components/features/Products/ProductOverviewItem";
import { defaultImage } from "@/stories/mocks/imageMocks";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Features/Products/ProductOverviewItem",
  component: ProductOverviewItem,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductOverviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: defaultImage,
    category: "Category 1",
    name: "Example Product",
    price: "23",
    route: "#",
    id: "123",
  },
};
