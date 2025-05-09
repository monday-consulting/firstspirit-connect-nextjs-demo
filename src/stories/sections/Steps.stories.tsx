import { Steps } from "@/components/sections/Steps";
import type { StoryObj } from "@storybook/react";
import { StepsItemDefault } from "../features/Steps/StepsItem.stories";
import { Paragraph } from "../globals/RichTextElement.stories";

const meta = {
  title: "components/Sections/Steps",
  component: Steps,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subline: "Subline",
    headline: "Headline",
    richtext: { content: Paragraph.args?.content || [] },
    stepsItems: [
      { ...StepsItemDefault.args, index: 1 },
      { ...StepsItemDefault.args, index: 2 },
      { ...StepsItemDefault.args, index: 3 },
    ],
  },
};
