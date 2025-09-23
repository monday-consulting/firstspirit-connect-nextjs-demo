import { useTranslations } from "next-intl";
import { LuArrowRight } from "react-icons/lu";
import { ImageComponent } from "@/components/globals/ImageComponent";
import { Link } from "@/i18n/routing";
import type { ImageData } from "@/types";
import { getNewsDetailLink } from "@/utils/links";
import { formatDate } from "@/utils/strings";

export type NewsEntity = {
  image: ImageData;
  categories: string[];
  author: string;
  date: string;
  headline: string;
  teaserText?: string;
};

export type NewsTeaserProps = {
  newsEntity: NewsEntity;
};

const NewsTeaser = ({ newsEntity }: NewsTeaserProps) => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <ImageComponent
        src={newsEntity.image.src}
        alt={newsEntity.image.alt}
        className="h-72 w-full"
        imageClassName="rounded-xl"
        data-preview-id="#st_news_teaser_image"
      />
      <div className="flex flex-row flex-wrap gap-2">
        {newsEntity.categories.map((category) => (
          <span
            key={category}
            className="rounded-full bg-lightGray px-2 font-medium text-text text-xs uppercase leading-5 shadow-sm"
            data-preview-id="#st_news_teaser_category"
          >
            {category}
          </span>
        ))}
      </div>
      <p className="text-text" data-preview-id="#st_news_meta_data">
        {newsEntity.author} · {formatDate(newsEntity.date)}
      </p>
      <h2
        className="font-bold font-heading text-2xl text-primary"
        data-preview-id="#st_news_teaser_headline"
      >
        {newsEntity.headline}
      </h2>
      {newsEntity.teaserText && (
        <p className="mb-3 text-text" data-preview-id="#st_news_teaser_text">
          {newsEntity.teaserText}
        </p>
      )}
      {newsEntity.headline && (
        <Link
          href={getNewsDetailLink(newsEntity.headline)}
          className="flex items-center gap-1 font-bold text-blue-700"
        >
          {t("news.readArticle")}
          <LuArrowRight />
        </Link>
      )}
    </div>
  );
};
export { NewsTeaser };
