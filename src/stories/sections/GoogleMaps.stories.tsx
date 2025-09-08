import type { Meta, StoryObj } from "@storybook/react";
import { GoogleMaps } from "@/components/sections/GoogleMaps";

const meta = {
  title: "components/Sections/GoogleMaps",
  component: GoogleMaps,
  tags: ["autodocs"],
} satisfies Meta<typeof GoogleMaps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    center: { lat: 40.7128, lng: -74.006 },
    markers: [
      { lat: 40.7128, lng: -74.006 },
      { lat: 34.0522, lng: -118.2437 },
      { lat: 41.8781, lng: -87.6298 },
    ],
    zoom: 3,
  },
};
