"use client";

import Link from "next/link";
import { getImageProps } from "next/image";
import { LuArrowRight } from "react-icons/lu";
import type { ImageData } from "@/types";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { useLocale } from "next-intl";

export type StageProps = {
  headline: string;
  subline: string;
  image: ImageData;
  cta?: {
    label: string;
    href: string;
  };
  sectionId: string;
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
  const {
    props: { srcSet },
  } = getImageProps({ alt: props.image.alt, src: props.image.src, width: 1080, height: 0 });
  const backgroundImage = getBackgroundImage(srcSet);
  const backgroundImageStyle = { width: "100vw", backgroundImage };

  // Content hydration
  const locale = useLocale();
  const [stageProps, setStageProps] = useState<StageProps>(props);

  const { data: clientStage, error } = useSWR("/api/fetch", (url: string) =>
    fetcher({ url, body: { type: "section", locale: locale, id: props.sectionId } })
  );

  useEffect(() => {
    if (clientStage) {
      const data = JSON.parse(clientStage.data);
      setStageProps({
        headline: data.st_headline,
        subline: data.st_subheadline,
        image: {
          src: data.st_image.resolutions.ORIGINAL.url,
          alt: data.st_image_alt_text,
        },
        sectionId: clientStage.fsId,
      });
    }
  }, [clientStage]);

  return (
    <div
      className="overflow-hidden bg-black bg-center bg-cover bg-fixed bg-no-repeat py-28"
      style={backgroundImageStyle}
    >
      <div className="container mx-auto px-4">
        <div className="rounded-4xl bg-black bg-opacity-80 px-12 pt-12 pb-9 md:max-w-xl">
          <h2 className="mb-4 font-bold font-heading text-5xl text-white leading-tight tracking-px-n md:text-6xl">
            {stageProps.headline}
          </h2>
          <p className="mb-11 font-medium text-lg text-lightGray leading-normal">
            {stageProps.subline}
          </p>
          {stageProps.cta?.href && (
            <Link
              href={stageProps.cta?.href}
              className="inline-flex flex-wrap items-center text-white hover:text-lightGray hover:underline"
            >
              <span className="mr-2 font-semibold leading-normal">{stageProps.cta?.label}</span>
              <LuArrowRight />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export { Stage };
