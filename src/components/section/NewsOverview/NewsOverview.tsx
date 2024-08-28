import { CategoryTabs } from "./CategoryTabs";
import { NewsTeaser, type NewsT } from "./NewsTeaser";
import { Search } from "./Search";

interface NewsOverviewProps {
  data: NewsT[];
}

const NewsOverview = ({ data }: NewsOverviewProps) => {
  //TODO: make CategoryTabs responsive
  //TODO: finish search bar
  return (
    <div>
      <div className="text-center">
        <h1 className="mb-5 font-bold font-heading text-2xl text-primary">News Overview</h1>
        <p className="mb-7 text-text">
          A simple news overview page with search and filter capabilities.
        </p>
        <Search className="m-auto mb-10 block w-1/3" />
        <CategoryTabs data={data} />
      </div>
      <div className="mx-8 mt-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {data.map((item) => (
          <NewsTeaser key={item.headline} data={item} />
        ))}
      </div>
    </div>
  );
};
export { NewsOverview };
