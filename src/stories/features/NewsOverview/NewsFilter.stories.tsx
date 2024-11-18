import type { Meta, StoryObj } from "@storybook/react";
import { NewsFilter } from "@/components/features/NewsOverview/NewsFilter";
import { Default as NewsTeaser } from "./NewsTeaser.stories";

const meta = {
  title: "components/Features/NewsOverview/NewsFilter",
  component: NewsFilter,
  tags: ["autodocs"],
} satisfies Meta<typeof NewsFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    news: [NewsTeaser.args.newsEntity, NewsTeaser.args.newsEntity, NewsTeaser.args.newsEntity],
    categories: ["Category 1", "Category 2", "Category 3"],
  },
};
