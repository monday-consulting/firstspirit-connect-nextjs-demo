import type { Meta, StoryObj } from "@storybook/react";
import { Features } from "@/components/section/Features";

const meta: Meta<typeof Features> = {
  title: "components/Section/Features",
  component: Features,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Headline",
    text: [
      {
        content: "Test",
        data: "",
        type: "",
      },
    ],
    features: [
      {
        link: {
          href: "#",
          label: "Home",
        },
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        title: "Title",
        text: [
          {
            content:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            data: "",
            type: "",
          },
        ],
      },
      {
        link: {
          href: "#",
          label: "Home",
        },
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt Text",
        },
        title: "Title",
        text: [
          {
            content:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            data: "",
            type: "",
          },
        ],
      },
    ],
  },
};
