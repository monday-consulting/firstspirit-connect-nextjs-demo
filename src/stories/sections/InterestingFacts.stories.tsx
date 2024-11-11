import type { Meta, StoryObj } from "@storybook/react";
import { InterestingFacts } from "@/components/sections/InterestingFacts";
import { DefaultImage } from "../mocks/imageMocks";

const meta = {
  title: "components/Sections/InterestingFacts",
  component: InterestingFacts,
  tags: ["autodocs"],
} satisfies Meta<typeof InterestingFacts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundImage: DefaultImage,
    tagline: "Tagline",
    headline: "Headline",
    text: "Text",
    counters: [
      {
        id: "1",
        number: 1,
        text: "Text",
      },
      {
        id: "2",
        number: 2,
        text: "Text",
      },
    ],
  },
};
