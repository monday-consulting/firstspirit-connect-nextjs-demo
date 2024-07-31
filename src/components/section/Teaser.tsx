import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface TeaserProps {
  headline: string;
  claim?: string;
  image?: {
    src: string;
    alt: string;
  };
  imageReplaceContent?: ReactNode;
  text: string;
  cta?: {
    href: string;
    linkText: string;
  };
  imageStart: boolean;
}

const Teaser = ({
  headline,
  claim,
  image,
  imageReplaceContent,
  text,
  cta,
  imageStart,
}: TeaserProps) => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-4">
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
            {text && <div className="mb-5 text-textLight">{text}</div>}
            <div className="mt-12 flex flex-wrap">
              {cta && (
                <Link href={cta.href}>
                  <div className="w-full py-1 md:mr-4 md:w-auto md:py-0">
                    <span className="inline-block w-full rounded-md bg-secondary px-7 py-5 text-center font-medium text-base text-white leading-4 hover:brightness-90 md:text-lg">
                      {cta.linkText}
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div className="px-4">
            {image && !imageReplaceContent && (
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={200}
                className="relative overflow-hidden rounded-xl"
              />
            )}
            {imageReplaceContent && imageReplaceContent}
          </div>
        </div>
      </div>
    </section>
  );
};
export { Teaser };
