import Link from "next/link";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Arrow } from "../elements/Arrow";

export interface ProductOverviewItemProps {
  image: {
    src: string;
    alt: string;
  };
  categories: string[];
  name: string;
  price: number;
  id: string;
  route: string;
}

const ProductOverviewItem = ({
  image,
  categories,
  name,
  price,
  route,
  id,
}: ProductOverviewItemProps) => {
  const [active, setActive] = useState<boolean>(false);

  function toggleState() {
    setActive((current) => !current);
  }

  return (
    <div>
      <div className="mb-24 w-full px-3">
        <div className="mb-9 w-full overflow-hidden rounded-2xl">
          <Link href={route}>
            {image && (
              <Image src={image.src} alt={image.alt} className="w-full" width={400} height={400} />
            )}
          </Link>
        </div>
      </div>
      <div>
        <div className="text-center">
          {categories.map((category) => (
            <p key={category} className="m-2 inline font-medium text-gray-400 text-sm">
              {category}
            </p>
          ))}
          <Link href={route}>
            <h3 className="my-4 font-heading font-medium text-xl leading-8 hover:underline">
              {name}
            </h3>
          </Link>
          <p className="font-heading font-medium text-gray-900 text-xl tracking-tighter">
            {price}€
          </p>
        </div>
        <div className="flex flex-wrap items-center text-center text-xl leading-3">
          <div className="w-1/2 xl:w-2/12">
            <button
              type="button"
              onClick={toggleState}
              className="ml-auto cursor-pointer text-gray-400 hover:text-gray-500 xl:mx-auto 2xl:mr-0"
            >
              {!active && <FaRegHeart fill="currentColor" />}
              {active && <FaHeart fill="currentColor" />}
            </button>
          </div>
          <div className="w-1/2 xl:w-9/12">
            <div className="lg:mx-auto lg:max-w-max xl:mr-0">
              <Link href={route} className="py-px text-gray-400">
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ProductOverviewItem };
