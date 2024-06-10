import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Navigation } from "./Navigation.tsx";

const meta = {
  title: 'components/AppLayout/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Navigation',
  }
}
