import type { Meta, StoryObj } from "@storybook/react";
import { within, expect, userEvent } from "@storybook/test";

import { FavoriteTesting } from "./FavoriteTesting";
import { Default as Product } from "../features/Products/ProductDetail.stories";

const meta: Meta<typeof FavoriteTesting> = {
  title: "tests/Favorites",
  component: FavoriteTesting,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Detail: Story = {
  args: {
    detailPage: true,
    product: Product.args?.product,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const FavoriteButton = canvas.getByTestId("favorite-button");
  },
};

export const Overview: Story = {
  args: {
    detailPage: true,
    product: Product.args?.product,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const NotificationNumber = canvas.queryByTestId("notification-number");
    const FavoriteButton = canvas.getByTestId("favorite-button");

    await expect(NotificationNumber).toBeVisible;
    await userEvent.click(FavoriteButton);
  },
};
