import type { Meta, StoryObj } from "@storybook/react";
import { FloatingMCPChat } from "@/components/features/McpChat/FloatingMCPChat";

const meta = {
  title: "components/Features/McpChat/FloatingMCPChat",
  component: FloatingMCPChat,
  tags: ["autodocs"],
} satisfies Meta<typeof FloatingMCPChat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    enabled: true,
  },
};
