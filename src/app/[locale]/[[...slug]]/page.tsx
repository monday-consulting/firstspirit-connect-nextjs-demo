import { mockNavigationData } from "@/stories/mocks/mockNavigationData";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

// TODO: use real API
// const navigationData = await getNavigation(locale);
const navigationData = mockNavigationData;

const Page = async ({ params }: Props) => {
  const { locale, slug } = params;

  // Example rendering based on the fetched navigation data
  return (
    <div>
      <h1>{`Locale: ${locale}`}</h1>
      <h2>{`Slug: ${slug}`}</h2>
    </div>
  );
};

export default Page;
