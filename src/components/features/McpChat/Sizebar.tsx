// Desktop sizes - on mobile/tablet, the chat will be full-screen responsive
export const sizeClasses = {
  sm: { width: "lg:w-[420px]", height: "lg:h-[720px]" },
  md: { width: "lg:w-[620px]", height: "lg:h-[720px]" },
  lg: { width: "lg:w-[920px]", height: "lg:h-[720px]" },
} as const;

export type SizeKey = keyof typeof sizeClasses;

export type SizebarProps = {
  size: SizeKey;
  setSize: (size: SizeKey) => void;
};

export const Sizebar = ({ size, setSize }: SizebarProps) => {
  return (
    <div className="hidden items-center gap-2 lg:inline-flex">
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
