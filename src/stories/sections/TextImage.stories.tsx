import type { Meta, StoryObj } from "@storybook/react";
import { TextImage, type TextImageLayout } from "@/components/sections/TextImage";
import { paragraphArgs } from "../globals/RichTextElement.stories";
import { defaultImage } from "../mocks/imageMocks";

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
      content: paragraphArgs.content,
    },
    image: defaultImage,
    text: {
      content: paragraphArgs.content,
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
