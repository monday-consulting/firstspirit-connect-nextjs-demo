import type { FirstSpiritPageBody } from "@/gql/generated/graphql";
import { Body } from "../page/Body";

export type HomeProps = {
  pageBodies: FirstSpiritPageBody[];
};

const Home = ({ pageBodies }: HomeProps) => {
  const top = pageBodies?.find((pageBody) => pageBody.name === "top");
  const content = pageBodies?.find((pageBody) => pageBody.name === "content");

  return (
    <div className="flex flex-col gap-4">
      {top && <Body content={[top]} />}
      {content && <Body content={[content]} />}
    </div>
  );
};

export { Home };
