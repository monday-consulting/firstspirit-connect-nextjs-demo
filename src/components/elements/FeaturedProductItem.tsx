import { useState } from "react";
import Link from "next/link";

export type FeaturedProductItemProps = {
  product: {
    data: {
      tt_teaser_image?: string;
      tt_name: string;
      tt_abstract: string;
    };
    route: string;
  };
  imageSource?: string;
};

const FeaturedProductItem = ({ product, imageSource }: FeaturedProductItemProps) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="relative z-0 w-full sm:w-300 lg:w-300 xl:w-360">
      {product.data.tt_teaser_image && <img src={imageSource} alt={product.data.tt_name} />}

      <Link href={product.route}>
        <div
          className={`absolute top-0 z-20 h-full p-4 text-white lg:p-8 ${
            hover ? "bg-black/75" : "bg-black/50"
          }`}
          onMouseOver={handleMouseOver}
          onFocus={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="mt-4 border-b-2 font-black text-2xl text-yellow-500">
            {product.data.tt_name}
          </h3>
          <p>{product.data.tt_abstract}</p>
        </div>
      </Link>
    </div>
  );
};

export { FeaturedProductItem };
