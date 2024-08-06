import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";
import type { RichTextElementProps } from "./RichTextElement";
import RichTextElement from "./RichTextElement";

//this type is used in section/features
export interface FeatureProps {
  link: {
    href: string;
    label: string;
  };
  image: {
    src: string;
    alt: string;
  };
  title: string | ReactNode;
  text: RichTextElementProps[] | string;
  id: string;
}

const Feature = ({ link, image, title, text }: FeatureProps) => {
  return (
    <div className="w-full p-8 md:w-1/3">
      <Link href={link.href} className="group/feature flex flex-col gap-4">
        <div className="mb-4 overflow-hidden rounded-2xl">
          <Image src={image.src} alt={image.alt} width={400} height={300} />
        </div>
        <h3 className="font-semibold text-text text-xl group-hover/feature:underline md:text-2xl">
          {title}
        </h3>
        {text && typeof text !== "string" ? (
          <p className="font-medium text-coolGray-500">
            {text.map((item, index) => (
              <RichTextElement key={`richtext-item-${index}`} {...item} />
            ))}
          </p>
        ) : (
          <p>{text}</p>
        )}
        <p className="flex items-center gap-2 text-text">
          <span>{link.label}</span>
          <span>
            <LuArrowRight />
          </span>
        </p>
      </Link>
    </div>
  );
};
export { Feature };
