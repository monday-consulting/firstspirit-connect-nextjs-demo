import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface TeaserProps {
  headline: string;
  image?: {
    src: string;
    alt: string;
  };
  text: string;
  cta?: {
    href: string;
    linkText: string;
  };
  imageLeft: boolean;
}

const Teaser = ({ headline, image, text, cta, imageLeft }: TeaserProps) => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        {!imageLeft && (
          <>
            <div className="flex items-center">
              <div className={cn("mt-8 px-4 text-left sm:w-full", image && "md:w-1/2")}>
                {headline && (
                  <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
                    {headline}
                  </h2>
                )}
                {text && <div className="mb-5 text-text">{text}</div>}
                <div className="flex flex-wrap">
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
              {image && (
                <div className="px-4 sm:w-full md:w-1/2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={200}
                    className="relative overflow-hidden rounded-xl"
                  />
                </div>
              )}
            </div>
          </>
        )}
        {imageLeft && (
          <>
            <div className="flex items-center">
              {image && (
                <div className="px-4 sm:w-full md:w-1/2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={200}
                    className="relative overflow-hidden rounded-xl"
                  />
                </div>
              )}

              <div className="mt-8 px-4 text-left sm:w-full md:w-1/2">
                {headline && (
                  <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
                    {headline}
                  </h2>
                )}
                {text && <div className="mb-5 text-text">{text}</div>}
                {cta && (
                  <div className="flex flex-wrap">
                    <Link href={cta.href}>
                      <div className="w-full py-1 md:mr-4 md:w-auto md:py-0">
                        <span className="inline-block w-full rounded-md bg-secondary px-7 py-5 text-center font-medium text-base text-white leading-4 hover:brightness-90 md:text-lg">
                          {cta.linkText}
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export { Teaser };
