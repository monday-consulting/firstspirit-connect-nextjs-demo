"use client";

import { Feature } from "@/components/features/Features/Feature";
import type { FeatureProps } from "@/components/features/Features/Feature";
import type { RichTextElementContent } from "../globals/RichTextElement";
import { RichTextElement } from "../globals/RichTextElement";
import { usePreviewId } from "@/utils/hooks/usePreview";

export type FeaturesProps = {
  headline: string;
  text: RichTextElementContent[];
  features: FeatureProps[];
};

const Features = ({ headline, text, features }: FeaturesProps) => {
  // TODO: change to real id!
  const previewProps = usePreviewId("EXAMPLE_PREVIEW_ID");

  return (
    <section className="py-14" {...previewProps}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
          {headline}
        </h2>
        <div className="mb-6 font-semibold text-coolGray-500 text-xl leading-7">
          <RichTextElement content={text} />
        </div>
        <div className="-m-8 flex flex-wrap text-left">
          {features.map((feature, index) => (
            <Feature {...feature} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export { Features };
