import { NotificationNumber } from "@/components/layouts/Navigation/Favorites/NotificationNumber";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Layouts/Navigation/Favorites/NotificationNumber",
  component: NotificationNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amount: 1,
  },
};
