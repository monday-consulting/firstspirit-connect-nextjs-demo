"use client";

import type { ImageData } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { getPreviewParams } from "@/utils/preview/getPreviewParams";
import { Button, type ButtonProps } from "../globals/Button";

export type SliderSlide = {
  button: ButtonProps;
  description: string;
  image: ImageData;
  title: string;
};

export type SliderProps = {
  slides: SliderSlide[];
  previewId?: string;
};

const Slider = ({ slides, previewId }: SliderProps) => {
  const previewProps = getPreviewParams(previewId);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState<SliderSlide>(slides[activeIndex]);

  useEffect(() => {
    setActiveSlide(slides[activeIndex]);
  }, [activeIndex, slides]);

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };
  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className="group relative" {...previewProps}>
      {activeSlide && (
        <div className="relative text-white">
          <button
            type="button"
            className="-translate-y-8 absolute top-1/2 left-2 z-10 text-white"
            onClick={prevSlide}
          >
            <LuChevronLeft size={44} className="drop-shadow-lg" />
          </button>
          <button
            type="button"
            className="-translate-y-8 absolute top-1/2 right-2 z-10 text-white"
            onClick={nextSlide}
          >
            <LuChevronRight size={44} className="drop-shadow-lg" />
          </button>
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-16 md:p-20">
            <div className="flex max-w-xl flex-col space-y-4 md:py-10">
              <h1 className="font-black text-4xl md:text-6xl">{activeSlide.title}</h1>
              <p>{activeSlide.description}</p>
              <div>
                <Button {...activeSlide.button} />
              </div>
            </div>
          </div>
          <Image
            className="h-96 w-full object-cover md:h-[600px]"
            src={activeSlide.image.src}
            alt={activeSlide.image.alt}
            width={400}
            height={400}
          />
        </div>
      )}
    </section>
  );
};
export { Slider };
