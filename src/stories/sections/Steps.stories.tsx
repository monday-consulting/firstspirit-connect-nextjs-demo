import type { StoryObj } from "@storybook/react";
import { Steps } from "@/components/sections/Steps";
import { Underlined } from "../elements/RichTextElement.stories";
import { StepsItemDefault } from "../elements/StepsItem.stories";

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
    richtext: { content: Underlined.args?.content || [] },
    stepsItems: [StepsItemDefault.args, StepsItemDefault.args, StepsItemDefault.args],
  },
};
