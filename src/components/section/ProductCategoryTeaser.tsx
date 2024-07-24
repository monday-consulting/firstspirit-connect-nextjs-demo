import {
  CategoryProductsDescription,
  type CategoryProductsDescriptionProps,
} from "./CategoryProductsDescription";

export type ProductCategoryTeaserProps = {
  categoryProduct: CategoryProductsDescriptionProps;
};
const ProductCategoryTeaser = ({ categoryProduct }: ProductCategoryTeaserProps) => {
  return (
    <section>
      <div className="radius-for-skewed bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <CategoryProductsDescription {...categoryProduct} />
            {/* TODO: Add component */}
            {/* <SectionCategoryProductsList :category-id="data.st_category.key" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductCategoryTeaser };
