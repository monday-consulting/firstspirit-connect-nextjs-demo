"use client";

import { FavoriteListProvider } from "@/utils/contexts/favorites";
import type { ReactNode } from "react";

import { SWRConfig } from "swr";

export type ProviderProps = {
  children: ReactNode;
};

const ClientProvider = ({ children }: ProviderProps) => {
  return (
    <SWRConfig>
      <FavoriteListProvider>{children}</FavoriteListProvider>
    </SWRConfig>
  );
};

export { ClientProvider };
