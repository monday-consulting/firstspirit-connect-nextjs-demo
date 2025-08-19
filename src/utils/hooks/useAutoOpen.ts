import { useEffect } from "react";
export const useAutoOpen = (
  enabled: boolean,
  delayMs: number | null,
  open: boolean,
  setOpen: (value: boolean) => void
) => {
  useEffect(() => {
    if (!enabled || !delayMs || open) return;
    const time = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(time);
  }, [enabled, delayMs, open, setOpen]);
};
