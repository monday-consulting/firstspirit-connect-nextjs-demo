import type { Contact } from "@/components/elements/ContactsTable";
import { Locations } from "@/components/section/Locations";
import { getDatasetByType } from "@/gql/documents/dataset";
import { getSectionByType } from "@/gql/documents/section";
import type { Locale } from "@/i18n/config";

const LocationsPage = async ({ params }: { params: { locale: Locale } }) => {
  const googleMapsData = await getSectionByType(params.locale, "google_maps");
  const contactsData = await getDatasetByType(params.locale, "location");

  const center = {
    lat: googleMapsData.data.st_initial_lat,
    lng: googleMapsData.data.st_initial_long,
  };

  // biome-ignore lint/suspicious/noExplicitAny: Lack of type generation
  const markers = contactsData.map((item: any) => ({
    lat: item.data.tt_lat,
    lng: item.data.tt_long,
  }));

  const contacts = contactsData.map(
    (item) =>
      ({
        name: item.data.tt_name,
        description: { content: item.data.tt_description },
        coordinates: { lat: item.data.tt_lat, lng: item.data.tt_long },
      }) as Contact
  );

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
        contactInfo={{ contacts }}
      />
    </main>
  );
};

export default LocationsPage;
