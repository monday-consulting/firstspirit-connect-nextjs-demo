export default function withPreview<T extends object>(
  Component: React.ComponentType<T>,
  previewId: string
) {
  return function WrappedComponent(props: T) {
    const isPreview = process.env.NEXT_PUBLIC_PREVIEW_MODE === "true";

    return isPreview ? (
      <div data-preview-id={previewId}>
        <Component {...props} />
      </div>
    ) : (
      <Component {...props} />
    );
  };
}
