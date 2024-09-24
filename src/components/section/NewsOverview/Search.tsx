import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { LuSearch } from "react-icons/lu";

export type SearchProps = {
  className?: string;
};

const Search = ({ className }: SearchProps) => {
  const t = useTranslations();

  return (
    <div
      className={cn(
        className,
        "flex h-10 items-center rounded-md border-2 border-input pl-3 font-medium text-sm text-text ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2"
      )}
    >
      <LuSearch size={18} />
      <input
        type="search"
        placeholder={t("news.search")}
        className="w-full p-2 placeholder:text-text focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
};

export { Search };
