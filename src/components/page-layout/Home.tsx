import { cn } from "@/utils/cn";
import { Page } from "fsxa-api";

interface HomeProps {
  path: string;
}

export const Home = ({ path }: HomeProps) => {
  //TODO define variable page of type Page
  //const top = () => {
  //  return page.children.find((pagebody) => pagebody.name === 'top')!
  //}
  //const content = () => {
  //  return page.children.find((pagebody) => pagebody.name === 'content')!
  //}

  //TODO (below) two PageBody tags
  return (
    <div data-testid="homePageLayout">
      <h1>{path}</h1>
    </div>
  );
};
