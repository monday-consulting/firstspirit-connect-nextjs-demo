import { DevComponent } from "../Dev";
import { Button, type ButtonT } from "../elements/Button";
import Image from "next/image";
import { useNextApp } from "../tests/testutils/nextMocks";
import { useDev } from "../composables/showDev";
import { useState } from "react";

export interface SliderSlide {
  button: ButtonT;
  description: string;
  picture: {
    src: string;
    alt: string;
  };
  title: string;
}

export interface SliderProps {
  data: SliderSlide[];
}

const Slider = ({ data }: SliderProps) => {
  const showDev = useDev();
  const $isPreviousMode = useNextApp();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeSlide = data[activeImageIndex];

  function nextSlide() {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  }
  function prevSlide() {
    setActiveImageIndex((activeImageIndex - 1 + data.length) % data.length);
  }

  return (
    <div>
      <div className="group relative">
        {showDev && $isPreviousMode && (
          <div className="hidden group-hover:block">
            <DevComponent content={data} />
          </div>
        )}
        {activeSlide && (
          <div className="relative text-white">
            <div className="sliderButtonContainer left-0">
              <button className="sliderButton pr-8" onClick={prevSlide}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <title>previous</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="sliderButtonContainer right-0">
              <button className="sliderButton pl-8" onClick={nextSlide}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <title>next</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-6 md:p-16">
              <div className="flex max-w-xl flex-col space-y-4 md:py-10">
                <h1 className="font-black text-4xl md:text-6xl">{activeSlide.title}</h1>
                <p>{activeSlide.description}</p>
                <div>
                  <Button data={activeSlide.button} />
                </div>
              </div>
            </div>
            <Image
              className="h-96 w-full object-cover md:h-[600px]"
              src={activeSlide.picture.src}
              alt={activeSlide.picture.alt}
              width={400}
              height={400}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export { Slider };
