"use client";

import type { ReactNode } from "react";
import { FavoriteListProvider } from "@/utils/contexts/favorites";

export type ProviderProps = {
  children: ReactNode;
};

const ClientProvider = ({ children }: ProviderProps) => {
  return <FavoriteListProvider>{children}</FavoriteListProvider>;
};

export { ClientProvider };
