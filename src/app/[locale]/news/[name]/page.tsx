import type { Locale } from "next-intl";
import { NewsDetail } from "@/components/features/NewsOverview/NewsDetail";
import { getDatasetsByType } from "@/lib/gql/documents/dataset";
import type { FirstSpiritSmartLivingNewsFragmentFragment } from "@/lib/gql/generated/graphql";
import { getNewsDetailLink } from "@/utils/links";

const NewsDetailPage = async (props: { params: Promise<{ locale: Locale; name: string }> }) => {
  const params = await props.params;
  const allNews = (await getDatasetsByType(params.locale, "news")).map(
    (entry) => entry.data as FirstSpiritSmartLivingNewsFragmentFragment
  );

  const newsEntity = allNews.find((entry) => {
    if (entry.__typename === "FirstSpiritSmartlivingNews") {
      return getNewsDetailLink(entry.ttHeadline || "") === getNewsDetailLink(params.name);
    }
  });

  const categories = newsEntity?.ttTags.map(
    // biome-ignore lint/suspicious/noExplicitAny: Lack of types generation
    (tag: any) => tag.data.tt_name
  ) as string[];
  const author = newsEntity?.ttAuthor[0].data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 ">
      {newsEntity && <NewsDetail categories={categories} newsEntity={newsEntity} author={author} />}
    </main>
  );
};

export default NewsDetailPage;
