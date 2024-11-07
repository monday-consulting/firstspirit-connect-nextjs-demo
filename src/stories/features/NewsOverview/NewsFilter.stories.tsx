import type { Meta, StoryObj } from "@storybook/react";
import { NewsFilter } from "@/components/features/NewsOverview/NewsFilter";
import { DefaultImage, TinyImage } from "@/stories/mocks/imageMocks";
import { DefaultText } from "@/stories/mocks/textMocks";

const meta = {
  title: "components/Features/NewsOverview/NewsFilter",
  component: NewsFilter,
  tags: ["autodocs"],
} satisfies Meta<typeof NewsFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    news: [
      {
        image: DefaultImage,
        categories: ["Category 1", "Category 2"],
        author: "John Doe",
        date: "December 9, 2023",
        headline: "Headline",
        teaserText: DefaultText,
      },
      {
        image: TinyImage,
        categories: ["Category 2", "Category 3"],
        author: "John Doe",
        date: "September 12, 2022",
        headline: "Headline",
        teaserText: DefaultText,
      },
    ],
    categories: ["Category 1", "Category 2", "Category 3"],
  },
};
