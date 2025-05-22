import { CategoryProductsList } from "@/components/features/ProductCategoryTeaser/CategoryProductsList";
import type { Meta, StoryObj } from "@storybook/react";
import { productTeaserDefaultArgs } from "./ProductTeaser.stories";

const meta: Meta<typeof CategoryProductsList> = {
  title: "components/Features/ProductCategoryTeaser/CategoryProductsList",
  component: CategoryProductsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CategoryProductsList>;

export const Default: Story = {
  args: {
    products: [productTeaserDefaultArgs, productTeaserDefaultArgs, productTeaserDefaultArgs],
  },
};
