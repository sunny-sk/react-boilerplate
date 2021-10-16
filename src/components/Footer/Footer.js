/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';

import Classes from './Footer.module.css';
const Footer = () => {
  return <footer>This is footer</footer>;
};

export default Footer;
Footer.displayName = 'Footer';
Footer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
