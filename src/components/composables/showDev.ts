"use client";

import { useState } from "react";

export type UseDevReturn = {
  showDev: boolean;
};
// in the vue component is the state of showDev false, i switch them to true to visualize the header
export function useDev(): UseDevReturn {
  const [showDev] = useState<boolean>(true);
  return { showDev };
}
