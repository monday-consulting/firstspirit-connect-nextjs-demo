import { useContext } from "react";
import { PreviewContext } from "@/app/[locale]/provider";

export const usePreview = () => useContext(PreviewContext);

export const usePreviewId = (previewId: string) => {
  const { isPreview } = usePreview();
  return isPreview ? { "data-preview-id": previewId } : {};
};
