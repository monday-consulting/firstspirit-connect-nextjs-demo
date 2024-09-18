import { Home } from "@/components/page-layout/Home";
import { StandardLayout } from "@/components/page-layout/StandardLayout";
import { getPageContentByRoute } from "@/gql/documents/pageContent";
import type { FirstSpiritPageBody } from "@/gql/generated/graphql";
import { defaultLocale } from "@/i18n/config";

const SlugPage = async ({ params }: { params: { slug: string[]; locale: string } }) => {
  const route = params.slug
    ? `/${params.slug.join("/")}/`
    : params.locale === defaultLocale
      ? "/startseite/"
      : "/homepage/";

  const page = await getPageContentByRoute(params.locale, decodeURI(route));
  const pageBodies = page?.pageBodies?.map((body) => body) as FirstSpiritPageBody[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      {page?.layout === "homepage" && <Home pageBodies={pageBodies} />}
      {page?.layout === "standard" && <StandardLayout pageBodies={pageBodies} />}
    </main>
  );
};

export default SlugPage;
