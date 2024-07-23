import { useContext, useEffect } from "react";
import { type Favorite, FavortiteListContext, type Product } from "@/utils/contexts/favorites";
import useLocalStorage from "./useLocalStorage";

const useFavorites = () => {
  const favorites = useContext(FavortiteListContext);
  const storedList = useLocalStorage<Favorite[]>("storedList", []);

  useEffect(() => {
    favorites?.rehydrateContext();
  }, [favorites]);

  const isFavorite = (product: Product): boolean => {
    return favorites?.entryIsFavorite(product) ?? false;
  };

  return [favorites, isFavorite] as const;
};

export default useFavorites;
