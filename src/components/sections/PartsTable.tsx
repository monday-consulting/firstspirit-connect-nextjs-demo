import { RichTextElement, type RichTextElementContent } from "../globals/RichTextElement";
import { getPreviewParams } from "@/utils/preview/getPreviewParams";

export type PartsTableProps = {
  tableContent: RichTextElementContent[];
  headline?: string;
  text?: RichTextElementContent[];
};

const PartsTable = ({ tableContent, headline, text }: PartsTableProps) => {
  // TODO: change to real id!
  const previewProps = getPreviewParams("EXAMPLE_PREVIEW_ID");

  return (
    <section className="flex flex-col gap-6" {...previewProps}>
      {headline && <h2 className="text-center font-bold text-3xl text-primary">{headline}</h2>}
      {text && <RichTextElement content={text} className="text-center" />}
      <div className="rounded-lg border-[1px] border-lightGray p-4 shadow-lg">
        <RichTextElement content={tableContent} className="my-6" />
      </div>
    </section>
  );
};

export { PartsTable };
