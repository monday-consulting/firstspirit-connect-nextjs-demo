import { Link } from "@/i18n/routing";
import type { ImageData } from "@/types";
import { useFavorites } from "@/utils/hooks/useFavorites";
import { getProductDetailLink } from "@/utils/links";
import { useLocale } from "next-intl";
import { LuTrash } from "react-icons/lu";
import { ImageComponent } from "../../../globals/ImageComponent";

export type FavoriteTeaserProps = {
  title: string;
  id: string;
  image: ImageData;
};

const FavoriteTeaser = ({ title, id, image }: FavoriteTeaserProps) => {
  const [favorites] = useFavorites();
  const locale = useLocale();

  return (
    <Link
      href={getProductDetailLink(id, locale)}
      className="relative flex gap-4 rounded-lg p-3 ring-2 ring-lightGray"
    >
      <ImageComponent
        src={image.src}
        alt={image.alt}
        className="aspect-square w-14"
        imageClassName="rounded-full"
      />
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
