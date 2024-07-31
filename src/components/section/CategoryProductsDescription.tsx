import Link from "next/link";
import type { ReactNode } from "react";

export type CategoryProductsDescriptionProps = {
  category: string;
  headline: string;
  text?: ReactNode | string;
  link: {
    label: string;
    href: string;
  };
};
const CategoryProductsDescription = ({
  category,
  headline,
  text,
  link,
}: CategoryProductsDescriptionProps) => {
  return (
    <div className="mb-12 w-full lg:mb-0 lg:w-1/2">
      <span className="font-bold text-text">{category}</span>
      <h2 className="mb-8 font-bold font-heading text-3xl text-primary leading-none tracking-px-n md:text-4xl">
        {headline}
      </h2>
      {text && <div className="mb-5 font-medium text-coolGray-500">{text}</div>}
      <div className="flex flex-wrap pt-12">
        <div className="w-full py-1 md:mr-4 md:w-auto md:py-0">
          <Link
            href={link.href}
            className="inline-block w-full rounded-md bg-secondary px-7 py-5 text-center font-medium text-base text-white leading-4 hover:brightness-90 md:text-lg"
          >
            {link.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CategoryProductsDescription };
