"use client";

import { FavoriteListProvider } from "@/utils/contexts/favorites";
import type { ReactNode } from "react";

export type ProviderProps = {
  children: ReactNode;
};

const ClientProvider = ({ children }: ProviderProps) => {
  return <FavoriteListProvider>{children}</FavoriteListProvider>;
};

export { ClientProvider };
