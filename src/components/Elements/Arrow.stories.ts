import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Arrow } from "./Arrow.tsx";

const meta = {
  title: 'components/Elements/Arrow',
  component: Arrow,
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  }
}
