import { Page } from "fsxa-api";

interface StandardProps {
  path: string;
}

export const Standard = ({ path }: StandardProps) => {
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
