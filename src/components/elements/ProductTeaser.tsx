import type { ImageData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { RichTextElement, type RichTextElementProps } from "./RichTextElement";

export type ProductTeaserProps = {
  name: string;
  description: RichTextElementProps;
  route: string;
  image: ImageData;
};

const ProductTeaser = ({ name, description, route, image }: ProductTeaserProps) => {
  return (
    <div className="flex h-fit max-w-[400px] flex-col gap-5 rounded-md bg-white p-6 shadow-lg">
      <Link href={route}>
        <Image
          src={image.src}
          alt={image.alt}
          width={400}
          height={200}
          className="relative overflow-hidden rounded-xl"
        />
        <h1 className="mt-5 font-bold text-2xl">{name}</h1>
      </Link>
      <RichTextElement {...description} />
    </div>
  );
};
export { ProductTeaser };
