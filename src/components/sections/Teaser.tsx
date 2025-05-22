import { ImageComponent } from "@/components/globals/ImageComponent";
import { Link } from "@/i18n/routing";
import type { ImageData, LinkData } from "@/types";
import { cn } from "@/utils/cn";
import type { ReactNode } from "react";
import type { RichTextElementProps } from "../globals/RichTextElement";
import { RichTextElement } from "../globals/RichTextElement";
import { getPreviewParams } from "@/utils/preview/getPreviewParams";

export type TeaserProps = {
  headline: string;
  claim?: string;
  image?: ImageData;
  imageReplaceContent?: ReactNode;
  text: RichTextElementProps;
  cta?: LinkData;
  imageStart?: boolean;
  breakpoint?: "sm" | "md" | "lg" | "xl";
  previewId?: string;
};

const Teaser = ({
  headline,
  claim,
  image,
  imageReplaceContent,
  text,
  cta,
  imageStart = true,
  breakpoint = "md",
  previewId,
}: TeaserProps) => {
  const previewProps = getPreviewParams(previewId);

  return (
    <section className="py-8" {...previewProps}>
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex flex-col items-center gap-8",
            breakpoint === "sm" && "sm:flex-row sm:gap-4",
            breakpoint === "md" && "md:flex-row md:gap-4",
            breakpoint === "lg" && "lg:flex-row lg:gap-4",
            breakpoint === "xl" && "xl:flex-row xl:gap-4"
          )}
        >
          <div
            className={cn(
              "px-4 text-left sm:w-full",
              (image || imageReplaceContent) && "md:w-1/2",
              imageStart && "order-last"
            )}
          >
            {claim && <p className="font-bold text-md text-text">{claim}</p>}
            {headline && (
              <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
                {headline}
              </h2>
            )}
            <div className="mb-5 text-textLight">
              <RichTextElement {...text} />
            </div>
            <div className="mt-12 flex flex-wrap">
              {cta?.href && (
                <Link href={cta.href}>
                  <div className="w-full py-1 md:mr-4 md:w-auto md:py-0">
                    <span className="inline-block w-full rounded-md bg-secondary px-7 py-5 text-center font-medium text-base text-white leading-4 hover:brightness-90 md:text-lg">
                      {cta.label}
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>
          {image && !imageReplaceContent && (
            <ImageComponent
              src={image.src}
              alt={image.alt}
              imageClassName="rounded-xl"
              className="aspect-[3/2] h-full w-1/2 px-4"
            />
          )}
          {imageReplaceContent && imageReplaceContent}
        </div>
      </div>
    </section>
  );
};
export { Teaser };
