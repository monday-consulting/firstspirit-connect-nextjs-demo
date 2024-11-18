import type { ImageData } from "@/types";
import { RichTextElement, type RichTextElementProps } from "../globals/RichTextElement";
import { ImageComponent } from "@/components/globals/ImageComponent";

export type TextImageLayout = "text-image" | "image-text";

export type TextImageProps = {
  headline: string;
  subheadline: RichTextElementProps;
  text: RichTextElementProps;
  twoColumn: boolean;
  layout: TextImageLayout;
  image?: ImageData;
};

const TextImage = ({ headline, subheadline, text, twoColumn, layout, image }: TextImageProps) => {
  if (image) {
    twoColumn = false;
  }

  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-14 w-full px-4">
            {headline && (
              <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
                {headline}
              </h2>
            )}
            {subheadline && (
              <div className="mb-6 font-semibold text-coolGray-500 text-xl leading-7">
                <RichTextElement {...subheadline} />
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row">
            {image && (
              <div
                className={`${layout === "image-text" ? "order-1" : "order-2"} w-full break-after-column px-4 pb-4`}
              >
                <ImageComponent
                  src={image.src}
                  alt={image.alt}
                  imageClassName="rounded-xl"
                  className="aspect-[3/2] w-full"
                />
              </div>
            )}
            {text && (
              <div
                className={`${layout === "image-text" ? "order-2" : "order-1"} w-full break-after-column px-4 pb-4 ${twoColumn ? "lg:columns-2 " : "lg:columns-1 "}`}
              >
                <RichTextElement {...text} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export { TextImage };
