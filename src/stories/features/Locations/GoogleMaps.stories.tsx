import type { Meta, StoryObj } from "@storybook/react";
import { GoogleMaps } from "@/components/features/Locations/GoogleMaps";

const meta = {
  title: "components/Features/Locations/GoogleMaps",
  component: GoogleMaps,
  tags: ["autodocs"],
} satisfies Meta<typeof GoogleMaps>;

export default meta;
type Story = StoryObj<typeof meta>;

const center = { lat: 40.7128, lng: -74.006 };
const markers = [
  { lat: 40.7128, lng: -74.006 },
  { lat: 34.0522, lng: -118.2437 },
  { lat: 41.8781, lng: -87.6298 },
];

export const Default: Story = {
  args: {
    center,
    markers,
    zoom: 3,
  },
};
