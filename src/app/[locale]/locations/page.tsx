import { Locations } from "@/components/section/Locations";
import { getDatasetsByType } from "@/gql/documents/dataset";
import { getSectionByType } from "@/gql/documents/section";
import type {
  FirstSpiritGoogleMapsFragmentFragment,
  FirstSpiritSmartLivingLocationFragmentFragment,
} from "@/gql/generated/graphql";
import type { Locale } from "@/i18n/config";

const LocationsPage = async ({ params }: { params: { locale: Locale } }) => {
  const googleMaps = (await getSectionByType(
    params.locale,
    "google_maps"
  )) as FirstSpiritGoogleMapsFragmentFragment;

  const contacts = (await getDatasetsByType(params.locale, "location")).map(
    (contact) => contact.data as FirstSpiritSmartLivingLocationFragmentFragment
  );

  // TODO: Int parsing currently not supported by graphql server - update fragment after solving
  // const center = { lat: googleMapsData.stInitialLat || 0, lng: googleMapsData.stInitialLong || 0 };
  const center = { lat: 50, lng: 10 };

  // const markers = contacts.map((item) => ({
  //   lat: item.data.tt_lat,
  //   lng: item.data.tt_long,
  // }));
  const markers = [] as { lat: number; lng: number }[];

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
            // TODO: Int parsing currently not supported by graphql server - update fragment after solving
            coordinates: { lat: 0, lng: 0 },
          })),
        }}
      />
    </main>
  );
};

export default LocationsPage;
