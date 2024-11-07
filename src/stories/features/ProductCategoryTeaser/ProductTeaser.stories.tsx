import type { Meta, StoryObj } from "@storybook/react";
import { ProductTeaser } from "@/components/features/ProductCategoryTeaser/ProductTeaser";
import { DefaultImage } from "@/stories/mocks/imageMocks";
import { DefaultText } from "@/stories/mocks/textMocks";

const meta: Meta<typeof ProductTeaser> = {
  title: "components/Features/ProductCategoryTeaser/ProductTeaser",
  component: ProductTeaser,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductTeaser>;

export const Default: Story = {
  args: {
    name: "Test Teaser",
    description: { content: DefaultText },
    image: DefaultImage,
    route: "#",
  },
};
