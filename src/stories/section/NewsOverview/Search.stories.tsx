import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "@/components/section/NewsOverview/Search";

const meta = {
  title: "components/section/NewsOverview/Search",
  component: Search,
  tags: ["autodocs"],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
