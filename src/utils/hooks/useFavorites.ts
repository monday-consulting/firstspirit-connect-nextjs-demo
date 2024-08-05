import { useContext, useEffect } from "react";
import { type Favorite, FavortiteListContext, type Product } from "@/utils/contexts/favorites";
import useLocalStorage from "./useLocalStorage";

const useFavorites = () => {
  const favorites = useContext(FavortiteListContext);
  const storedList = useLocalStorage<Favorite[]>("storedList", []);

  useEffect(() => {
    favorites?.rehydrateContext();
  }, [favorites]);

  const isFavorite = (productId: string): boolean => {
    return favorites?.entryIsFavorite(productId) ?? false;
  };

  return [favorites, isFavorite] as const;
};

export default useFavorites;
