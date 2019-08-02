import React, { useState, useRef } from "react";

function ProgressiveImage(props){
    const [highResImageLoaded, handlehighResImageLoaded] = useState(false);
    const highResImage = useRef(null);

    const overlayStyles = {
        position: "absolute",
        filter: "blur(1px)",
        transition: "opacity ease-in 1000ms",
        clipPath: "inset(0)"
    };    
    const { overlaySrc, alt, src } = props;
    return (
      <span>
        <img
          onLoad={() => {
            handlehighResImageLoaded(true)
          }}
          ref={highResImage}
          src={src}
          alt={alt}
        />
        <img
          className={` ${overlayStyles}`}
          {...highResImageLoaded && { style: { opacity: "0" } }}
          src={overlaySrc}
          alt={alt}
        />
      </span>
    );    
}

export default ProgressiveImage;
