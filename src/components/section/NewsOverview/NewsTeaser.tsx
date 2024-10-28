import { LuArrowRight } from "react-icons/lu";
import { useLocale, useTranslations } from "next-intl";
import { formatDate } from "@/utils/strings";
import { getNewsDetailLink } from "@/utils/links";
import { Link } from "@/i18n/routing";
import { ImageComponent } from "@/components/elements/ImageComponent";

export type NewsEntity = {
  image: {
    src: string;
    alt: string;
  };
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
  const locale = useLocale();
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <ImageComponent
        src={newsEntity.image.src}
        alt={newsEntity.image.alt}
        className="h-72 w-full"
        imageClassName="rounded-xl"
      />
      <div className="flex flex-row flex-wrap gap-2">
        {newsEntity.categories.map((category) => (
          <span
            key={category}
            className="rounded-full bg-lightGray px-2 font-medium text-text text-xs uppercase leading-5 shadow-sm"
          >
            {category}
          </span>
        ))}
      </div>
      <p className="text-text">
        {newsEntity.author} · {formatDate(newsEntity.date)}
      </p>
      <h2 className="font-bold font-heading text-2xl text-primary">{newsEntity.headline}</h2>
      {newsEntity.teaserText && <p className="mb-3 text-text">{newsEntity.teaserText}</p>}
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
