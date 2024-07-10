import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "@/components/app-layout/Loading";

const meta = {
  title: "components/AppLayout/Loading",
  component: Loading,
  tags: ["autodocs"],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};