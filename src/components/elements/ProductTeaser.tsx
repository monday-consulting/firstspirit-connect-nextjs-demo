import type { ImageData } from "@/types";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { RichTextElement, type RichTextElementProps } from "./RichTextElement";

export type ProductTeaserProps = {
  name: string;
  description: RichTextElementProps;
  route: string;
  image: ImageData;
};

const ProductTeaser = ({ name, description, route, image }: ProductTeaserProps) => {
  return (
    <div className="flex h-fit max-w-[400px] flex-col gap-4 rounded-xl bg-white p-6 shadow-lg">
      <Link href={route}>
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src={image.src}
            alt={image.alt}
            className="h-auto max-h-64 w-full object-cover"
            width={400}
            height={400}
          />
        </div>
        <h1 className="mt-4 font-bold text-2xl">{name}</h1>
      </Link>
      <RichTextElement {...description} className="line-clamp-5 text-text" />
    </div>
  );
};
export { ProductTeaser };
