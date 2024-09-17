import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export type NewsT = {
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
  teaserData: NewsT;
};

const NewsTeaser = ({ teaserData }: NewsTeaserProps) => {
  return (
    <div className="text-center">
      <div className="mb-3 h-72 w-full overflow-hidden rounded-xl">
        <Image
          width={500}
          height={500}
          className="-translate-y-1/2 relative top-1/2 w-full"
          src={teaserData.image.src}
          alt={teaserData.image.alt}
        />
      </div>
      {teaserData.categories.map((category) => (
        <span
          key={category}
          className="py mx-1 mb-3 inline-block rounded-full bg-lightGray px-2 font-medium text-secondary text-xs uppercase leading-5 shadow-sm"
        >
          {category}
        </span>
      ))}
      <p className="text-text">
        {teaserData.author} · {teaserData.date}
      </p>
      <h2 className="my-3 font-bold font-heading text-2xl text-primary">{teaserData.headline}</h2>
      {teaserData.teaserText && <p className="mb-3 text-text">{teaserData.teaserText}</p>}
      {teaserData.link && (
        <Link href={teaserData.link} className="font-bold text-blue-700">
          Read Article
          <div className="inline-block align-middle">
            <LuArrowRight />
          </div>
        </Link>
      )}
    </div>
  );
};
export { NewsTeaser };
