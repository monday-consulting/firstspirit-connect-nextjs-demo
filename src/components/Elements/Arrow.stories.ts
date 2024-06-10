import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Arrow } from "./Arrow.tsx";

const meta = {
  title: 'components/Elements/Arrow',
  component: Arrow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Arrow',
  }
}
