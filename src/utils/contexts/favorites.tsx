"use client";

import { createContext, type ReactNode, useState } from "react";
import { useLocalStorage } from "@/utils/hooks/useLocalStorage";

export type Product = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
};

export type Favorite = Product & {
  isFavorite: boolean;
};

type FavoriteListContext = {
  list: Favorite[] | null;
  getAllEntries: () => Product[];
  addEntry: (newProduct: Product) => void;
  entryIsFavorite: (productId: string) => boolean;
  deleteEntry: (oldProductId: string) => void;
  deleteAllEntries: () => void;
  update: (product: Product, isFavortie: boolean) => void;
  rehydrateContext: () => void;
  setShowListValue: (newValue: boolean) => void;
  getShowListValue: () => boolean;
  toggleFavoriteList: () => void;
};
export const FavortiteListContext = createContext<FavoriteListContext>({} as FavoriteListContext);

const FavoriteListProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<Favorite[]>([]);
  const [showList, setShowList] = useState<boolean>(false);

  const [storedList, setStoredList] = useLocalStorage<Favorite[]>("storedList", []);

  const getAllEntries = (): Product[] => {
    return list as Product[];
  };

  const addEntry = (newProduct: Product) => {
    if (list.filter((item) => item.id === newProduct.id).length === 0) {
      const newList: Favorite[] = [...list, { ...newProduct, isFavorite: true }];
      setList(newList);
      setStoredList(newList);
    }
  };

  const entryIsFavorite = (productId: string): boolean => {
    return storedList.some((favorite) => favorite.id === productId);
  };

  const deleteEntry = (oldProductId: string) => {
    const newList = list.filter((item) => item.id !== oldProductId);
    setList(newList);
    setStoredList(newList);
  };

  const deleteAllEntries = () => {
    setList([]);
    setStoredList([]);
  };

  const update = (product: Product, isFavorite: boolean) => {
    if (isFavorite) {
      addEntry(product);
    } else {
      deleteEntry(product.id);
    }
  };

  const rehydrateContext = () => {
    setList(storedList);
  };

  const setShowListValue = (newValue: boolean) => {
    setShowList(newValue);
  };

  const getShowListValue = () => {
    return showList;
  };

  const toggleFavoriteList = () => {
    setShowListValue(!showList);
  };

  return (
    <FavortiteListContext.Provider
      value={{
        list,
        getAllEntries,
        addEntry,
        entryIsFavorite,
        deleteEntry,
        deleteAllEntries,
        update,
        rehydrateContext,
        setShowListValue,
        getShowListValue,
        toggleFavoriteList,
      }}
    >
      {children}
    </FavortiteListContext.Provider>
  );
};

export { FavoriteListProvider };
