import { RichTextElement, type RichTextElementProps } from "@/components/globals/RichTextElement";
import type { Meta, StoryObj } from "@storybook/react";
import { longText, shortText } from "../mocks/textMocks";

const meta: Meta<typeof RichTextElement> = {
  title: "components/Globals/RichTextElement",
  component: RichTextElement,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const paragraphArgs: RichTextElementProps = {
  content: [
    {
      content: longText,
      data: {},
      type: "paragraph",
    },
    {
      content: shortText,
      data: {},
      type: "paragraph",
    },
  ],
};

export const Paragraph: Story = {
  args: {
    content: paragraphArgs.content,
  },
};

export const Link: Story = {
  args: {
    content: [
      {
        content: "Example Link",
        data: { href: "https://google.com" },
        type: "link",
      },
    ],
  },
};

export const List: Story = {
  args: {
    content: [
      {
        content: "Item 1",
        data: { href: "https://google.com" },
        type: "list",
      },
      {
        content: "Item 2",
        data: { href: "https://google.com" },
        type: "list",
      },
      {
        content: "Item 3",
        data: { href: "https://google.com" },
        type: "list",
      },
    ],
  },
};
