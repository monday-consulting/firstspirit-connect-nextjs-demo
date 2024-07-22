import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "@/components/page-layout/Home";

const meta = {
  title: "components/PageLayout/Home",
  component: Home,
  tags: ["autodocs"],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    path: "Home",
  },
};
