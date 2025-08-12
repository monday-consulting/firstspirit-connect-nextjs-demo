import { Locations } from "@/components/features/GoogleMaps/Locations";
import { getDatasetsByType } from "@/lib/gql/documents/dataset";
import { getSectionByType } from "@/lib/gql/documents/section";
import type {
  FirstSpiritGoogleMapsFragmentFragment,
  FirstSpiritSmartLivingLocationFragmentFragment,
} from "@/lib/gql/generated/graphql";
import type { Locale } from "next-intl";

const LocationsPage = async (props: {
  params: Promise<{ locale: Locale }>;
}) => {
  const params = await props.params;
  const googleMaps = await getSectionByType(params.locale, "google_maps");
  const googleMapsData = googleMaps.data as FirstSpiritGoogleMapsFragmentFragment;

  const contacts = (await getDatasetsByType(params.locale, "location")).map(
    (contact) => contact.data as FirstSpiritSmartLivingLocationFragmentFragment
  );

  const center = {
    lat: googleMapsData.stInitialLat || 0,
    lng: googleMapsData.stInitialLong || 0,
  };

  const markers = contacts
    .map((item) => {
      if (item.ttLat && item.ttLong) {
        return { lat: item.ttLat, lng: item.ttLong };
      }
      return undefined;
    })
    .filter((marker): marker is { lat: number; lng: number } => marker !== undefined);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-12 md:px-24">
      <Locations
        headline={"This is a headline"}
        subline={"This is a subline text example."}
        mapInfo={{
          center,
          markers,
          zoom: 5,
        }}
        contactInfo={{
          contacts: contacts.map((contact) => ({
            name: contact.ttName || "",
            description: { content: contact.ttDescription || "" },
            coordinates: {
              lat: contact.ttLat || 0,
              lng: contact.ttLong || 0,
            },
          })),
        }}
      />
    </main>
  );
};

export default LocationsPage;
