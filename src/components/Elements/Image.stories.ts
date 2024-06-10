import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Image } from "./Image.tsx";

const meta = {
  title: 'components/Elements/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Image',
  }
}
