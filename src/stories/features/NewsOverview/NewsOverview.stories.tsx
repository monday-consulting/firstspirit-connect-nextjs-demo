import type { Meta, StoryObj } from "@storybook/react";
import { NewsOverview } from "@/components/features/NewsOverview/NewsOverview";
import { Default as NewsTeaser } from "./NewsTeaser.stories";

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
      NewsTeaser.args.newsEntity,
      NewsTeaser.args.newsEntity,
      NewsTeaser.args.newsEntity,
      NewsTeaser.args.newsEntity,
    ],
  },
};
