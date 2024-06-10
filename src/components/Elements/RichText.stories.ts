import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { RichText } from "./RichText.tsx";

const meta = {
  title: 'components/Elements/RichText',
  component: RichText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'RichText',
  }
}
