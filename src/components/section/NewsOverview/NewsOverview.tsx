import { useTranslations } from "next-intl";
import { CategoryDropdown } from "./CategoryDropdown";
import { CategoryTabs } from "./CategoryTabs";
import type { NewsT } from "./NewsTeaser";
import { Search } from "./Search";
import { useWindowSize } from "@uidotdev/usehooks";

export type NewsOverviewProps = {
  News: NewsT[];
};

const NewsOverview = ({ News }: NewsOverviewProps) => {
  const size = useWindowSize();
  const t = useTranslations();

  return (
    <div>
      <div className="text-center">
        <h1 className="mb-5 font-bold font-heading text-2xl text-primary">
          {t("news.newsOverview")}
        </h1>
        <p className="mb-7 text-text">{t("news.subHeadline")}</p>
        <Search className="m-auto mb-10 block sm:w-full md:w-1/3" />
      </div>
      {size.width <= 640 ? <CategoryDropdown News={News} /> : <CategoryTabs News={News} />}
    </div>
  );
};
export { NewsOverview };
