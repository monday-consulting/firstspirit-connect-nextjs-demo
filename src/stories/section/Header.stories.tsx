import type { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/section/Header";

const meta: Meta<typeof Header> = {
  title: "components/Section/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: { key: "value" },
  },
};
