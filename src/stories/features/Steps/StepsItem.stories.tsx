import type { Meta, StoryObj } from "@storybook/react";
import { StepsItem } from "@/components/features/Steps/StepsItem";

const meta = {
  title: "components/Features/Steps/StepsItem",
  component: StepsItem,
  tags: ["autodocs"],
} satisfies Meta<typeof StepsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StepsItemDefault: Story = {
  args: {
    title: "Title",
    text: [
      {
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
        data: "example",
        type: "paragraph",
      },
      {
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
        data: "example",
        type: "block",
      },
    ],
    index: 1,
  },
};
