import type { Meta, StoryObj } from "@storybook/react";
import { ProductCategory } from "@/components/section/ProductCategory";

const meta = {
  title: "components/Section/ProductCategory",
  component: ProductCategory,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: [
      {
        id: "Product 1",
        categories: [
          {
            type: "Dataset",
            id: "Category 1",
            previewId: "Category 1",
            schema: "Category Schema",
            entityType: "EntityType",
          },
        ],
      },
    ],
  },
};
