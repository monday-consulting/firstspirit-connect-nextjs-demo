import type { ImageData } from "@/types";
import { Link } from "@/i18n/routing";
import { RichTextElement, type RichTextElementProps } from "./RichTextElement";
import { ImageComponent } from "./Image";

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
          rounded="xl"
          className="w-full [aspect-ratio:1/1]"
        />
        <h1 className="mt-4 font-bold text-2xl">{name}</h1>
      </Link>
      <RichTextElement {...description} className="line-clamp-5 text-text" />
    </div>
  );
};
export { ProductTeaser };
