import { NewsDetail } from "@/components/features/News/NewsDetail";
import { getDatasetsByType } from "@/gql/documents/dataset";
import type { FirstSpiritSmartLivingNewsFragmentFragment } from "@/gql/generated/graphql";
import type { Locale } from "@/i18n/config";
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

  // biome-ignore lint/suspicious/noExplicitAny: Lack of types generation
  const categories = newsEntity?.ttTags.map((tag: any) => tag.data.tt_name) as string[];
  const author = newsEntity?.ttAuthor[0].data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 ">
      {newsEntity && <NewsDetail categories={categories} newsEntity={newsEntity} author={author} />}
    </main>
  );
};

export default NewsDetailPage;
