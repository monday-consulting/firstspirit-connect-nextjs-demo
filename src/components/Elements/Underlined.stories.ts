import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Underlined } from "./Underlined.tsx";

const meta = {
  title: 'components/Elements/Underlined',
  component: Underlined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Underlined',
  }
}
