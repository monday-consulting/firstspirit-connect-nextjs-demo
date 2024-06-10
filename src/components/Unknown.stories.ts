import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Unknown } from "./Unknown.tsx";

const meta = {
  title: 'components/Unknown',
  component: Unknown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Unknown',
  }
}
