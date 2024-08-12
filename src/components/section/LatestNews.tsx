export type News = {
  st_headline: string;
  st_newstag: {
    type: string;
    key: string;
    value: string;
  };
};

export type LatestNewsProps = {
  data: News;
};

const LatestNews = ({ data }: LatestNewsProps) => {
  return (
    <div>
      <h2>{data.st_headline}</h2>
    </div>
  );
};

export { LatestNews };
