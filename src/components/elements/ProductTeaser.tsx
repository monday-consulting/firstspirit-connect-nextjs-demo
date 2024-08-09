import Image from "next/image";
import Link from "next/link";
import type { Product } from "../section/Product";

export type ProductTeaserProps = {
  product: Product;
  route: string;
};

const ProductTeaser = ({ product, route }: ProductTeaserProps) => {
  return (
    <div className="flex h-fit max-w-[400px] flex-col gap-5 bg-white p-6">
      <Link href={route}>
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={400}
          height={200}
          className="relative overflow-hidden rounded-xl"
        />
        <h1 className="mt-5 font-bold text-2xl">{product.name}</h1>
      </Link>
      <p>{product.teaserText}</p>
    </div>
  );
};
export { ProductTeaser };
