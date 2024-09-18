import { Locations } from "@/components/section/Locations";
import { getSectionByType } from "@/gql/documents/section";
import { Default as ContactTableStory } from "@/stories/elements/ContactsTable.stories";

const LocationsPage = async ({ params }: { params: { locale: string } }) => {
  const data = await getSectionByType(params.locale, "google_maps");

  const center = { lat: 40.7128, lng: -74.006 }; // New York City coordinates
  const markers = [
    { lat: 40.7128, lng: -74.006 }, // New York City
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    { lat: 41.8781, lng: -87.6298 }, // Chicago
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Locations
        headline={"This is a headline"}
        subline={"This is a subline text example."}
        mapInfo={{
          center,
          markers,
          zoom: 3,
        }}
        contactInfo={{ contacts: ContactTableStory.args.contacts }}
      />
    </main>
  );
};

export default LocationsPage;
