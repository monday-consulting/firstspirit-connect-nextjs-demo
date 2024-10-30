import type { Meta, StoryObj } from "@storybook/react";
import { Teaser } from "@/components/sections/Teaser";

const meta = {
  title: "components/Sections/Teaser",
  component: Teaser,
  tags: ["autodocs"],
} satisfies Meta<typeof Teaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageStart: true,
    headline: "Headline",
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt Text",
    },
    text: {
      content: [
        {
          content:
            "Textd wdawd wad awdjaklwj dlkawjdkl jawkldjaw lkdjalwökjdklaöwjdkajwlk ödjwakl djlkawjd lkwajdkl wajkdjwa kldjöklaw jdklwjd klwajdkl waj",
          data: "test",
          type: "paragraph",
        },
      ],
    },
    cta: {
      href: "Home",
      label: "Home",
    },
  },
};
