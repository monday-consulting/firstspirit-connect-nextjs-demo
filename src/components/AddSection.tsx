import React from "react";
import { createSection } from "./tests/testutils/createSection";
import { Section } from "fsxa-api";

interface AddSectionProps {
    bodyName: string;
}

const AddSection = ({ bodyName }: AddSectionProps) => {
    const handleCreateSection = () => {
        const optionalSection: Partial<Section> = {
            name: bodyName, // set the name as bodyname for type fixing
        };
        createSection(optionalSection);
    };

    return (
        <section className="py-4">
            <button
                className="border-fs-button-bg group container relative mx-auto flex h-32 items-center justify-center border border-dashed hover:bg-gray-50"
                onClick={handleCreateSection}
            >
                <div className="h-16 w-16 cursor-pointer space-x-2 rounded-full bg-blue-600 px-4 py-2 text-center text-4xl font-thin text-white antialiased group-hover:bg-blue-900">
                    +
                </div>
            </button>
        </section>
    );
};

export default AddSection;
