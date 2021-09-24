import { NotFound } from 'pages';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// protected route
// const publicPaths = [];
export const ProtectedRoute = () => {};

// import NotFound from 'screens/404/NotFound';
// lazy loaded components

// const LazyCounter = React.lazy(() => import('screens/Counter/Counter'));
// const LazyUserProfile = React.lazy(() => import('screens/Profile/UserProfile'));
// const NotFound = React.lazy(() => import('screens/404/NotFound'));
const Router = () => {
  return (
    <Suspense fallback={<h1>Loading lazy component ... </h1>}>
      <Switch>
        <Route path="/" exact>
          <center>
            <p style={{ color: 'white' }}>Home</p>
          </center>
        </Route>
        <Route exact>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Router;
