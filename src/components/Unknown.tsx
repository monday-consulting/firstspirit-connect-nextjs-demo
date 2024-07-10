import React, { useMemo } from "react";
import { Section, Dataset, Content2Section, Page, DataEntries } from "fsxa-api";
import { useDev } from "./composables/showDev";
import DevComponent from "./Dev";

interface UnknownProps {
    content?: Section | Dataset | Content2Section | Page;
    data?: DataEntries;
}

const Unknown = ({ content }: UnknownProps) => {
    const { showDev } = useDev();

    const componentType = useMemo(() => {
        switch (content?.type) {
            case "Section":
                return "Section " + content.sectionType;
            case "Content2Section":
                return "Content2Section " + content.sectionType;
            case "Dataset":
                return "Dataset " + content.schema + " " + content.template;
            default:
                return content?.name;
        }
    }, [content]);

    return (
        <div
            className="group relative border bg-red-50 py-4 px-12 text-red-500"
            data-testid="unknown"
        >
            {showDev && <DevComponent content={content} />}
            <span className="font-bold">Unknown Component {componentType}</span>
        </div>
    );
};

export default Unknown;
