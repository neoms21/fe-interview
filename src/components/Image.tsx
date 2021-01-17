import React, { SyntheticEvent } from "react";
import { DEFAULT_IMAGE_URL } from "shared/constants";

interface ImageProps {
  src: string;
  alt: string;
  defaultImageUrl?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, defaultImageUrl }) => {
  const addDefaultPath = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
    (ev.target as HTMLImageElement).src = defaultImageUrl || DEFAULT_IMAGE_URL;
  };

  return (
    <img
      src={src || defaultImageUrl || DEFAULT_IMAGE_URL}
      onError={addDefaultPath}
      alt={alt}
    />
  );
};

export default Image;
