import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MobileNavigation } from "./MobileNavigation.tsx";

const meta = {
  title: 'components/AppLayout/MobileNavigation',
  component: MobileNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'MobileNavigation',
  }
}
