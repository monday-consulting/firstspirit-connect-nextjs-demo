import { CategoryTabs } from "./CategoryTabs";
import type { NewsT } from "./NewsTeaser";
import { Search } from "./Search";

export type NewsOverviewProps = {
  News: NewsT[];
};

const NewsOverview = ({ News }: NewsOverviewProps) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="mb-5 font-bold font-heading text-2xl text-primary">News Overview</h1>
        <p className="mb-7 text-text">
          A simple news overview page with search and filter capabilities.
        </p>
        <Search className="m-auto mb-10 block sm:w-full md:w-1/3" />
      </div>
      <CategoryTabs News={News} />
    </div>
  );
};
export { NewsOverview };
