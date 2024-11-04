import { RichTextElement, type RichTextElementContent } from "../../globals/RichTextElement";

export type StepsItemProps = {
  title: string;
  text: RichTextElementContent[];
  index: number;
};

const StepsItem = ({ title, text, index }: StepsItemProps) => {
  return (
    <div className="mb-16 w-full px-4 py-4 md:w-1/2 lg:w-1/3">
      <div className="relative rounded-md bg-lightGray px-8 pt-14 pb-8 shadow-md">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 inline-flex h-16 w-16 items-center justify-center rounded-full">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-semibold text-white text-xl">
            {index}
          </div>
        </div>
        <h3 className="mb-4 font-semibold text-primary text-xl md:text-2xl">{title}</h3>
        <div className="mb-5 font-medium text-text">
          <RichTextElement content={text} />
        </div>
      </div>
    </div>
  );
};

export { StepsItem };
