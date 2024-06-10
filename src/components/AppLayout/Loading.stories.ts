import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Loading } from "./Loading.tsx";

const meta = {
  title: 'components/AppLayout/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Loading',
  }
}
