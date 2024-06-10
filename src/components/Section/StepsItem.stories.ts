import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { StepsItem } from "./StepsItem.tsx";

const meta = {
  title: 'components/Section/StepsItem',
  component: StepsItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'StepsItem',
  }
}
