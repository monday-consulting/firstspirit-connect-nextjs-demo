import React, { useMemo } from "react";
import { Image as fsxaImage } from "fsxa-api";
import Image from "next/image";

interface ImageProps {
    image: fsxaImage;
    ratio?: string;
    alt: string;
}

const ImageComponent = ({ image, alt, ratio }: ImageProps) => {
    // useMemo is used to optimize the formation of srcSet string and recompute only on changes in image or ratio
    const srcSet = useMemo(() => {
        return Object.entries(image.resolutions)
            .filter(([resolutionKey]) => {
                return ratio ? resolutionKey.includes(ratio) : true;
            })
            .map(([, resolutionEntry]) => {
                return `${resolutionEntry.url}`;
            })
            .join(", ");
    }, [image, ratio]);

    const { width, height } = useMemo(() => {
        const resolutionEntry = Object.entries(image.resolutions).find(
            ([resolutionKey]) => (ratio ? resolutionKey.includes(ratio) : true)
        );
        return {
            width: resolutionEntry ? resolutionEntry[1].width : 0,
            height: resolutionEntry ? resolutionEntry[1].height : 0,
        };
    }, [image, ratio]);

    return <Image alt={alt} src={srcSet} width={width} height={height} />;
};

export default ImageComponent;
