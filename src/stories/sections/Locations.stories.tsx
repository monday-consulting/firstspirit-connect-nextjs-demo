import type { Meta, StoryObj } from "@storybook/react";
import { Locations } from "@/components/features/Locations/Locations";
import { Default as ContactsTableStory } from "@/stories/features/Locations/ContactsTable.stories";

const meta = {
  title: "components/Sections/Locations",
  component: Locations,
  tags: ["autodocs"],
} satisfies Meta<typeof Locations>;

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
    headline: "Global Dealer Locations",
    subline: "Find a specialized dealer close to you.",
    mapInfo: {
      center,
      markers,
      zoom: 3,
    },
    contactInfo: { contacts: ContactsTableStory.args.contacts },
  },
};
