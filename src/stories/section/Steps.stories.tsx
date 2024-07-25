import type { Meta, StoryObj } from "@storybook/react";
import { Steps } from "@/components/section/Steps";

const meta = {
  title: "components/Section/Steps",
  component: Steps,
  tags: ["autodocs"],
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subline: "Subline",
    headline: "Headline",
    text: "Text",
    steps: [
      {
        title: "Title",
        text: "Text",
        index: 1,
        id: "1",
      },
      {
        title: "Title",
        text: "Text",
        index: 2,
        id: "2",
      },
    ],
  },
};
