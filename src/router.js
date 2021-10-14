/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { RouteList } from 'components';
import {
  ForgotPassword,
  Home,
  Login,
  NotFound,
  Register,
  ResetPassword,
} from 'pages';
import React, { Suspense } from 'react';

const PATHS = {
  protectedRedirectRoute: '/login',
  routes: [
    {
      path: '/',
      exact: true,
      public: false,
      component: Home,
      // redirectUrl: '/dashboard/me',
    },
    {
      path: '/login',
      exact: true,
      public: true,
      component: Login,
    },
    {
      path: '/register',
      exact: true,
      public: true,
      component: Register,
    },
    {
      path: '/reset-password',
      exact: true,
      public: true,
      component: ResetPassword,
    },
    {
      path: '/forgot-password',
      exact: true,
      public: true,
      component: ForgotPassword,
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
  ],
};

const Router = () => {
  return (
    <Suspense fallback={<h1> Loading lazy component ... </h1>}>
      <RouteList PATHS={PATHS.routes} />
    </Suspense>
  );
};

export default Router;
