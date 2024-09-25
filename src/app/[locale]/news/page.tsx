import { StandardLayout } from "@/components/page-layout/StandardLayout";
import { NewsOverview } from "@/components/section/NewsOverview/NewsOverview";
import { getDatasetByType } from "@/gql/documents/dataset";
import { getPageContentByRoute } from "@/gql/documents/pageContent";
import type { FirstSpiritPageBody } from "@/gql/generated/graphql";
import type { Locale } from "@/i18n/config";

const NewsOverviewPage = async ({ params }: { params: { locale: Locale } }) => {
  const page = await getPageContentByRoute(params.locale, decodeURI("/news/"));
  const pageBodies = page?.pageBodies?.map((body) => body) as FirstSpiritPageBody[];
  const news = await getDatasetByType(params.locale, "news");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-12 md:px-24">
      <>
        <NewsOverview
          news={news.map((entry) => ({
            headline: entry.data.tt_headline,
            date: entry.data.tt_date,
            author: entry.data.tt_author[0].data.tt_name,
            // biome-ignore lint/suspicious/noExplicitAny: Lack of type generation
            categories: entry.data.tt_tags.map((tag: any) => tag.data.tt_name),
            image: {
              src: entry.data.tt_image.resolutions.ORIGINAL.url,
              alt: entry.data.tt_image_alt_text,
            },
          }))}
        />
        {page && <StandardLayout pageInfo={page.data} pageBodies={pageBodies} />}
      </>
    </main>
  );
};

export default NewsOverviewPage;
