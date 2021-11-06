// Example
//  <Img
//    height={500}
//    width={500}
//    src="https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg",
//    alt : "alt text"
//  />;

import PropTypes from 'prop-types';
import React from 'react';
// for lazy loading image
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Img = ({ src, alt, ...props }) => {
  if (!src || !alt) {
    throw new Error('Missing src and alt props to the custom image component');
  }
  return <LazyLoadImage src={src} effect="blur" alt={alt} {...props} />;
};

export default Img;

Img.displayName = 'Img';
Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
