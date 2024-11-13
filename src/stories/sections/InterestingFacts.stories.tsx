import type { Meta, StoryObj } from "@storybook/react";
import { InterestingFacts } from "@/components/sections/InterestingFacts";
import { defaultImage } from "../mocks/imageMocks";
import { defaultText } from "../mocks/textMocks";

const meta = {
  title: "components/Sections/InterestingFacts",
  component: InterestingFacts,
  tags: ["autodocs"],
} satisfies Meta<typeof InterestingFacts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundImage: defaultImage,
    tagline: "Tagline",
    headline: "Headline",
    text: "Text",
    counters: [
      {
        id: "1",
        number: 1,
        text: defaultText,
      },
      {
        id: "2",
        number: 2,
        text: defaultText,
      },
    ],
  },
};
