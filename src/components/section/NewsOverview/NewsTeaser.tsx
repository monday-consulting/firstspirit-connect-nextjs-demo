import Image from "next/image";
import Link from "next/link";
import { VscArrowSmallRight } from "react-icons/vsc";

export interface NewsT {
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
}

interface NewsTeaserProps {
  data: NewsT;
}

const NewsTeaser = ({ data }: NewsTeaserProps) => {
  return (
    <div className="text-center">
      <div className="mb-3 h-72 w-full overflow-hidden rounded-xl">
        <Image
          width={500}
          height={500}
          className="-translate-y-1/2 relative top-1/2 w-full"
          src={data.image.src}
          alt={data.image.alt}
        />
      </div>
      {data.categories.map((category) => (
        <span
          key={category}
          className="py mx-1 mb-3 inline-block rounded-full bg-lightGray px-2 font-medium text-secondary text-xs uppercase leading-5 shadow-sm"
        >
          {category}
        </span>
      ))}
      <p className="text-text">
        {data.author} · {data.date}
      </p>
      <h2 className="my-3 font-bold font-heading text-2xl text-primary">{data.headline}</h2>
      {data.teaserText && <p className="mb-3 text-text">{data.teaserText}</p>}
      {data.link && (
        <Link href={data.link} className="font-bold text-blue-700">
          Read Article
          <div className="mx-2 inline-block align-middle">
            <VscArrowSmallRight />
          </div>
        </Link>
      )}
    </div>
  );
};
export { NewsTeaser };
