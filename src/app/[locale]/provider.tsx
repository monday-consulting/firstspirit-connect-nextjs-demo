"use client";

import { createContext, type ReactNode } from "react";
import { FavoriteListProvider } from "@/utils/contexts/favorites";

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
