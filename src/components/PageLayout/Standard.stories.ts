import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Standard } from "./Standard.tsx";

const meta = {
  title: 'components/PageLayout/Standard',
  component: Standard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Standard',
  }
}
