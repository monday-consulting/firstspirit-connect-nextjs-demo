import { Link } from "@/i18n/routing";
import Image from "next/image";
import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";
import type { RichTextElementProps } from "./RichTextElement";
import { RichTextElement } from "./RichTextElement";
import type { ImageData } from "@/types";

//this type is used in section/features
export type FeatureProps = {
  link: {
    href: string;
    label: string;
  };
  image: ImageData;
  title: string | ReactNode;
  text: RichTextElementProps;
  id: string;
};

const Feature = ({ link, image, title, text }: FeatureProps) => {
  return (
    <div className="w-full p-8 md:w-1/3">
      <Link href={link.href} className="group/feature flex flex-col items-center gap-4">
        <div className="mb-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={300}
            className="overflow-hidden rounded-xl"
          />
        </div>
        <h3 className="font-semibold text-text text-xl group-hover/feature:underline md:text-2xl">
          {title}
        </h3>
        <div className="font-medium text-coolGray-500">
          <RichTextElement {...text} />
        </div>
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
