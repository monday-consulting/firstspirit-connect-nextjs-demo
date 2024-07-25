import type { Meta, StoryObj } from "@storybook/react";
import { StepsItem } from "@/components/elements/StepsItem";

const meta = {
  title: "components/Elements/StepsItem",
  component: StepsItem,
  tags: ["autodocs"],
} satisfies Meta<typeof StepsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    text: "Text",
    index: 2,
  },
};
