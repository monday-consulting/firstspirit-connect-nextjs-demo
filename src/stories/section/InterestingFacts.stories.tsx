import type { Meta, StoryObj } from "@storybook/react";
import { InterestingFacts } from "@/components/section/InterestingFacts";

const meta = {
  title: "components/Section/InterestingFacts",
  component: InterestingFacts,
  tags: ["autodocs"],
} satisfies Meta<typeof InterestingFacts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundImage: {
      src: "https://placehold.co/600x400",
      alt: "Alt Text",
    },
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
