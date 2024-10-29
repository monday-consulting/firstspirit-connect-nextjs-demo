import type { Meta, StoryObj } from "@storybook/react";
import { ImageComponent } from "@/components/elements/Image";

const meta = {
  title: "components/Elements/ImageComponent",
  component: ImageComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof ImageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    src: "https://placehold.co/600x400",
    alt: "Alt Text",
    rounded: "xl",
    className: "h-60 w-80",
  },
};
