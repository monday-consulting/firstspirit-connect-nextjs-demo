import { useEffect } from "react";

export const useHotkey = (hotkey: string, onMatch: () => void) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const parts = hotkey
        .toLowerCase()
        .split("+")
        .map((s) => s.trim());
      const needCtrl = parts.includes("ctrl") || parts.includes("control");
      const needShift = parts.includes("shift");
      const needAlt = parts.includes("alt") || parts.includes("option");
      const needMeta = parts.some((x) => ["meta", "cmd", "command"].includes(x));
      const key = parts.at(-1);

      if (
        !!needCtrl === event.ctrlKey &&
        !!needShift === event.shiftKey &&
        !!needAlt === event.altKey &&
        !!needMeta === event.metaKey &&
        event.key.toLowerCase() === key
      ) {
        event.preventDefault();
        onMatch();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [hotkey, onMatch]);
};
