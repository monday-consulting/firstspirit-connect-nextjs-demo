import type { Meta, StoryObj } from "@storybook/react";
import { ProductOverviewItem } from "@/components/features/Products/ProductOverviewItem";
import { Default as Product } from "./ProductDetail.stories";

const meta = {
  title: "components/Features/Products/ProductOverviewItem",
  component: ProductOverviewItem,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductOverviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: Product.args?.product?.image,
    category: "Test Category",
    name: Product.args?.product?.name,
    price: Product.args?.product?.price,
    route: "#",
    id: Product.args?.product?.id,
  },
};
