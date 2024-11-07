import type { Meta, StoryObj } from "@storybook/react";
import { ProductOverview } from "@/components/features/Products/ProductOverview";
import {
  DefaultImage,
  HighImage,
  HugeImage,
  SmallImage,
  TinyImage,
  WideImage,
} from "@/stories/mocks/imageMocks";

const meta = {
  title: "components/Features/Products/ProductOverview",
  component: ProductOverview,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: [
      {
        image: DefaultImage,
        category: "Category 3",
        name: "Product 1",
        price: "1 €",
        id: "product 1",
        route: "#",
      },
      {
        image: TinyImage,
        category: "Category 2",
        name: "Product 2",
        price: "2 €",
        id: "product 2",
        route: "#",
      },
      {
        image: HugeImage,
        category: "Category 1",
        name: "Product 1",
        price: "3 €",
        id: "product 1",
        route: "#",
      },
      {
        image: SmallImage,
        category: "Category 3",
        name: "Product 2",
        price: "4 €",
        id: "product 2",
        route: "#",
      },
      {
        image: WideImage,
        category: "Category 2",
        name: "Product 1",
        price: "123 €",
        id: "product 1",
        route: "#",
      },
      {
        image: HighImage,
        category: "Category 4",
        name: "Product 2",
        price: "123.321 €",
        id: "product 2",
        route: "#",
      },
    ],
  },
};
