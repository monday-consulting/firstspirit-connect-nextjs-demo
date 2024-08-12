import Image from "next/image";
import { RichTextElement, type RichTextElementProps } from "../elements/RichTextElement";

export interface TextImageProps {
  headline: string;
  subheadline: string;
  image?: {
    src: string;
    alt: string;
  };
  text: RichTextElementProps;
  twoColumn: boolean;
  layout: string;
}

const TextImage = ({ headline, subheadline, image, text, twoColumn, layout }: TextImageProps) => {
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
              <p className="mb-6 font-semibold text-coolGray-500 text-xl leading-7">
                {subheadline}
              </p>
            )}
          </div>
          <div className="flex">
            {image && (
              <div
                className={`${layout === "image-text" ? "order-1" : "order-2"} w-full break-after-column px-4 pb-4`}
              >
                <Image src={image.src} alt={image.alt} width={400} height={200} />
              </div>
            )}
            <div
              className={`${layout === "image-text" ? "order-2" : "order-1"} w-full break-after-column px-4 pb-4 ${twoColumn ? "lg:columns-2 " : "lg:columns-1 "}`}
            >
              {text && <RichTextElement {...text} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { TextImage };
