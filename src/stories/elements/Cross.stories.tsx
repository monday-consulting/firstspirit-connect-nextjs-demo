import type { Meta, StoryObj } from "@storybook/react";
import Cross from "@/components/elements/Cross";

const meta: Meta<typeof Cross> = {
  title: "components/Elements/Cross",
  component: Cross,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
