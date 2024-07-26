import Image from "next/image";

export interface ProductOverviewItemProps {
    headline: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
}

const ProductOverviewItem = ({
    headline,
    description,
    image,
}: ProductOverviewItemProps) => {
    return (
        <div className="m-2 flex h-fit max-w-[400px] flex-col gap-5 border-2 border-gray-200 bg-white p-6">
            <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={200}
                className="relative overflow-hidden rounded-xl"
            />
            <h1 className="font-bold text-2xl">{headline}</h1>
            <p>{description}</p>
        </div>
    );
};
export default ProductOverviewItem;
