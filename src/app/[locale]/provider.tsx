"use client";

import { FavoriteListProvider } from "@/utils/contexts/favorites";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useState, type ReactNode, createContext } from "react";

export type ProviderProps = {
  children: ReactNode;
};

type PreviewContextType = { isPreview: boolean };
export const PreviewContext = createContext<PreviewContextType>({ isPreview: false });

const ClientProvider = ({ children }: ProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const isPreview = process.env.NEXT_PUBLIC_PREVIEW_MODE === "true";

  return (
    <PreviewContext.Provider value={{ isPreview }}>
      <QueryClientProvider client={queryClient}>
        <FavoriteListProvider>{children}</FavoriteListProvider>
      </QueryClientProvider>
    </PreviewContext.Provider>
  );
};

export { ClientProvider };
