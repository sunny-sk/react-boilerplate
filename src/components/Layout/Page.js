import { Footer } from 'components';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const Page = ({ pageTitle, pageDescription, children, footer = true }) => {
  return (
    <>
      {(pageTitle || pageDescription) && (
        <Helmet>
          {pageTitle && <title>{String(pageTitle)}</title>}
          {pageDescription && (
            <meta name="description" content={String(pageDescription)} />
          )}
        </Helmet>
      )}
      {children}
      {footer && <Footer />}
    </>
  );
};

export default Page;
Page.displayName = 'Page';
Page.propTypes = {
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element,
  ]),
  footer: PropTypes.bool,
};
