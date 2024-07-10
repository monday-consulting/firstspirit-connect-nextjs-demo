import { Page } from "fsxa-api";

interface HomeProps {
  primary?: boolean;
  path: string;
}

export const Home = ({ primary = true, path }: HomeProps) => {
  const mode = primary ? "storybook-home--primary" : "storybook-home--secondary";

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
