import Image from "next/image";
import { Link } from "@/i18n/routing";
import type { ImageData } from "@/types";

export type FeaturedProductItemProps = {
  image: ImageData;
  name: string;
  abstract: string;
  route: string;
};

const FeaturedProductItem = ({ image, name, abstract, route }: FeaturedProductItemProps) => {
  return (
    <div className="relative z-0 w-full sm:w-300 lg:w-300 xl:w-360">
      <Image
        src={image.src}
        alt={image.alt}
        width={600}
        height={400}
        data-preview-id="#st_featured_product_image"
      />

      <Link href={route} data-preview-id="#st_featured_product_link">
        <div className="absolute top-0 z-20 h-full w-full bg-black/50 p-4 text-white transition-colors duration-300 group-hover:bg-black/75 group-focus:bg-black/75 lg:p-8">
          <h3
            className="mt-4 border-b-2 font-black text-2xl text-yellow-500"
            data-preview-id="#st_featured_product_name"
          >
            {name}
          </h3>
          <p data-preview-id="#st_featured_product_abstract">{abstract}</p>
        </div>
      </Link>
    </div>
  );
};

export { FeaturedProductItem };
