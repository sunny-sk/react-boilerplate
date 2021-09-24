/* eslint-disable react/prop-types */
import React from 'react';
// for lazy loading image
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Img = (props) => {
  return <LazyLoadImage {...props} />;
};

export default Img;
