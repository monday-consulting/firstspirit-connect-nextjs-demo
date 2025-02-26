export const getPreviewParams = (previewId?: string) => {
  const isPreview = process.env.NEXT_PUBLIC_PREVIEW_MODE === "true";
  return isPreview && previewId ? { "data-preview-id": previewId } : {};
};
