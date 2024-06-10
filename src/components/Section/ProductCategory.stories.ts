import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ProductCategory } from "./ProductCategory.tsx";

const meta = {
  title: 'components/Section/ProductCategory',
  component: ProductCategory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'ProductCategory',
  }
}
