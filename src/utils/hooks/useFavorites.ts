import { useContext, useEffect } from "react";
import { FavortiteListContext } from "@/utils/contexts/favorites";

const useFavorites = () => {
  const favorites = useContext(FavortiteListContext);

  useEffect(() => {
    favorites?.rehydrateContext();
  }, [favorites]);

  const isFavorite = (productId: string): boolean => {
    return favorites?.entryIsFavorite(productId) ?? false;
  };

  return [favorites, isFavorite] as const;
};

export default useFavorites;
