import type { StoryObj } from "@storybook/react";
import { StepsSection } from "@/components/section/StepsSection";
import { Underlined } from "../elements/RichTextElement.stories";
import { StepsItemDefault } from "../elements/StepsItem.stories";

const meta = {
  title: "components/Section/StepsSection",
  component: StepsSection,
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
    richtext: {
      content: Underlined.args?.content || [],
      data: "",
      type: "",
    },
    stepsItems: [StepsItemDefault.args, StepsItemDefault.args, StepsItemDefault.args],
  },
};
