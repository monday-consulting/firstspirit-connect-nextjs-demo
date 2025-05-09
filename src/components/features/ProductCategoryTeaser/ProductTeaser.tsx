import { Link } from "@/i18n/routing";
import type { ImageData } from "@/types";
import { ImageComponent } from "../../globals/ImageComponent";
import { RichTextElement, type RichTextElementProps } from "../../globals/RichTextElement";

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
        <ImageComponent
          src={image.src}
          alt={image.alt}
          imageClassName="rounded-xl"
          className="aspect-square w-full"
        />
        <h1 className="mt-4 font-bold text-2xl">{name}</h1>
      </Link>
      <RichTextElement {...description} className="line-clamp-5 text-text" />
    </div>
  );
};
export { ProductTeaser };
