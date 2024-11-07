import type { Meta, StoryObj } from "@storybook/react";
import { NewsOverview } from "@/components/features/NewsOverview/NewsOverview";
import { DefaultImage, HugeImage, SmallImage } from "@/stories/mocks/imageMocks";
import { DefaultText } from "@/stories/mocks/textMocks";

const meta = {
  title: "components/Features/NewsOverview/NewsOverview",
  component: NewsOverview,
  tags: ["autodocs"],
} satisfies Meta<typeof NewsOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    news: [
      {
        image: DefaultImage,
        categories: ["Smarthome", "Gadgets"],
        author: "John Doe",
        date: "December 9, 2022",
        headline: "Headline 1",
        teaserText: DefaultText,
      },
      {
        image: SmallImage,
        categories: ["Smarthome", "Technology"],
        author: "John Doe",
        date: "December 9, 2022",
        headline: "Headline 2",
        teaserText: DefaultText,
      },
      {
        image: HugeImage,
        categories: ["Green Tech", "Technology"],
        author: "John Doe",
        date: "December 9, 2022",
        headline: "Headline 3",
        teaserText: DefaultText,
      },
    ],
  },
};
