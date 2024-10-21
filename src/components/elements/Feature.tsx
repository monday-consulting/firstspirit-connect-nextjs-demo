import { Link } from "@/i18n/routing";
import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";
import type { RichTextElementContent } from "./RichTextElement";
import { RichTextElement } from "./RichTextElement";
import type { ImageData } from "@/types";
import { ImageComponent } from "./Image";

//this type is used in section/features
export type FeatureProps = {
  title: string | ReactNode;
  text: RichTextElementContent[];
  link: {
    href: string;
    label: string;
  };
  image: ImageData;
};

const Feature = ({ link, image, title, text }: FeatureProps) => {
  return (
    <div className="w-full p-8 md:w-1/3">
      <Link href={link.href} className="group/feature flex flex-col items-center gap-4">
        <ImageComponent src={image.src} alt={image.alt} rounded="xl" className="mb-4 h-40 w-full" />
        <h3 className="font-semibold text-text text-xl group-hover/feature:underline md:text-2xl">
          {title}
        </h3>
        <div className="font-medium text-coolGray-500">
          <RichTextElement content={text} />
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
