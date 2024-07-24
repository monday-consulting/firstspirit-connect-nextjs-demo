"use client";

import { cn } from "@/utils/cn";
import type { Product } from "@/utils/contexts/favorites";
import useFavorites from "@/utils/hooks/useFavorites";
import { useEffect, useState } from "react";
import { LuHeart } from "react-icons/lu";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";

export type FavoriteButtonProps = {
  product: Product;
  classNames?: string;
};

const FavoriteButton = ({ product, classNames }: FavoriteButtonProps) => {
  const [favorites] = useFavorites();
  const [isActive, setIsActive] = useState(favorites.entryIsFavorite(product));

  const toggleFavorite = () => {
    if (favorites.entryIsFavorite(product)) {
      favorites.deleteEntry(product);
      setIsActive(false);
    } else {
      favorites.addEntry(product);
      setIsActive(true);
    }
  };

  return (
    <button
      type="button"
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-sm ring-2 ring-lightGray hover:ring-black",
        classNames
      )}
      onClick={toggleFavorite}
    >
      {isActive ? <VscHeartFilled size={20} /> : <VscHeart size={20} />}
    </button>
  );
};

export { FavoriteButton };
