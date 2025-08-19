export const sizeClasses = {
  sm: { width: "w-[380px]", height: "h-[520px]" },
  md: { width: "w-[620px]", height: "h-[680px]" },
  lg: { width: "w-[920px]", height: "h-[680px]" },
} as const;

export type SizeKey = keyof typeof sizeClasses;

export type SizebarProps = {
  size: SizeKey;
  setSize: (size: SizeKey) => void;
};

export const Sizebar = ({ size, setSize }: SizebarProps) => {
  return (
    <div className="flex items-center justify-end gap-1 border-b px-2 py-1 text-xs">
      <span className="mr-1 opacity-60">Size:</span>
      {(["sm", "md", "lg"] as SizeKey[]).map((key) => (
        <button
          type="button"
          key={key}
          onClick={() => setSize(key)}
          className={`rounded px-2 py-0.5 ring-1 ${
            size === key
              ? "bg-blue-400 text-white ring-gray-900"
              : "bg-white text-gray-700 ring-gray-300 hover:bg-gray-50"
          }`}
          aria-pressed={size === key}
        >
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
