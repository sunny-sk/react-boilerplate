/* eslint-disable react/prop-types */
import { RouteList } from 'components';
import { Home, NotFound } from 'pages';
import React, { Suspense } from 'react';

const PATHS = [
  {
    path: '/',
    exact: true,
    public: true,
    component: Home,
    // redirectUrl: '/dashboard/me',
  },
  {
    path: '/signin',
    exact: true,
    public: true,
    component: (
      <>
        <p>Signin</p>
      </>
    ),
  },
  {
    path: '/signup',
    exact: true,
    public: false,
    component: (
      <>
        <p>signup</p>
      </>
    ),
  },
  {
    path: '/dashboard',
    exact: false,
    public: false,
    component: (
      <RouteList
        PATHS={[
          {
            path: '/dashboard/',
            exact: true,
            public: false,
            component: (
              <>
                <p>dashboard</p>
              </>
            ),
          },
          {
            path: '/dashboard/me',
            exact: true,
            public: true,
            component: (
              <>
                <p>me</p>
              </>
            ),
          },
        ]}
      />
    ),
  },
  {
    path: '**',
    exact: true,
    notFound: true,
    component: NotFound,
  },
];

const Router = () => {
  return (
    <Suspense fallback={<h1>Loading lazy component ... </h1>}>
      <RouteList PATHS={PATHS} />
    </Suspense>
  );
};

export default Router;
