import { Home } from "@/components/page-layout/Home";
import { StandardLayout } from "@/components/page-layout/StandardLayout";
import { getPageContentByRoute } from "@/gql/pageContent";
import { defaultLocale } from "@/i18n";
import type { PageBody } from "fsxa-api";

const SlugPage = async ({ params }: { params: { slug: string[]; locale: string } }) => {
  const route = params.slug
    ? `/${params.slug.join("/")}/`
    : params.locale === defaultLocale
      ? "/startseite/"
      : "homepage";

  const pageContent = await getPageContentByRoute(params.locale, route);
  const pageBodies = pageContent?.pageBodies?.map((item) => item) as PageBody[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {pageContent?.layout === "home" && (
        <>
          <Home path="test" />
        </>
      )}
      {pageContent?.layout === "standard" && (
        <>
          <StandardLayout pageBodies={pageBodies} />
        </>
      )}
    </main>
  );
};

export default SlugPage;
