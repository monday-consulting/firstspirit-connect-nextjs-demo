import { useEffect, useState } from "react";
import { useLocale } from "use-intl";

export const Modal: React.FC<{
  title?: string;
  description?: string;
  arguments?: { name: string; required?: boolean }[];
  onClose: () => void;
  onSubmit: (values: Record<string, string>) => void | Promise<void>;
  submitLabel?: string;
  cancelLabel?: string;
}> = ({
  title,
  description,
  arguments: promptArgs = [],
  onClose,
  onSubmit,
  submitLabel = "Submit",
  cancelLabel = "Cancel",
}) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const locale = useLocale();

  // Initial value
  useEffect(() => {
    const init: Record<string, string> = {};
    for (const arg of promptArgs) {
      if (arg.name === "locale") {
        init[arg.name] = locale ?? "";
      }
    }
    setValues(init);
  }, [promptArgs, locale]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const cleaned = Object.fromEntries(
      Object.entries(values)
        .map(([key, value]) => [key, value.trim()])
        .filter(([, value]) => value.length > 0)
    );
    await onSubmit(cleaned);
  };

  return (
    <div
      className="fixed inset-0 z-30 flex items-end justify-center sm:items-center"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/30"
        aria-label="Close modal"
        onClick={onClose}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClose();
          }
        }}
      />
      <div className="relative z-40 w-full rounded-t-2xl bg-white p-4 shadow-xl sm:max-w-lg sm:rounded-2xl">
        <div className="mb-3 flex items-center justify-between">
          <h3 id="modal-title" className="font-semibold text-lg">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-2 py-1 text-gray-600 hover:bg-gray-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {description ? <p className="mb-3 text-gray-600 text-sm">{description}</p> : null}

        {promptArgs.length > 0 ? (
          <form className="space-y-3" onSubmit={handleSubmit}>
            {promptArgs.map(
              (arg) =>
                arg.name !== "locale" && (
                  <label key={arg.name} className="block">
                    <span className="mb-1 block font-medium text-sm">
                      {arg.name} {arg.required ? "*" : ""}
                    </span>
                    <input
                      type="text"
                      value={values[arg.name] ?? ""}
                      onChange={(event) =>
                        setValues((prev) => ({ ...prev, [arg.name]: event.target.value }))
                      }
                      placeholder={arg.required ? "required" : "optional"}
                      required={arg.required}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                )
            )}
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border px-3 py-2 hover:bg-gray-50"
              >
                {cancelLabel}
              </button>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
              >
                {submitLabel}
              </button>
            </div>
          </form>
        ) : (
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => onSubmit({})}
              className="rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
            >
              {submitLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
