"use client";

import { FavoriteListProvider } from "@/utils/contexts/favorites";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { ReactNode } from "react";
const queryClient = new QueryClient();

export type ProviderProps = {
  children: ReactNode;
};

const ClientProvider = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteListProvider>{children}</FavoriteListProvider>
    </QueryClientProvider>
  );
};

export { ClientProvider };
