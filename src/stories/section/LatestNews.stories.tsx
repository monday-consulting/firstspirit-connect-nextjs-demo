import type { Meta, StoryObj } from "@storybook/react";
import { LatestNews } from "@/components/section/LatestNews";

const meta = {
  title: "components/Section/LatestNews",
  component: LatestNews,
  tags: ["autodocs"],
} satisfies Meta<typeof LatestNews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      st_headline: "LatestNews",
      st_newstag: {
        type: "type",
        key: "key",
        value: "value",
      },
    },
  },
};
