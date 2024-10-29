import type { Meta, StoryObj } from "@storybook/react";
import { Locations } from "@/components/section/Locations";
import { Default as ContactsTableStory } from "@/stories/elements/ContactsTable.stories";

const meta = {
  title: "components/Section/Locations",
  component: Locations,
  tags: ["autodocs"],
} satisfies Meta<typeof Locations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Global Dealer Locations",
    subline: "Find a specialized dealer close to you.",
    mapInfo: {
      center: { lat: 40.7128, lng: -74.006 },
      markers: [
        { lat: 40.7128, lng: -74.006 },
        { lat: 34.0522, lng: -118.2437 },
        { lat: 41.8781, lng: -87.6298 },
      ],
      zoom: 3,
    },
    contactInfo: { contacts: ContactsTableStory.args.contacts },
  },
};
