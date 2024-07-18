import { Page } from "fsxa-api";

interface StandardProps {
  primary?: boolean;
  path: string;
}

export const Standard = ({ primary = true, path }: StandardProps) => {
  const mode = primary ? "storybook-standard--primary" : "storybook-standard--secondary";
  //TODO define page of type Page
  //TODO (below) add SectionHeader and PageBody
  return (
    <>
      <div data-testid="standardPageLayout">
        <h1>{path}</h1>
      </div>
    </>
  );
};
