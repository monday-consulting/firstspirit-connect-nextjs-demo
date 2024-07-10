import type { Meta, StoryObj } from "@storybook/react";
import { Arrow } from "@/components/elements/Arrow";

const meta: Meta<typeof Arrow> = {
  title: "components/Elements/Arrow",
  component: Arrow,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
