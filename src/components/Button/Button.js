import PropTypes from 'prop-types';
import React from 'react';

import Classes from './Button.module.css';
const Button = ({ children, title, className, ...props }) => {
  if (!title && !children) {
    throw new Error('Missing title or children to the custom button component');
  }
  return (
    <button
      {...props}
      className={`btn btn-primary ${Classes.btn} ${className}`}>
      {title ? <>{title}</> : <>{children}</>}
    </button>
  );
};

export default Button;
Button.displayName = 'Button';
Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element,
  ]),
};
