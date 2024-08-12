import { getProductLink } from "@/utils/links";
import Image from "next/image";
import type { ImageData } from "@/types";
import Link from "next/link";

export type FavoriteTeaserProps = {
  title: string;
  image: ImageData;
};

const FavoriteTeaser = ({ title, image }: FavoriteTeaserProps) => {
  return (
    <Link href={getProductLink(title)} className="flex gap-4 rounded-lg p-3 ring-2 ring-lightGray">
      <div className="relative aspect-square w-14">
        <Image src={image.src} alt={image.alt} fill objectFit="cover" className="rounded-full" />
      </div>
      <p className="text-text">{title}</p>
    </Link>
  );
};

export { FavoriteTeaser };
