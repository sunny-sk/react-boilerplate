/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';

import Classes from './Footer.module.css';
const Footer = () => {
  return (
    <footer className="jumbotron">
      <h6 className="text-center">@copyrighted 2021</h6>
    </footer>
  );
};

export default Footer;
Footer.displayName = 'Footer';
Footer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
