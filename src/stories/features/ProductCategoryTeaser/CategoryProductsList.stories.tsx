import type { Meta, StoryObj } from "@storybook/react";
import { CategoryProductsList } from "@/components/features/ProductCategoryTeaser/CategoryProductsList";
import { DefaultImage, TinyImage } from "@/stories/mocks/imageMocks";
import { DefaultText, MediumText } from "@/stories/mocks/textMocks";

const meta: Meta<typeof CategoryProductsList> = {
  title: "components/Features/ProductCategoryTeaser/CategoryProductsList",
  component: CategoryProductsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CategoryProductsList>;

export const Default: Story = {
  args: {
    products: [
      {
        name: "Product 1",
        description: { content: DefaultText },
        route: "#",
        image: DefaultImage,
      },
      {
        name: "Product 2",
        description: { content: MediumText },
        route: "#",
        image: TinyImage,
      },
    ],
  },
};
