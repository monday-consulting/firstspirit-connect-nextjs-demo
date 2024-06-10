import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Footer } from "./Footer.tsx";

const meta = {
  title: 'components/AppLayout/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Footer',
  }
}
