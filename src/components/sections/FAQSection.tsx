import type { ReactNode } from "react";
import { Accordion, type AccordionProps } from "../elements/Accordion";

export type FAQSectionProps = {
  headline: string;
  entries: AccordionProps[];
  claim?: string;
  subline?: ReactNode | string;
};

const FAQSection = ({ headline, entries, claim, subline }: FAQSectionProps) => {
  return (
    <div className="py-14">
      <div className="container mx-auto px-4 text-center md:max-w-4xl">
        {claim && (
          <p className="mb-7 font-semibold text-sm text-text uppercase tracking-px">{claim}</p>
        )}
        <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
          {headline}
        </h2>
        <div className="-m-1 mb-11 flex flex-wrap text-left">
          {entries && entries.length > 0 && (
            <>
              {entries.map((entry) => (
                <Accordion key={entry.title} title={entry.title} content={entry.content} />
              ))}
            </>
          )}
        </div>
        {subline && (
          <div>
            <p className="mb-5 font-medium text-text">{subline}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { FAQSection };
