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
          content:
            "Textd wdawd wad awdjaklwj dlkawjdkl jawkldjaw lkdjalwökjdklaöwjdkajwlk ödjwakl djlkawjd lkwajdkl wajkdjwa kldjöklaw jdklwjd klwajdkl waj",
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
