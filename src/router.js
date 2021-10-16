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
      // domain.com/
      path: '/',
      exact: true,
      public: true,
      component: Home,
      // redirectUrl: '/dashboard/me',
    },
    {
      // domain.com/login
      path: '/login',
      exact: true,
      public: true,
      component: Login,
    },
    {
      // domain.com/register
      path: '/register',
      exact: true,
      public: true,
      component: Register,
    },
    {
      // domain.com/reset-password
      path: '/reset-password',
      exact: true,
      public: true,
      component: ResetPassword,
    },
    {
      // domain.com/forgot-password
      path: '/forgot-password',
      exact: true,
      public: true,
      component: ForgotPassword,
    },

    {
      // domain.com/dashboard
      path: '/dashboard',
      exact: false,
      public: false,
      component: (
        <RouteList
          PATHS={[
            {
              // domain.com/dashboard/
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
              // domain.com/dashboard/me
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
      // no found page
      path: '**',
      exact: true,
      notFound: true,
      component: NotFound,
    },
  ],
};

const Router = () => {
  return (
    // fallback componone for lazy loaded components
    <Suspense fallback={<h1> Loading lazy component ... </h1>}>
      {/* all routes */}
      <RouteList PATHS={PATHS.routes} />
    </Suspense>
  );
};

export default Router;
