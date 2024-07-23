import { cn } from "@/utils/cn";

interface News {
  st_headline: string;
  st_newstag: {
    type: string;
    key: string;
    value: string;
  };
}

interface LatestNewsProps {
  data: News;
}

export const LatestNews = ({ data }: LatestNewsProps) => {
  return (
    <div>
      <h2>{data.st_headline}</h2>
    </div>
  );
};
