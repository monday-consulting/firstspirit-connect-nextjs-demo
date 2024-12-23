import type { Meta, StoryObj } from "@storybook/react";
import { RichTextElement } from "@/components/globals/RichTextElement";

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

export const Paragraph: Story = {
  args: {
    content: [
      {
        content: "Paragraph Type",
        data: "example",
        type: "paragraph",
      },
      {
        content: "Block Type",
        data: "example",
        type: "block",
      },
    ],
  },
};

export const Link: Story = {
  args: {
    content: [
      {
        content: "Example Link",
        data: "exampleUrl.com",
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
        data: "exampleUrl.com",
        type: "list",
      },
      {
        content: "Item 2",
        data: "exampleUrl.com",
        type: "list",
      },
      {
        content: "Item 3",
        data: "exampleUrl.com",
        type: "list",
      },
    ],
  },
};
