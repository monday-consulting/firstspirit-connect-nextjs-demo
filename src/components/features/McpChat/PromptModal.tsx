import type { Resource } from "@modelcontextprotocol/sdk/types.js";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

type PromptModalProps = {
  title?: string;
  description?: string;
  arguments?: { name: string; description?: string; required?: boolean }[];
  availableResources?: Resource[];
  onClose: () => void;
  onSubmit: (values: Record<string, string>) => void | Promise<void>;
};

export const PromptModal = ({
  title,
  description,
  arguments: promptArgs = [],
  availableResources = [],
  onClose,
  onSubmit,
}: PromptModalProps) => {
  const t = useTranslations();
  const titleId = useId();
  const [values, setValues] = useState<Record<string, string>>({});
  const locale = useLocale();
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Extract product names from resources for select dropdowns
  const productOptions = useMemo(() => {
    const options = availableResources
      .filter((resource) => resource.uri?.includes("fs://") && resource.name?.includes("Product"))
      .map((resource) => {
        // Extract product name from the resource name (e.g., "Product de-DE Produktname" -> "Produktname")
        const nameParts = resource.name?.split(" ") || [];
        const productName = nameParts.slice(2).join(" ") || resource.name || "";
        return {
          label: productName,
          value: productName,
        };
      })
      .filter((option) => option.label.trim().length > 0);

    // Remove duplicates based on value (product name)
    const uniqueOptions = Array.from(
      new Map(options.map((option) => [option.value, option])).values()
    );

    return uniqueOptions;
  }, [availableResources]);

  // Check if an argument should be rendered as a product select
  const isProductArgument = (argName: string) => {
    const isSearchPrompt = title?.toLowerCase().includes("search") || title?.toLowerCase().includes("suche");
    if (isSearchPrompt) return false;
    
    return argName.toLowerCase().includes("product") && !argName.toLowerCase().includes("category");
  };

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

  // Focus first input on mount
  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

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
      className="fixed inset-0 z-50 flex items-end justify-center backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label={t("chat.promptModal.close")}
        onClick={onClose}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClose();
          }
        }}
      />
      <div className="relative z-40 w-full max-w-md rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-gray border-b px-4 py-3">
          <h3 id={titleId} className="font-semibold text-base text-textDark">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-text transition-colors hover:bg-lightGray hover:text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={t("chat.promptModal.close")}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-3">
          {description && <p className="mb-3 text-sm text-textLight">{description}</p>}

          {promptArgs.length > 0 ? (
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              {promptArgs.map((arg, index) =>
                arg.name !== "locale" ? (
                  <label key={arg.name} className="flex flex-col gap-1">
                    <span className="font-medium text-sm text-text">
                      {arg.description || arg.name}{" "}
                      {arg.required && <span className="text-red-500">*</span>}
                    </span>
                    {isProductArgument(arg.name) && productOptions.length > 0 ? (
                      <div className="relative">
                        <select
                          ref={index === 0 ? (firstInputRef as any) : undefined}
                          value={values[arg.name] ?? ""}
                          onChange={(event) =>
                            setValues((prev) => ({ ...prev, [arg.name]: event.target.value }))
                          }
                          required={arg.required}
                          className="w-full appearance-none rounded-md border border-gray bg-white px-3 py-2 text-sm text-textDark transition-colors hover:border-textLight focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary pr-8" // note: added pr-8
                        >
                          <option value="">
                            {arg.required
                              ? t("chat.promptModal.required")
                              : t("chat.promptModal.optional")}
                          </option>
                          {productOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>

                        <BiChevronDown
                          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
                          size={18}
                        />
                      </div>
                    ) : (
                      <input
                        ref={index === 0 ? firstInputRef : undefined}
                        type="text"
                        value={values[arg.name] ?? ""}
                        onChange={(event) =>
                          setValues((prev) => ({ ...prev, [arg.name]: event.target.value }))
                        }
                        placeholder={
                          arg.required
                            ? t("chat.promptModal.required")
                            : t("chat.promptModal.optional")
                        }
                        required={arg.required}
                        className="rounded-md border border-gray bg-white px-3 py-2 text-sm text-textDark transition-colors placeholder:text-textLighter hover:border-textLight focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    )}
                  </label>
                ) : null
              )}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md border border-gray bg-white px-4 py-2 font-medium text-sm text-text transition-colors hover:bg-lightGray focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {t("chat.promptModal.cancel")}
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 font-medium text-sm text-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {t("chat.promptModal.submit")}
                </button>
              </div>
            </form>
          ) : (
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => onSubmit({})}
                className="rounded-md bg-primary px-4 py-2 font-medium text-sm text-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {t("chat.promptModal.submit")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
