import { RichTextElement } from "@/components/elements/RichTextElement";
import { getDatasetByType } from "@/gql/documents/dataset";
import type { Locale } from "@/i18n/config";
import { getNewsDetailLink } from "@/utils/links";
import { formatDate } from "@/utils/strings";
import Image from "next/image";

const NewsDetailPage = async ({ params }: { params: { locale: Locale; name: string } }) => {
  const allNews = await getDatasetByType(params.locale, "news");

  const newsEntity = allNews.find(
    (entry) => getNewsDetailLink(entry.data.tt_headline) === getNewsDetailLink(params.name)
  );

  const data = newsEntity?.data;
  // biome-ignore lint/suspicious/noExplicitAny: Lack of types generation
  const categories = data.tt_tags.map((tag: any) => tag.data.tt_name) as string[];
  const headline = data.tt_headline;
  const subline = data.tt_subheadline;
  const date = data.tt_date;
  const author = data.tt_author[0].data;
  const image = data.tt_image;
  const imageAlt = data.tt_image_alt_text;
  const teaserText = data.tt_teaserText;
  const richText = data.tt_articleText;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 ">
      {newsEntity && (
        <section>
          <div className="flex flex-col items-center gap-4 px-4 sm:px-12 md:px-24">
            <div className="flex flex-row flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-lightGray px-4 py-1 text-sm text-text uppercase leading-5 shadow-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            <p className="text-text">{formatDate(date, params.locale)}</p>
            <h1 className="mt-2 text-center font-bold text-3xl text-textDark">{headline}</h1>
            <p>{subline}</p>
            <div className="mt-4 flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={author.tt_image.resolutions.ORIGINAL.url}
                  alt={`${author.tt_name}'s profile picture`}
                  width={80}
                  height={80}
                  objectFit="cover"
                />
              </div>
              <p className="font-semibold text-lg text-text">{author.tt_name}</p>
            </div>
          </div>
          <div className="relative my-8 h-32 w-screen md:h-72">
            <Image
              src={image.resolutions.ORIGINAL.url}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="flex flex-col items-center px-4 text-text sm:px-12 md:px-24">
            <p className="border-gray border-b-[1px] py-4 font-medium text-lg">{teaserText}</p>
            <RichTextElement className="mt pt-4 text-text" content={richText} />
          </div>
        </section>
      )}
    </main>
  );
};

export default NewsDetailPage;
