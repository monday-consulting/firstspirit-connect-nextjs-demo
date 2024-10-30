import type { Meta, StoryObj } from "@storybook/react";
import { NewsFilter } from "@/components/features/News/NewsFilter";

const meta = {
  title: "components/Features/News/NewsFilter",
  component: NewsFilter,
  tags: ["autodocs"],
} satisfies Meta<typeof NewsFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    news: [
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        categories: ["Category 1", "Category 2"],
        author: "John Doe",
        date: "December 9, 2023",
        headline: "Headline",
        teaserText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pellentesque semper. Nam vel auctor risus, in convallis nisl.",
      },
      {
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        categories: ["Category 2", "Category 3"],
        author: "John Doe",
        date: "September 12, 2022",
        headline: "Headline",
        teaserText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pellentesque semper. Nam vel auctor risus, in convallis nisl.",
      },
    ],
    categories: ["Category 1", "Category 2", "Category 3"],
  },
};
