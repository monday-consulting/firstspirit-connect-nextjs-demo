"use client";

import { Link } from "@/i18n/routing";
import { getImageProps } from "next/image";
import { LuArrowRight } from "react-icons/lu";
import type { ImageData, LinkData } from "@/types";
import { cn } from "@/utils/cn";

export type StageProps = {
  headline: string;
  subline: string;
  image: ImageData;
  cta?: LinkData;
  shortVersion?: boolean;
};

const getBackgroundImage = (srcSet = "") => {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
};

const Stage = (props: StageProps) => {
  const shortVersion = props.shortVersion || false;
  const {
    props: { srcSet },
  } = getImageProps({ alt: props.image.alt, src: props.image.src, width: 1080, height: 0 });
  const backgroundImage = getBackgroundImage(srcSet);
  const backgroundImageStyle = { width: "100vw", backgroundImage };

  return (
    <section
      className={cn(
        "overflow-hidden bg-black bg-center bg-cover bg-fixed bg-no-repeat",
        shortVersion ? "py-16" : "py-28"
      )}
      style={backgroundImageStyle}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "rounded-2xl bg-black px-12 pt-12 md:max-w-xl",
            shortVersion ? "bg-opacity-40 pb-12" : "bg-opacity-80 pb-16"
          )}
        >
          <h2
            className={cn(
              "mb-4 font-bold font-heading text-white leading-tight tracking-px-n ",
              shortVersion ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl"
            )}
          >
            {props.headline}
          </h2>
          <p className="font-medium text-lg text-lightGray leading-normal">{props.subline}</p>
          {props.cta?.href && (
            <Link
              href={props.cta?.href}
              className="inline-flex flex-wrap items-center text-white hover:text-lightGray hover:underline"
            >
              <span className="mr-2 font-semibold leading-normal">{props.cta?.label}</span>
              <LuArrowRight />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export { Stage };
