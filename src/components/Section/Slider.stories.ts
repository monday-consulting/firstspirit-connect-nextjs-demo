import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Slider } from "./Slider.tsx";

const meta = {
  title: 'components/Section/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Slider',
  }
}
