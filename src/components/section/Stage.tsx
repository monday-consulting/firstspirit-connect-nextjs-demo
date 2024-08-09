import Link from "next/link";
import { getImageProps } from "next/image";
import { LuArrowRight } from "react-icons/lu";
import type { ImageData } from "@/types";

export type StageProps = {
  headline: string;
  subline: string;
  image: ImageData;
  cta?: {
    label: string;
    href: string;
  };
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

const Stage = ({ headline, subline, image, cta }: StageProps) => {
  const {
    props: { srcSet },
  } = getImageProps({ alt: image.alt, src: image.src, width: 1080, height: 0 });
  const backgroundImage = getBackgroundImage(srcSet);
  const backgroundImageStyle = { width: "100vw", backgroundImage };

  return (
    <section
      className="overflow-hidden bg-black bg-center bg-cover bg-fixed bg-no-repeat py-28"
      style={backgroundImageStyle}
    >
      <div className="container mx-auto px-4">
        <div className="rounded-4xl bg-black bg-opacity-80 px-12 pt-12 pb-9 md:max-w-xl">
          <h2 className="mb-4 font-bold font-heading text-5xl text-white leading-tight tracking-px-n md:text-6xl">
            {headline}
          </h2>
          <p className="mb-11 font-medium text-lg text-lightGray leading-normal">{subline}</p>
          {cta?.href && (
            <Link
              href={cta?.href}
              className="inline-flex flex-wrap items-center text-white hover:text-lightGray hover:underline"
            >
              <span className="mr-2 font-semibold leading-normal">{cta?.label}</span>
              <LuArrowRight />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export { Stage };
