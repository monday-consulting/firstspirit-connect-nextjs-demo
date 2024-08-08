import type { PageBody } from "fsxa-api";
import Body from "../page/Body";
import type { FirstSpiritPageBody } from "@/gql/generated/graphql";

export type StandardLayoutProps = {
  pageBodies?: FirstSpiritPageBody[];
};

const StandardLayout = ({ pageBodies }: StandardLayoutProps) => {
  return <Body content={pageBodies} />;
};

export { StandardLayout };
