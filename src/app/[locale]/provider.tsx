"use client";

import { FavoriteListProvider } from "@/utils/contexts/favorites";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useState, type ReactNode } from "react";

export type ProviderProps = {
  children: ReactNode;
};

const ClientProvider = ({ children }: ProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteListProvider>{children}</FavoriteListProvider>
    </QueryClientProvider>
  );
};

export { ClientProvider };
