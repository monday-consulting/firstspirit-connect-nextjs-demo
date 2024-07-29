import type { PageBody } from "fsxa-api";
import Body from "../page/Body";

interface StandardLayoutProps {
  pageBodies: PageBody[];
}

const StandardLayout = ({ pageBodies }: StandardLayoutProps) => {
  return <Body content={pageBodies[0].children} />;
};

export { StandardLayout };
