import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Features } from "./Features.tsx";

const meta = {
  title: 'components/Section/Features',
  component: FeaturedProducts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Features',
  }
}
