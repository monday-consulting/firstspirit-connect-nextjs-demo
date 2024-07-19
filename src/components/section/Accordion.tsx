import React from "react";
import type { Accordion as AccordionInterface } from "../../../types";
import { AccordionItem } from "../elements/AccordionItem";

interface AccordionProps {
    primary?: boolean;
    data: AccordionInterface;
}

const Accordion = ({ primary, data }: AccordionProps) => {
    const mode = primary
        ? "storybook-accordionitem--primary"
        : "storybook-accordionitem--secondary";

    return (
        <div className="py-14">
            <div className="container mx-auto px-4 text-center md:max-w-4xl">
                <p className="mb-7 font-semibold text-sm text-text uppercase tracking-px">
                    {data.st_subline}
                </p>
                <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
                    {data.st_headline}
                </h2>
                <div className="-m-1 mb-11 flex flex-wrap text-left">
                    {data.st_accordion.map((item) => (
                        <AccordionItem key={item.id} data={item.data} />
                    ))}
                </div>
                <div>
                    <p className="mb-5 font-medium text-coolGray-500">
                        Richtext here
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
