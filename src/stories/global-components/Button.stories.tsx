import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/global-components/Button";

const meta = {
  title: "components/Global Components/Button",
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
