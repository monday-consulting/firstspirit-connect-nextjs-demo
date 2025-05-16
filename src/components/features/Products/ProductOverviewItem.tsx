import { Link } from "@/i18n/routing";
import type { ImageData } from "@/types";
import { useFavorites } from "@/utils/hooks/useFavorites";
import { useTranslations } from "next-intl";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import { ImageComponent } from "../../globals/ImageComponent";

export type ProductOverviewItemProps = {
  image: ImageData;
  category: string;
  name: string;
  price: string;
  id: string;
  route: string;
};

const ProductOverviewItem = ({
  image,
  category,
  name,
  price,
  route,
  id,
}: ProductOverviewItemProps) => {
  const t = useTranslations();

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
        <Link href={route}>
          <ImageComponent
            src={image.src}
            alt={image.alt}
            className="aspect-square"
            imageClassName="rounded-xl"
          />
        </Link>
      </div>
      <div>
        <div className="text-center">
          <p className="m-2 inline font-medium text-gray-400 text-sm">{category}</p>

          <Link href={route}>
            <h3 className="my-4 font-heading font-medium text-xl leading-8 hover:underline">
              {name}
            </h3>
          </Link>
          <p className="font-heading font-medium text-text text-xl">{price}</p>
        </div>
        <div className="mx-4 flex justify-between text-xl">
          <button
            type="button"
            onClick={handleFavoriteState}
            name={isFavorite(id) ? t("buttons.removeFavorite") : t("buttons.addFavorite")}
            className="text-textLighter hover:text-text"
          >
            {isFavorite(id) ? <FaHeart fill="currentColor" /> : <FaRegHeart fill="currentColor" />}
          </button>
          <button type="button" name={t("products.link")}>
            <Link href={route} className="text-textLighter hover:text-text">
              <LuArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export { ProductOverviewItem };
