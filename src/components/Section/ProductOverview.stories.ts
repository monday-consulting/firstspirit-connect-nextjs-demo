import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ProductOverview } from "./ProductOverview.tsx";

const meta = {
  title: 'components/Section/ProductOverview',
  component: ProductOverview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'ProductOverview',
  }
}
