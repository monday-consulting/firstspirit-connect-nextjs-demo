import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CategoryProductsDescription } from "./CategoryProductsDescription.tsx";

const meta = {
  title: 'components/Section/CategoryProductsDescription',
  component: CategoryProductsDescription,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'CategoryProductsDescription',
  }
}
