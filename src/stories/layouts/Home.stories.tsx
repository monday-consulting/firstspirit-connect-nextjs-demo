import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "@/components/layouts/Home";

const meta = {
  title: "components/Layouts/Home",
  component: Home,
  tags: ["autodocs"],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageBodies: [
      {
        name: "top",
        previewId: "abc",
      },
    ],
  },
};
