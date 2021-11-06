import { Footer, Header } from 'components';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const Page = ({
  pageTitle,
  pageDescription,
  children,
  footer = true,
  header = true,
}) => {
  if (!pageTitle || !children) {
    throw new Error(
      'Missing pageTitle or children to the custom Page component'
    );
  }
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
      {header && <Header />}
      <div className="container">{children}</div>
      <br />
      {footer && <Footer />}
    </>
  );
};

export default Page;
Page.displayName = 'Page';
Page.propTypes = {
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element,
  ]),
  footer: PropTypes.bool,
};
