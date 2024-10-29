import type { Meta, StoryObj } from "@storybook/react";
import { PartsTable } from "@/components/section/PartsTable";

const meta = {
  title: "components/Elements/PartsTable",
  component: PartsTable,
  tags: ["autodocs"],
} satisfies Meta<typeof PartsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tableContent: [
      {
        content: "Content 1",
        data: "Data",
        type: "Type",
      },
      {
        content: "Content 2",
        data: "Data",
        type: "Type",
      },
      {
        content: "Content 3",
        data: "Data",
        type: "Type",
      },
    ],
    headline: "Headline",
    text: [
      {
        content: "Text Content 1",
        data: "Data",
        type: "Type",
      },
      {
        content: "Text Content 2",
        data: "Data",
        type: "Type",
      },
    ],
  },
};
