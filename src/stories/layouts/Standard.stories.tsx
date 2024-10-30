import type { Meta, StoryObj } from "@storybook/react";
import { StandardLayout } from "@/components/layouts/StandardLayout";

const meta = {
  title: "components/Layouts/StandardLayout",
  component: StandardLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof StandardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageBodies: [],
  },
};
