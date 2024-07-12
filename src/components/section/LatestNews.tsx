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
  primary?: boolean;
  data: News;
}

export const LatestNews = ({ primary = true, data }: LatestNewsProps) => {
  const mode = primary ? "storybook-latestnews--primary" : "storybook-latestnews--secondary";
  return (
    <div className={cn(mode)}>
      <h2>{data.st_headline}</h2>
    </div>
  );
};
