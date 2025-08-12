"use client";

import { FavoriteListProvider } from "@/utils/contexts/favorites";

import { type ReactNode, createContext } from "react";

export type ProviderProps = {
  children: ReactNode;
};

type PreviewContextType = { isPreview: boolean };
export const PreviewContext = createContext<PreviewContextType>({ isPreview: false });

const ClientProvider = ({ children }: ProviderProps) => {
  const isPreview = process.env.NEXT_PUBLIC_PREVIEW_MODE === "true";

  return (
    <PreviewContext.Provider value={{ isPreview }}>
      <FavoriteListProvider>{children}</FavoriteListProvider>
    </PreviewContext.Provider>
  );
};

export { ClientProvider };
