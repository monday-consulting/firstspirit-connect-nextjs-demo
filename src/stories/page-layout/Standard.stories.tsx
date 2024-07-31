import type { Meta, StoryObj } from "@storybook/react";
import { StandardLayout } from "@/components/page-layout/StandardLayout";

const meta = {
  title: "components/PageLayout/StandardLayout",
  component: StandardLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof StandardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    pageBodies: [],
  },
};
