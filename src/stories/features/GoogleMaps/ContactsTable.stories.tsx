import type { Meta, StoryObj } from "@storybook/react";
import { ContactsTable } from "@/components/features/GoogleMaps/ContactsTable";

const meta = {
  title: "components/Features/GoogleMaps/ContactsTable",
  component: ContactsTable,
  tags: ["autodocs"],
} satisfies Meta<typeof ContactsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contacts: [
      {
        name: "John Doe",
        description: { content: "Description" },
        coordinates: { lat: 50, lng: 10 },
      },
      {
        name: "Alec Winter",
        description: { content: "Description" },
        coordinates: { lat: 50, lng: 10 },
      },
      {
        name: "Peter Pane",
        description: { content: "Description" },
        coordinates: { lat: 50, lng: 10 },
      },
      {
        name: "Neil Armstrong",
        description: { content: "Description" },
        coordinates: { lat: 50, lng: 10 },
      },
      {
        name: "Max Mustermann",
        description: { content: "Description" },
        coordinates: { lat: 50, lng: 10 },
      },
    ],
  },
};
