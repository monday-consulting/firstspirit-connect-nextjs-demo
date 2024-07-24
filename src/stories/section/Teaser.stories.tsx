import type { Meta, StoryObj } from "@storybook/react";
import { Teaser } from "@/components/section/Teaser";

const meta = {
  title: "components/Section/Teaser",
  component: Teaser,
  tags: ["autodocs"],
} satisfies Meta<typeof Teaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageLeft: true,
    data: {
      st_headline: "Headline",
      st_image: {
        src: "https://placehold.co/600x400",
        alt: "Alt Text",
      },
      st_text: "Text",
      st_cta: {
        ref: "Home",
        linkText: "Home",
      },
    },
  },
};
