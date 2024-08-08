"use client";

import type React from "react";
import { useEffect, useState } from "react";

export type ClientOnlyProps = {
  children: React.ReactNode;
};

const ClientOnly = ({ children }: ClientOnlyProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
