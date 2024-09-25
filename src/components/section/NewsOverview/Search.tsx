import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { LuSearch } from "react-icons/lu";

export type SearchProps = {
  input: string;
  setInput: (newInput: string) => void;
  className?: string;
};

const Search = ({ input, setInput, className }: SearchProps) => {
  const t = useTranslations();

  return (
    <div
      className={cn(
        className,
        "m-auto mb-6 flex h-10 items-center overflow-hidden rounded-md border-2 border-input pl-3 font-medium text-sm text-text ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 sm:w-full md:w-1/3"
      )}
    >
      <LuSearch size={18} />
      <input
        type="search"
        placeholder={t("news.search")}
        className="w-full p-2 placeholder:text-text focus-visible:outline-none"
        name="searchInput"
        id="searchInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export { Search };
