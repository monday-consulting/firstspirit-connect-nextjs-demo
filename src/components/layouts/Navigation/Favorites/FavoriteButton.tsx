"use client";

import { useTranslations } from "next-intl";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { cn } from "@/utils/cn";
import type { Product } from "@/utils/contexts/favorites";
import { useFavorites } from "@/utils/hooks/useFavorites";

export type FavoriteButtonProps = {
  product: Product;
  classNames?: string;
};

const FavoriteButton = ({ product, classNames }: FavoriteButtonProps) => {
  const t = useTranslations();

  const [favorites, isFavorite] = useFavorites();

  const handleFavoriteState = () => {
    if (!isFavorite(product.id)) {
      favorites.addEntry(product);
    } else {
      favorites.deleteEntry(product.id);
    }
  };

  return (
    <button
      type="button"
      name={isFavorite(product.id) ? t("buttons.removeFavorite") : t("buttons.addFavorite")}
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-sm ring-2 ring-lightGray hover:ring-black",
        classNames
      )}
      onClick={handleFavoriteState}
    >
      {isFavorite(product.id) ? <VscHeartFilled size={20} /> : <VscHeart size={20} />}
    </button>
  );
};

export { FavoriteButton };
