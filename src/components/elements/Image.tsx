import Image from "next/image";

export type ImageProps = {
  src: string;
  alt: string;
  width: string;
  height: string;
  rounded?: string;
};

const ImageComponent = ({ src, alt, height, width, rounded }: ImageProps) => {
  return (
    <div className={`h-${height} w-${width} relative`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${rounded && `rounded-${rounded}`}`}
      />
    </div>
  );
};
export { ImageComponent };
