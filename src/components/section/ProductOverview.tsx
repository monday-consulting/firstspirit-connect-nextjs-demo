import { ProductOverviewItem, type ProductData } from "./ProductOverviewItem";

interface ProductOverviewProps {
  products: ProductData[];
}

const ProductOverview = ({ products }: ProductOverviewProps) => {
  //apply locale to productsFound
  const productsFound = "Produkte gefunden";
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        {products !== null && (
          <div className="bg-blueGray-100 pt-12 pb-20 2xl:pb-22">
            <div className="border-black border-b border-opacity-5 pb-9 text-center">
              <div className="relative">
                <h2 className="mb-5 text-center font-heading font-medium text-5xl text-gray-900 leading-normal md:mb-0 xl:text-10xl">
                  {products[0].categories[0]}
                </h2>
                <span className="font-medium text-gray-400 text-sm md:absolute md:right-0 md:bottom-3">
                  {products.length + " " + productsFound}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductOverviewItem key={product.id} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export { ProductOverview };
