import Link from "next/link";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFavorites } from "@/utils/hooks/useFavorites";
import { LuArrowRight } from "react-icons/lu";
import type { ImageData } from "@/types";

export type ProductOverviewItemProps = {
  image: ImageData;
  categories: string[];
  name: string;
  price: number;
  id: string;
  route: string;
};

const ProductOverviewItem = ({
  image,
  categories,
  name,
  price,
  route,
  id,
}: ProductOverviewItemProps) => {
  const [favorites, isFavorite] = useFavorites();

  const handleFavoriteState = () => {
    if (!isFavorite(id)) {
      favorites.addEntry({
        id,
        title: name,
        image,
      });
    } else {
      favorites.deleteEntry(id);
    }
  };

  return (
    <div className="max-w-[380px]">
      <div className="mb-12 w-full">
        <div className="w-full overflow-hidden rounded-2xl">
          <Link href={route}>
            <Image src={image.src} alt={image.alt} className="w-full" width={400} height={400} />
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
          <p className="font-heading font-medium text-text text-xl">{price} €</p>
        </div>
        <div className="mx-4 flex justify-between text-xl">
          <button
            type="button"
            onClick={handleFavoriteState}
            className="text-textLighter hover:text-text"
          >
            {isFavorite(id) ? <FaHeart fill="currentColor" /> : <FaRegHeart fill="currentColor" />}
          </button>
          <Link href={route} className="text-textLighter hover:text-text">
            <LuArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
export { ProductOverviewItem };
