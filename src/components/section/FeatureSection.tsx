import { Feature } from "@/components/elements/Feature";
import type { FeatureProps } from "@/components/elements/Feature";
import type { RichTextElementProps } from "../elements/RichTextElement";
import { RichTextElement } from "../elements/RichTextElement";

export type FeatureSectionProps = {
  headline: string;
  text: RichTextElementProps[] | string;
  features: FeatureProps[];
};

const FeatureSection = ({ headline, text, features }: FeatureSectionProps) => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
          {headline}
        </h2>
        <div className="mb-6 font-semibold text-coolGray-500 text-xl leading-7">
          {text && typeof text !== "string" ? (
            <>
              {text.map((item, index) => (
                <RichTextElement key={`richtext-item-${index}`} {...item} />
              ))}
            </>
          ) : (
            <>{text}</>
          )}
        </div>
        <div className="-m-8 flex flex-wrap text-left">
          {features.map((feature) => (
            <Feature {...feature} key={feature.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export { FeatureSection };
