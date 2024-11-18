import type { Meta, StoryObj } from "@storybook/react";
import {
  ProductTeaser,
  type ProductTeaserProps,
} from "@/components/features/ProductCategoryTeaser/ProductTeaser";
import { defaultImage } from "@/stories/mocks/imageMocks";
import { defaultText } from "@/stories/mocks/textMocks";

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

export const productTeaserDefaultArgs: ProductTeaserProps = {
  name: "Example Product",
  description: {
    content: defaultText,
  },
  image: defaultImage,
  route: "#",
};

export const Default: Story = {
  args: productTeaserDefaultArgs,
};
