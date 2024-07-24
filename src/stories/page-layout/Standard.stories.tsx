import type { Meta, StoryObj } from "@storybook/react";
import { Standard } from "@/components/page-layout/Standard";

const meta = {
  title: "components/PageLayout/Standard",
  component: Standard,
  tags: ["autodocs"],
} satisfies Meta<typeof Standard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    path: "Standard",
  },
};
