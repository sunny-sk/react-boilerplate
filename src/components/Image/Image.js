import PropTypes from 'prop-types';
import React from 'react';
// for lazy loading image
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Img = ({ src, alt = '', ...props }) => {
  return <LazyLoadImage src={src} effect="blur" alt={alt} {...props} />;
};

export default Img;
//  <Img
//    height={500}
//    width={500}
//    src="https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1050&w=1000"
//  />;
Img.displayName = 'Img';
Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
