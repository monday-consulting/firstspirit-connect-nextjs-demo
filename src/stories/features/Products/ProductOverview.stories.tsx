import { ProductOverview } from "@/components/features/Products/ProductOverview";
import type { Meta, StoryObj } from "@storybook/react";
import { Default as Product } from "../Products/ProductOverviewItem.stories";

const meta = {
  title: "components/Features/Products/ProductOverview",
  component: ProductOverview,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: [Product.args, Product.args, Product.args],
  },
};
