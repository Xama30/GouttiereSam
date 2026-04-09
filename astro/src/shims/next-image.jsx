import React from "react";

const rasterFormatPattern = /\.(jpe?g|png)$/i;

function buildModernSourceSet(source) {
  if (typeof source !== "string" || !rasterFormatPattern.test(source)) {
    return [];
  }

  return [
    {
      type: "image/avif",
      srcSet: source.replace(rasterFormatPattern, ".avif"),
    },
    {
      type: "image/webp",
      srcSet: source.replace(rasterFormatPattern, ".webp"),
    },
  ];
}

export default function NextImage({ src, alt = "", ...props }) {
  const imageSrc = typeof src === "string" ? src : src?.src || "";
  const intrinsicWidth =
    typeof src === "object" && typeof src?.width === "number"
      ? src.width
      : undefined;
  const intrinsicHeight =
    typeof src === "object" && typeof src?.height === "number"
      ? src.height
      : undefined;

  const {
    placeholder,
    blurDataURL,
    fill,
    loader,
    quality,
    priority,
    unoptimized,
    sizes,
    srcSet,
    width,
    height,
    ...imgProps
  } = props;

  const widthValue = imgProps.width ?? width ?? intrinsicWidth;
  const heightValue = imgProps.height ?? height ?? intrinsicHeight;

  const normalizedImgProps = {
    ...imgProps,
    src: imageSrc,
    alt,
    loading: priority ? "eager" : "lazy",
    decoding: "async",
  };

  if (widthValue) {
    normalizedImgProps.width = widthValue;
  }

  if (heightValue) {
    normalizedImgProps.height = heightValue;
  }

  if (sizes) {
    normalizedImgProps.sizes = sizes;
  }

  if (srcSet) {
    normalizedImgProps.srcSet = srcSet;
  }

  if (fill) {
    normalizedImgProps.style = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      ...(normalizedImgProps.style || {}),
    };
  }

  const sourceElements =
    typeof srcSet === "string" && srcSet.length > 0
      ? []
      : buildModernSourceSet(imageSrc).map((source) => {
          return React.createElement("source", {
            key: source.type,
            type: source.type,
            srcSet: source.srcSet,
          });
        });

  const imageElement = React.createElement("img", normalizedImgProps);

  if (sourceElements.length === 0) {
    return imageElement;
  }

  return React.createElement("picture", null, ...sourceElements, imageElement);
}
