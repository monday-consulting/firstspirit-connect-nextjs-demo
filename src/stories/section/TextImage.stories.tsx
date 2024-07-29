import { TextImage } from "@/components/section/TextImage";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Section/TextImage",
  component: TextImage,
  tags: ["autodocs"],
} satisfies Meta<typeof TextImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    twoColumn: true,
    headline: "Headline",
    subheadline: "SubHeadline",
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt Text",
    },
    text: {
      content: [
        {
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
          data: "example",
          type: "paragraph",
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
          data: "example",
          type: "block",
        },
      ],
      data: "",
      type: "",
    },
    layout: "image-text",
  },
  argTypes: {
    layout: {
      control: { type: "select" },
      options: ["image-text", "text-image"],
    },
  },
};
