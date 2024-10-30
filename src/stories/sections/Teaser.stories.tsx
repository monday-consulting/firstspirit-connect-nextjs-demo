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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pellentesque semper. Nam vel auctor risus, in convallis nisl.",
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
