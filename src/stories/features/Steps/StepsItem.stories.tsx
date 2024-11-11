import type { Meta, StoryObj } from "@storybook/react";
import { StepsItem } from "@/components/features/Steps/StepsItem";
import { DefaultText } from "@/stories/mocks/textMocks";

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
        content: DefaultText,
        data: "example",
        type: "paragraph",
      },
      {
        content: DefaultText,
        data: "example",
        type: "block",
      },
    ],
    index: 1,
  },
};
