import Image from "next/image";
import Link from "next/link";
import type { RichTextElementProps } from "./RichTextElement";

export type ProductTeaserProps = {
  data: ProductData;
  route: string;
};

export type Section = {
  type: "Section";
  id: string;
  name?: string;
  displayName?: string;
  previewId: string;
  sectionType: string;
  data: {
    // TODO: update types
    [key: string]: unknown;
  };
  displayed?: boolean;
  lifespan?: {
    start: Date;
    end?: Date;
  };
  children: Section[];
};

export type Dataset = {
  type: "Dataset";
  id: string;
  previewId: string;
  schema: string;
  entityType: string;
  template: string;
  children: Section[];
  data: ProductData;
  route: string;
  routes: {
    pageRef: string;
    route: string;
  };
  remoteProjectId?: string;
  locale: string;
};

export type ProductData = {
  categories: Dataset[];
  description: RichTextElementProps[];
  image: {
    src: string;
    alt: string;
  };
  name: string;
  price: string;
  teaserText: string;
};

const ProductTeaser = ({ data, route }: ProductTeaserProps) => {
  return (
    <div className="flex h-fit max-w-[400px] flex-col gap-5 bg-white p-6">
      <Link href={route}>
        <Image
          src={data.image.src}
          alt={data.image.alt}
          width={400}
          height={200}
          className="relative overflow-hidden rounded-xl"
        />
        <h1 className="mt-5 font-bold text-2xl">{data.name}</h1>
      </Link>
      <p>{data.teaserText}</p>
    </div>
  );
};
export default ProductTeaser;
