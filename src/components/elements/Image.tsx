import Image from "next/image";

export type ImageProps = {
  src: string;
  alt: string;
  rounded?: string;
  className?: string;
};

const ImageComponent = ({ src, alt, rounded, className }: ImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`${rounded ? `rounded-${rounded}` : ""} object-cover`}
      />
    </div>
  );
};
export { ImageComponent };
