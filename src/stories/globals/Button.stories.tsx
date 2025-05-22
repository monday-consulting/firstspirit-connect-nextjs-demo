import { Button } from "@/components/globals/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Globals/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Button",
    link: "/",
  },
};
