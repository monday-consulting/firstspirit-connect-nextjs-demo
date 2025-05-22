import { getPreviewParams } from "@/utils/preview/getPreviewParams";
import { RichTextElement, type RichTextElementContent } from "../globals/RichTextElement";

export type PartsTableProps = {
  tableContent: RichTextElementContent[];
  headline?: string;
  text?: RichTextElementContent[];
  previewId?: string;
};

const PartsTable = ({ tableContent, headline, text, previewId }: PartsTableProps) => {
  const previewProps = getPreviewParams(previewId);

  return (
    <section className="flex flex-col gap-6" {...previewProps}>
      {headline && (
        <h2
          className="text-center font-bold text-3xl text-primary"
          data-preview-id="#st_parts_headline"
        >
          {headline}
        </h2>
      )}
      {text && (
        <RichTextElement content={text} className="text-center" data-preview-id="#st_parts_text" />
      )}
      <div className="rounded-lg border-[1px] border-lightGray p-4 shadow-lg">
        <RichTextElement content={tableContent} className="my-6" />
      </div>
    </section>
  );
};

export { PartsTable };
