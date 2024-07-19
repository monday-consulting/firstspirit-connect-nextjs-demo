import { locales } from "@/i18n";
import type { NavigationStructure, NavigationRoute } from "@/components/app-layout/Navigation";
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

export async function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const traverse = (routes: NavigationRoute[], parentPath: string[] = []) => {
      for (const route of routes) {
        const fullPath = [...parentPath, route.seoRoute].filter(Boolean).join("/");
        paths.push({ locale, slug: fullPath });

        if (route.children && route.children.length > 0) {
          traverse(route.children, [...parentPath, route.seoRoute]);
        }
      }
    };

    traverse(navigationData.structure);
  }

  return paths;
}

const Page = async ({ params }: Props) => {
  const { locale, slug } = params;

  // Example rendering based on the fetched navigation data
  return (
    <div>
      <h1>{`Locale: ${locale}`}</h1>
      <h2>{`Slug: ${slug}`}</h2>
      <pre>{JSON.stringify(navigationData, null, 2)}</pre>
    </div>
  );
};

export default Page;
