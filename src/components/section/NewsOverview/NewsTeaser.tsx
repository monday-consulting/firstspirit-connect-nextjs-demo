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

const NewsTeaser = (data: NewsT) => {
  return (
    <div className="text-center">
      <div className="mb-5 h-72 w-full overflow-hidden rounded-xl">
        <Image
          width={500}
          height={500}
          className="-translate-y-1/2 relative top-1/2 w-full"
          src={data.image.src}
          alt={data.image.alt}
        />
      </div>
      {data.categories.map((category) => (
        <div
          key={category}
          className="mx-1 inline rounded-full bg-gray-100 px-2 py-1 text-secondary"
        >
          {category}
        </div>
      ))}
      <p className="mt-3 text-text">
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
