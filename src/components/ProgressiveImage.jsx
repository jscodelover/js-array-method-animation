import React, { useState, useRef } from "react";
import style from 'styled-components';

const Image = style.img`
  position: absolute;
  top: 0;
  filter: blur(1px);
  transition: opacity ease-in 1000ms;
`; 

function ProgressiveImage(props){
    const [highResImageLoaded, handlehighResImageLoaded] = useState(false);
    const highResImage = useRef(null);

    const { overlaySrc, alt, src, className } = props;
    return (
      <span>
        <img
          className={className}
          onLoad={() => {
            handlehighResImageLoaded(true)
          }}
          style={highResImageLoaded ? {display: "block"} : {display: 'none'}}
          ref={highResImage}
          src={src}
          alt={alt}
        />
        <Image
          className={className}
          style={highResImageLoaded ? {opacity: "0"} : {opacity: "1"}}
          src={overlaySrc}
          alt={alt}
        />
      </span>
    );    
}

export default ProgressiveImage;
