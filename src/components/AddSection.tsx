import React from "react";
import { createSection } from "./tests/testutils/createSection";
import type { Section } from "fsxa-api";

export type AddSectionProps = {
  bodyName: string;
};

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
        type="button"
        className="group container relative mx-auto flex h-32 items-center justify-center border border-fs-button-bg border-dashed hover:bg-gray-50"
        onClick={handleCreateSection}
      >
        <div className="h-16 w-16 cursor-pointer space-x-2 rounded-full bg-blue-600 px-4 py-2 text-center font-thin text-4xl text-white antialiased group-hover:bg-blue-900">
          +
        </div>
      </button>
    </section>
  );
};

export { AddSection };
