import type { Meta, StoryObj } from "@storybook/react";
import { NewsTeaser } from "@/components/features/NewsOverview/NewsTeaser";
import { defaultImage } from "@/stories/mocks/imageMocks";
import { defaultText } from "@/stories/mocks/textMocks";

const meta = {
  title: "components/Features/NewsOverview/NewsTeaser",
  component: NewsTeaser,
  tags: ["autodocs"],
} satisfies Meta<typeof NewsTeaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    newsEntity: {
      image: defaultImage,
      categories: ["Smarthome", "Technology"],
      author: "John Doe",
      date: "December 9, 2022",
      headline: "Headline",
      teaserText: defaultText,
    },
  },
};
