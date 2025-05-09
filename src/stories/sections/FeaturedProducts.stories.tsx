import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import type { StoryObj } from "@storybook/react";
import { featuredProductItemDefaultArgs } from "../features/FeaturedProducts/FeaturedProductItem.stories";

const meta = {
  title: "components/Sections/FeaturedProducts",
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
      featuredProductItemDefaultArgs,
      featuredProductItemDefaultArgs,
      featuredProductItemDefaultArgs,
    ],
  },
};
