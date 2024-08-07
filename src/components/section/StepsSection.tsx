import RichTextElement, { type RichTextElementProps } from "../elements/RichTextElement";
import { StepsItem, type StepsItemProps } from "../elements/StepsItem";

export type StepsSectionProps = {
  subline: string;
  headline: string;
  richtext?: RichTextElementProps;
  stepsItems: StepsItemProps[];
};

const StepsSection = ({ subline, headline, stepsItems, richtext }: StepsSectionProps) => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto mb-16 max-w-5xl md:mb-24">
          <span className="mb-4 inline-block rounded-full bg-gray-100 px-2 py-px font-medium text-secondary text-xs uppercase leading-5 shadow-sm">
            {subline}
          </span>
          <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
            {headline}
          </h2>
          {richtext && (
            <div className="mb-6 font-semibold text-coolGray-500 text-xl leading-7">
              <RichTextElement {...richtext} />
            </div>
          )}
        </div>
        <div className="flex flex-wrap px-4 text-left">
          {stepsItems.map((item) => (
            <StepsItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { StepsSection };
