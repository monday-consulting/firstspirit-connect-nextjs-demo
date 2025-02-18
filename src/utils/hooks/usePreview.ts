import { PreviewContext } from "@/app/[locale]/provider";
import { useContext } from "react";

export const usePreview = () => useContext(PreviewContext);

export const usePreviewId = (previewId: string) => {
  const { isPreview } = usePreview();
  return isPreview ? { "data-preview-id": previewId } : {};
};
