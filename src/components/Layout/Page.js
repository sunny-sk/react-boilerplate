import React from 'react';
import { Helmet } from 'react-helmet';
const Page = ({ pageTitle, pageDescription, children }) => {
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
    </>
  );
};

export default Page;
