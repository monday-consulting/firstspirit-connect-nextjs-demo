import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ProductOverviewItem } from "./ProductOverviewItem.tsx";

const meta = {
  title: 'components/Section/ProductOverviewItem',
  component: ProductOverviewItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'ProductOverviewItem',
  }
}
