import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Feature } from "./Feature.tsx";

const meta = {
  title: 'components/Section/Feature',
  component: Feature,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Feature',
  }
}