import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@/components/sections/Accordion";
import { mediumText } from "../mocks/textMocks";

const meta = {
  title: "components/Sections/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Accordion title",
    content: [
      {
        content: mediumText,
        data: {},
        type: "",
      },
    ],
  },
};
