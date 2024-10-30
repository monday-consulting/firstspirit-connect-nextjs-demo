import { StandardLayout } from "@/components/page-layout/StandardLayout";
import { NewsOverview } from "@/components/section/NewsOverview/NewsOverview";
import { getDatasetsByType } from "@/gql/documents/dataset";
import { getPageContentByRoute } from "@/gql/documents/pageContent";
import type {
  FirstSpiritPageBody,
  FirstSpiritSmartLivingNewsFragmentFragment,
  FirstSpiritStandard,
} from "@/gql/generated/graphql";
import type { Locale } from "@/i18n/config";

const NewsOverviewPage = async (props: { params: Promise<{ locale: Locale }> }) => {
  const params = await props.params;
  const page = await getPageContentByRoute(params.locale, decodeURI("/news/"));
  const pageBodies = page?.pageBodies?.map((body) => body) as FirstSpiritPageBody[];

  const news = (await getDatasetsByType(params.locale, "news")).map(
    (entry) => entry.data as FirstSpiritSmartLivingNewsFragmentFragment
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-12 md:px-24">
      <>
        <NewsOverview
          news={news.map((entry) => ({
            headline: entry.ttHeadline || "",
            date: entry.ttDate,
            author: entry.ttAuthor[0].data.tt_name,
            // biome-ignore lint/suspicious/noExplicitAny: Lack of type generation
            categories: entry.ttTags.map((tag: any) => tag.data.tt_name),
            image: {
              src:
                (entry.ttImage?.__typename === "FirstSpiritImage" &&
                  entry.ttImage.resolutions?.original?.url) ||
                "",
              alt: entry.ttImageAltText || "",
            },
          }))}
        />
        {page && (
          <StandardLayout pageInfo={page.data as FirstSpiritStandard} pageBodies={pageBodies} />
        )}
      </>
    </main>
  );
};

export default NewsOverviewPage;
