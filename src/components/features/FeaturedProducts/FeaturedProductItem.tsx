import Image from "next/image";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import type { ImageData } from "@/types";

export type FeaturedProductItemProps = {
  image: ImageData;
  name: string;
  abstract: string;
  route: string;
};

const FeaturedProductItem = ({ image, name, abstract, route }: FeaturedProductItemProps) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="relative z-0 w-full sm:w-300 lg:w-300 xl:w-360">
      <Image src={image.src} alt={image.alt} width={600} height={400} />

      <Link href={route}>
        <div
          className={`absolute top-0 z-20 h-full p-4 text-white lg:p-8 ${
            hover ? "bg-black/75" : "bg-black/50"
          }`}
          onMouseOver={handleMouseOver}
          onFocus={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="mt-4 border-b-2 font-black text-2xl text-yellow-500">{name}</h3>
          <p>{abstract}</p>
        </div>
      </Link>
    </div>
  );
};

export { FeaturedProductItem };
