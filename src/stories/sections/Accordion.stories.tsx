import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@/components/sections/Accordion";

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
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pellentesque semper. Nam vel auctor risus, in convallis nisl. Sed turpis mi, consequat nec tellus quis, ullamcorper dignissim felis.",
        data: "",
        type: "",
      },
    ],
  },
};
