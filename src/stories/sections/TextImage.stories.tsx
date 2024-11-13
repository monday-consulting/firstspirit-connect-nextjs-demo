import { TextImage, type TextImageLayout } from "@/components/sections/TextImage";
import type { Meta, StoryObj } from "@storybook/react";
import { defaultImage } from "../mocks/imageMocks";
import { defaultText } from "../mocks/textMocks";

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
    image: defaultImage,
    text: {
      content: [
        {
          content: defaultText,
          data: "example",
          type: "paragraph",
        },
        {
          content: defaultText,
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
