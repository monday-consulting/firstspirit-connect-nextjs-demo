import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Logo } from "./Logo.tsx";

const meta = {
  title: 'components/AppLayout/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Logo',
  }
}
