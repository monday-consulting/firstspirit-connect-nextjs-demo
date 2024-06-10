import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { LatestNews } from "./LatestNews.tsx";

const meta = {
  title: 'components/Section/LatestNews',
  component: LatestNews,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'LatestNews',
  }
}
