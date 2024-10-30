import { Home } from "@/components/layouts/Home";
import { StandardLayout } from "@/components/layouts/StandardLayout";
import { getPageContentByRoute } from "@/gql/documents/pageContent";
import type { FirstSpiritPageBody, FirstSpiritStandard } from "@/gql/generated/graphql";
import { defaultLocale, type Locale } from "@/i18n/config";
import { redirect } from "next/navigation";

const SlugPage = async (props: { params: Promise<{ slug: string[]; locale: Locale }> }) => {
  const params = await props.params;
  const path = params.slug
    ? `/${params.slug.join("/")}/`
    : params.locale === defaultLocale
      ? "/homepage/"
      : "/startseite/";

  const page = await getPageContentByRoute(params.locale, decodeURI(path));
  const pageInfo = page?.data.__typename === "FirstSpiritStandard" && page.data;
  const pageBodies = page?.pageBodies?.map((body) => body) as FirstSpiritPageBody[];

  if (!page?.name) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-12 md:px-24">
      {page?.layout === "homepage" && <Home pageBodies={pageBodies} />}
      {page?.layout === "standard" && (
        <StandardLayout pageInfo={pageInfo as FirstSpiritStandard} pageBodies={pageBodies} />
      )}
    </main>
  );
};

export default SlugPage;
