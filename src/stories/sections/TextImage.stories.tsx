import { TextImage, type TextImageLayout } from "@/components/sections/TextImage";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Sections/TextImage",
  component: TextImage,
  tags: ["autodocs"],
} satisfies Meta<typeof TextImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    twoColumn: true,
    headline: "Headline",
    subheadline: {
      content: [
        {
          content: "Subheadline",
          data: "test",
          type: "paragraph",
        },
      ],
    },
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt Text",
    },
    text: {
      content: [
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pellentesque semper. Nam vel auctor risus, in convallis nisl.",
          data: "example",
          type: "paragraph",
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pellentesque semper. Nam vel auctor risus, in convallis nisl.",
          data: "example",
          type: "block",
        },
      ],
    },
    layout: "image-text",
  },
  argTypes: {
    layout: {
      control: { type: "select" },
      options: ["image-text", "text-image"] as TextImageLayout[],
    },
  },
};
