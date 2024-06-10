import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Steps } from "./Steps.tsx";

const meta = {
  title: 'components/Section/Steps',
  component: Steps,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Steps',
  }
}
