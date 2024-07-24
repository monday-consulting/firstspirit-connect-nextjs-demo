import Link from "next/link";
import Image from "next/image";

export interface Teaser {
  st_headline: string;
  st_image?: {
    src: string;
    alt: string;
  };
  st_text: string;
  st_cta?: {
    ref: string;
    linkText: string;
  };
}

export interface TeaserProps {
  data: Teaser;
  imageLeft: boolean;
}

const Teaser = ({ data, imageLeft }: TeaserProps) => {
  return (
    <>
      <section className="bg-white py-14">
        <div className="container mx-auto px-4">
          {!imageLeft && (
            <>
              <div className="-mx-4 flex flex-wrap items-center">
                <div className="mt-8 px-4 text-left sm:w-full md:w-1/2">
                  {data.st_headline && (
                    <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
                      {data.st_headline}
                    </h2>
                  )}
                  {data.st_text && <p className="mb-5 text-text">{data.st_text}</p>}
                  <div className="flex flex-wrap">
                    {data.st_cta && (
                      <Link href={data.st_cta.ref}>
                        <div className="w-full py-1 md:mr-4 md:w-auto md:py-0">
                          <span className="inline-block w-full rounded-md bg-secondary px-7 py-5 text-center font-medium text-base text-white leading-4 hover:brightness-90 md:text-lg">
                            {data.st_cta.linkText}
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="px-4 sm:w-full md:w-1/2">
                  <Image
                    src={data.st_image?.src}
                    alt={data.st_image?.alt}
                    width={400}
                    height={200}
                    className="relative overflow-hidden rounded-xl"
                  />
                </div>
              </div>
            </>
          )}
          {imageLeft && (
            <>
              <div className="-mx-4 flex flex-wrap items-center">
                <div className="px-4 sm:w-full md:w-1/2">
                  <Image
                    src={data.st_image?.src}
                    alt={data.st_image?.alt}
                    width={400}
                    height={200}
                    className="relative overflow-hidden rounded-xl"
                  />
                </div>
                <div className="mt-8 px-4 text-left sm:w-full md:w-1/2">
                  {data.st_headline && (
                    <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
                      {data.st_headline}
                    </h2>
                  )}
                  {data.st_text && <p className="mb-5 text-text">{data.st_text}</p>}
                  <div className="flex flex-wrap">
                    <Link href={data.st_cta?.ref}>
                      <div className="w-full py-1 md:mr-4 md:w-auto md:py-0">
                        <span className="inline-block w-full rounded-md bg-secondary px-7 py-5 text-center font-medium text-base text-white leading-4 hover:brightness-90 md:text-lg">
                          {data.st_cta?.linkText}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};
export { Teaser };
