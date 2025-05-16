import { usePreview } from "@/utils/hooks/usePreview";

export default function withPreview<T extends object>(
  Component: React.ComponentType<T>,
  previewId: string
) {
  return function WrappedComponent(props: T) {
    const { isPreview } = usePreview();

    return isPreview ? (
      <div data-preview-id={previewId}>
        <Component {...props} />
      </div>
    ) : (
      <Component {...props} />
    );
  };
}
