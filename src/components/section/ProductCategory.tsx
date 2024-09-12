import { getProductGroupLink } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "./Product";
import { RichTextElement } from "../elements/RichTextElement";

export type ProductCategoryProps = {
  products: Product[];
};

const ProductCategory = ({ products }: ProductCategoryProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Link key={product.id} href={getProductGroupLink(product.name)}>
          <div className="relative h-40 overflow-hidden">
            <div className="absolute inset-0 z-10 transform bg-black bg-opacity-70 p-8 text-white opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <div className="h-16 overflow-hidden text-gray-200 text-xs">
                <RichTextElement {...product.description} />
              </div>
            </div>
            {product.image && (
              <Image
                src={product.image.src}
                alt={product.image.alt}
                className="absolute top-0 left-0 h-40 w-full object-cover"
              />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export { ProductCategory };
