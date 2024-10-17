import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@/components/elements/Accordion";

const meta = {
  title: "components/Elements/Accordion",
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
        content:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        data: "",
        type: "",
      },
    ],
  },
};
