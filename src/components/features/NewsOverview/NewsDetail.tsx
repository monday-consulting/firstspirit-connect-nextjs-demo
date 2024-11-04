import { RichTextElement } from "@/components/globals/RichTextElement";
import type { FirstSpiritSmartLivingNewsFragmentFragment } from "@/gql/generated/graphql";
import { formatDate } from "@/utils/strings";
import Image from "next/image";

export type NewsDetailProps = {
  categories: string[];
  newsEntity?: FirstSpiritSmartLivingNewsFragmentFragment;
  // biome-ignore lint/suspicious/noExplicitAny: Lack of types generation
  author?: any;
};

const NewsDetail = ({ categories, newsEntity, author }: NewsDetailProps) => {
  return (
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
        <p className="text-text">{formatDate(newsEntity?.ttDate)}</p>
        <h1 className="mt-2 text-center font-bold text-3xl text-textDark">
          {newsEntity?.ttHeadline}
        </h1>
        <p>{newsEntity?.ttSubheadline}</p>
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
          src={
            (newsEntity?.ttImage?.__typename === "FirstSpiritImage" &&
              newsEntity?.ttImage.resolutions?.original?.url) ||
            ""
          }
          alt={newsEntity?.ttImageAltText || ""}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col items-center px-4 text-text sm:px-12 md:px-24">
        <p className="border-gray border-b-[1px] py-4 font-medium text-lg">
          {newsEntity?.ttTeaserText}
        </p>
        <RichTextElement className="mt pt-4 text-text" content={newsEntity?.ttArticleText} />
      </div>
    </section>
  );
};

export { NewsDetail };
