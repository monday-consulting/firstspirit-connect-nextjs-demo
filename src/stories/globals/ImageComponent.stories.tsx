import { ImageComponent } from "@/components/globals/ImageComponent";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Globals/ImageComponent",
  component: ImageComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof ImageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    src: "https://placehold.co/600x400",
    alt: "Alt Text",
    className: "h-60 w-80",
  },
};
