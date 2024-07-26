import { Feature } from "@/components/elements/Feature";
import type { FeatureProps } from "@/components/elements/Feature";

interface FeatureSectionProps {
  headline: string;
  text: string;
  features: FeatureProps[];
}

const FeatureSection = ({ headline, text, features }: FeatureSectionProps) => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
          {headline}
        </h2>
        <p className="mb-6 font-semibold text-coolGray-500 text-xl leading-7">{text}</p>
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
