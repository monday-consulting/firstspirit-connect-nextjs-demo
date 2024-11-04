import type { Meta, StoryObj } from "@storybook/react";
import { ImageComponent } from "@/components/global-components/ImageComponent";

const meta = {
  title: "components/Global Components/ImageComponent",
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
