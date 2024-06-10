import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FeaturedProductItem } from "./FeaturedProductItem.tsx";

const meta = {
  title: 'components/Elements/FeaturedProductItem',
  components: FeaturedProductItem,
  paramters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'FeaturedProductItem',
  }
}
