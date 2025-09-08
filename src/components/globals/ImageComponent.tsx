import Image from "next/image";
import { cn } from "@/utils/cn";

export type ImageComponentProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

const ImageComponent = ({ src, alt, className, imageClassName }: ImageComponentProps) => {
  return (
    <div className={cn("relative", className)}>
      <Image src={src} alt={alt} fill className={cn("object-cover", imageClassName)} />
    </div>
  );
};

export { ImageComponent };
