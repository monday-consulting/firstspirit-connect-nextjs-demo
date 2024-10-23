import { RichTextElement, type RichTextElementContent } from "../elements/RichTextElement";

export type PartsTableProps = {
  tableContent: RichTextElementContent[];
  headline?: string;
  text?: RichTextElementContent[];
};

const PartsTable = ({ tableContent, headline, text }: PartsTableProps) => {
  return (
    <section className="flex flex-col">
      {headline && <h2 className="text-center font-bold text-3xl text-primary">{headline}</h2>}
      {text && <RichTextElement content={text} className="text-center" />}
      <RichTextElement content={tableContent} className="my-6" />
    </section>
  );
};

export { PartsTable };
