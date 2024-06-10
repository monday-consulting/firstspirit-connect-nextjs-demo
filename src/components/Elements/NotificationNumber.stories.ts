import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { NotificationNumber } from "./NotificationNumber.tsx";

const meta = {
  title: 'components/Elements/NotificationNumber',
  components: NotificationNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'NotificationNumber',
  }
}
