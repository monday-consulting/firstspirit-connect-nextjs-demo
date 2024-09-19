import { useTranslations } from "next-intl";
import { BiSearchAlt } from "react-icons/bi";

interface SearchProps {
  className?: string;
}

const Search = ({ className }: SearchProps) => {
  const t = useTranslations();

  return (
    <div
      className={`flex h-10 items-center rounded-md border-2 border-input pl-3 font-medium text-sm text-text ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 ${className}`}
    >
      <BiSearchAlt className="h-[18px] w-[18px]" />
      <input
        type="search"
        placeholder={t("news.search")}
        className="w-full p-2 placeholder:text-text focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
};
export { Search };
