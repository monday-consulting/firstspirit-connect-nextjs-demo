import { StepsItem } from "../elements/StepsItem";
import type Step from "../elements/StepsItem";

interface StepsProps {
  subline: string;
  headline: string;
  text: string;
  steps: Step[];
}

const Steps = ({ subline, headline, text, steps }: StepsProps) => {
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
          <p className="mb-6 font-semibold text-coolGray-500 text-xl leading-7">{text}</p>
        </div>
        <div className="flex flex-wrap px-4 text-left">
          {steps.map((step) => (
            <StepsItem data={step} key={step.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export { Steps };
