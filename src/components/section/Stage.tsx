"use client";

import Link from "next/link";
import { getImageProps } from "next/image";
import { LuArrowRight } from "react-icons/lu";
import type { ImageData } from "@/types";
import { useLocale } from "use-intl";

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

// const transformDataToProps = (section: FirstSpiritSection): StageProps => {
//   const parsedData = JSON.parse(section.data);

//   return {
//     headline: parsedData.st_headline,
//     subline: parsedData.st_subheadline,
//     image: {
//       src: parsedData.st_image.resolutions.ORIGINAL.url,
//       alt: parsedData.st_image_alt_text || "Default alt text",
//     },
//     cta: parsedData.st_cta
//       ? {
//           label: parsedData.st_cta.data.lt_text,
//           // TODO: Reference reolving
//           href: "#",
//         }
//       : undefined,
//     sectionId: section.fsId,
//   };
// };

const Stage = (props: StageProps) => {
  const {
    props: { srcSet },
  } = getImageProps({ alt: props.image.alt, src: props.image.src, width: 1080, height: 0 });
  const backgroundImage = getBackgroundImage(srcSet);
  const backgroundImageStyle = { width: "100vw", backgroundImage };

  const locale = useLocale();

  // TODO: use data object
  // const { data } = useQuery({
  //   queryKey: ["stage"],
  //   queryFn: () =>
  //     fetcher({ url: "/api/fetch", body: { locale, type: "section", id: props.sectionId } }),
  //   initialData: props,
  //   select: transformDataToProps,
  // });

  return (
    <div
      className="overflow-hidden bg-black bg-center bg-cover bg-fixed bg-no-repeat py-28"
      style={backgroundImageStyle}
    >
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-black bg-opacity-80 px-12 pt-12 pb-9 md:max-w-xl">
          <h2 className="mb-4 font-bold font-heading text-5xl text-white leading-tight tracking-px-n md:text-6xl">
            {props.headline}
          </h2>
          <p className="mb-11 font-medium text-lg text-lightGray leading-normal">{props.subline}</p>
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
    </div>
  );
};

export { Stage };
