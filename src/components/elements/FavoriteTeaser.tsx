import { getProductDetailLink } from "@/utils/links";
import Image from "next/image";
import type { ImageData } from "@/types";
import Link from "next/link";
import { LuTrash } from "react-icons/lu";
import { useFavorites } from "@/utils/hooks/useFavorites";

export type FavoriteTeaserProps = {
  title: string;
  id: string;
  image: ImageData;
};

const FavoriteTeaser = ({ title, id, image }: FavoriteTeaserProps) => {
  const [favorites] = useFavorites();
  return (
    <Link
      href={getProductDetailLink(id)}
      className="relative flex gap-4 rounded-lg p-3 ring-2 ring-lightGray"
    >
      <div className="relative aspect-square w-14">
        <Image src={image.src} alt={image.alt} fill objectFit="cover" className="rounded-full" />
      </div>
      <p className="text-text">{title}</p>
      <button
        type="button"
        className="absolute right-2 bottom-2 hover:scale-110 hover:text-text"
        onClick={(e) => {
          e.preventDefault();
          // Add your button logic here, e.g., delete item
          favorites.deleteEntry(id);
        }}
      >
        <LuTrash size={20} color="currentColor" />
      </button>
    </Link>
  );
};

export { FavoriteTeaser };
