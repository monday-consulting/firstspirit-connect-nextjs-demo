import type { Meta, StoryObj } from "@storybook/react";
import { NotificationNumber } from "@/components/elements/NotificationNumber";

const meta = {
  title: "components/Elements/NotificationNumber",
  component: NotificationNumber,
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primary: true,
    amount: 1,
  },
};
