import React from "react";

const Image = ({ src, ...props }) => {
  try {
    return React.createElement(require.resolve("next/image").default, {
      src: typeof src === "string" ? src : src.src,
      ...props,
    });
  } catch {
    console.log("Not using Next.js");
    return React.createElement("img", { src, ...props });
  }
};

export default Image;

/**
 * How can I conditionally use next/image component on React library?
 * https://stackoverflow.com/questions/68363729/how-can-i-conditionally-use-next-image-component-on-react-library
 */
