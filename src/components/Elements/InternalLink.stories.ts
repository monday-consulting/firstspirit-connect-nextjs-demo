import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { InternalLink } from "./InternalLink.tsx";

const meta = {
  title: 'components/Elements/InternalLink',
  component: InternalLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'InternalLink',
  }
}