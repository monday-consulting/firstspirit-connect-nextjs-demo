import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { useTranslations } from "next-intl";

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
  link?: string;
};

export type NewsTeaserProps = {
  newsEntity: NewsEntity;
};

const NewsTeaser = ({ newsEntity }: NewsTeaserProps) => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mb-3">
        <Image
          src={newsEntity.image.src}
          alt={newsEntity.image.alt}
          width={400}
          height={300}
          className="rounded-xl"
        />
      </div>
      {newsEntity.categories.map((category) => (
        <span
          key={category}
          className="py mx-1 mb-3 inline-block rounded-full bg-lightGray px-2 font-medium text-secondary text-xs uppercase leading-5 shadow-sm"
        >
          {category}
        </span>
      ))}
      <p className="text-text">
        {newsEntity.author} · {newsEntity.date}
      </p>
      <h2 className="my-3 font-bold font-heading text-2xl text-primary">{newsEntity.headline}</h2>
      {newsEntity.teaserText && <p className="mb-3 text-text">{newsEntity.teaserText}</p>}
      {newsEntity.link && (
        <Link href={newsEntity.link} className="font-bold text-blue-700">
          {t("news.readArticle")}
          <div className="inline-block align-middle">
            <LuArrowRight />
          </div>
        </Link>
      )}
    </div>
  );
};
export { NewsTeaser };
