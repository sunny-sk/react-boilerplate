/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';

import Classes from './Header.module.css';
const Header = () => {
  return <header></header>;
};

export default Header;
Header.displayName = 'Header';
Header.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
