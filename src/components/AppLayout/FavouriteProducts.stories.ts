import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FavouriteProduct } from "./FavouriteProduct.tsx";

const meta = {
  title: 'components/AppLayout/FavouriteProduct',
  component: FavouriteProduct,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'FavouriteProduct',
  }
}
