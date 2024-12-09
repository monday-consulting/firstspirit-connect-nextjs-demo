import { useFavorites } from "@/utils/hooks/useFavorites";
import { NotificationNumber } from "@/components/layouts/Navigation/Favorites/NotificationNumber";
import { VscHeart } from "react-icons/vsc";
import { useTranslations } from "next-intl";
import { FavoriteTeaser } from "@/components/layouts/Navigation/Favorites/FavoriteTeaser";
import { ProductDetail, type Product } from "@/components/features/Products/ProductDetail";
import { ProductOverview } from "@/components/features/Products/ProductOverview";
import type { ProductOverviewItemProps } from "@/components/features/Products/ProductOverviewItem";

//Copied navigation props from layout.tsx
//TODO: insert product related favoritable components\
export type FavoriteTestingProps = {
  product: Product;
  detailPage: boolean;
  products: ProductOverviewItemProps[];
};

const FavoriteTesting = ({ product, detailPage, products }: FavoriteTestingProps) => {
  const [favorites] = useFavorites();
  const t = useTranslations();
  return (
    <div className="m-auto w-full">
      <div className="flex">
        <div className="group relative">
          {favorites.list && favorites.list.length > 0 && (
            <NotificationNumber data-testid="notification-number" amount={favorites.list.length} />
          )}
          <VscHeart data-testid="nav-favorite" size={20} className="cursor-pointer" />
          <div
            data-testid="favoritelist"
            className="absolute z-40 hidden w-96 flex-col gap-4 rounded-xl bg-white p-8 shadow-lg group-hover:flex"
          >
            <h3 className="font-bold">{t("favorites.listTitle")}</h3>
            <div className="flex flex-col gap-2">
              {favorites.list && favorites.list.length > 0 ? (
                favorites.list.map((favorite) => (
                  <FavoriteTeaser
                    key={favorite.id}
                    title={favorite.title}
                    id={favorite.id}
                    image={favorite.image}
                  />
                ))
              ) : (
                <p>{t("favorites.listEmpty")}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {detailPage ? <ProductDetail product={product} /> : <ProductOverview products={products} />}
    </div>
  );
};
export { FavoriteTesting };
