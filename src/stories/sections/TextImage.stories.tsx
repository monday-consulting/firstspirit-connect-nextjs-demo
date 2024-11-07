import { TextImage, type TextImageLayout } from "@/components/sections/TextImage";
import type { Meta, StoryObj } from "@storybook/react";
import { DefaultImage } from "../mocks/imageMocks";
import { DefaultText, ShortText } from "../mocks/textMocks";

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
    image: DefaultImage,
    text: {
      content: [
        {
          content: DefaultText,
          data: "example",
          type: "paragraph",
        },
        {
          content: ShortText,
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
