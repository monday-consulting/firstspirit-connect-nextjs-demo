import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "@/components/layouts/Loading";

const meta = {
  title: "components/Layouts/Loading",
  component: Loading,
  tags: ["autodocs"],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
