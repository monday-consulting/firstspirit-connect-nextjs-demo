import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Arrow } from "./Arrow";

//this type is used in section/features
export interface FeaturesContent {
  link: {
    href: string;
    linkText: string;
  };
  image: {
    src: string;
    alt: string;
  };
  title: string | ReactNode;
  text: string | ReactNode;
  id: string;
}

interface FeatureProps {
  data: FeaturesContent;
}

const Feature = ({ data }: FeatureProps) => {
  return (
    <div className="w-full p-8 md:w-1/3">
      <Link href={data.link.href} className="group/feature">
        <div className="mb-9 overflow-hidden rounded-2xl">
          <Image src={data.image.src} alt={data.image.alt} width={400} height={300} />
        </div>
        <h3 className="mb-4 font-semibold text-text text-xl group-hover/feature:underline md:text-2xl">
          {data.title}
        </h3>
        <p className="mb-5 font-medium text-coolGray-500">{data.text}</p>
        <p className="mb-5 text-base text-text">
          <span className="align-middle">{data.link.linkText}</span>
          <div className="mx-1 inline-block stroke-2 stroke-text py-px align-middle">
            <Arrow />
          </div>
        </p>
      </Link>
    </div>
  );
};
export { Feature };
