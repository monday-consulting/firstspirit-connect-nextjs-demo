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

const NewsTeaser = ({ image, categories, author, date, headline, teaserText, link }: NewsT) => {
  return (
    <div className="text-center">
      <div className="mb-3 h-72 w-full overflow-hidden rounded-xl">
        <Image
          width={500}
          height={500}
          className="-translate-y-1/2 relative top-1/2 w-full"
          src={image.src}
          alt={image.alt}
        />
      </div>
      {categories.map((category) => (
        <span
          key={category}
          className="py mx-1 mb-3 inline-block rounded-full bg-lightGray px-2 font-medium text-secondary text-xs uppercase leading-5 shadow-sm"
        >
          {category}
        </span>
      ))}
      <p className="text-text">
        {author} · {date}
      </p>
      <h2 className="my-3 font-bold font-heading text-2xl text-primary">{headline}</h2>
      {teaserText && <p className="mb-3 text-text">{teaserText}</p>}
      {link && (
        <Link href={link} className="font-bold text-blue-700">
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
