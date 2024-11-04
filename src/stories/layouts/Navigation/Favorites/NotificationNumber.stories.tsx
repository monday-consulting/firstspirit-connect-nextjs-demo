import type { Meta, StoryObj } from "@storybook/react";
import { NotificationNumber } from "@/components/layouts/Navigation/Favorites/NotificationNumber";

const meta = {
  title: "components/Layout/Navigation/Favorites/NotificationNumber",
  component: NotificationNumber,
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amount: 1,
  },
};
