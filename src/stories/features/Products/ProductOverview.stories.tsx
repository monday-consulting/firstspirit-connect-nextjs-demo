import type { Meta, StoryObj } from "@storybook/react";
import { ProductOverview } from "@/components/features/Products/ProductOverview";
import { Default as Product } from "../Products/ProductOverviewItem.stories";
import { defaultImage } from "@/stories/mocks/imageMocks";

const meta = {
  title: "components/Features/Products/ProductOverview",
  component: ProductOverview,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: [
      Product.args,
      {
        image: defaultImage,
        category: "Test Category",
        name: "Smart Lock Kit",
        price: "$215",
        route: "#",
        id: "Smart Lock Kit",
      },
      {
        image: defaultImage,
        category: "Test Category",
        name: "Wireless Smart Socket",
        price: "$35",
        route: "#",
        id: "Wireless Smart Socket",
      },
    ],
  },
};
