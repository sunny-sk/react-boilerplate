/* eslint-disable react/prop-types */

import { useAuth } from 'lib/hooks';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// protected route
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authData } = useAuth();
  if (authData) {
    return (
      <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: '/login',
          search: `?redirect=${encodeURIComponent(rest.location.pathname)}`,
        }}
      />
    );
  }
};
// route list
export const RouteList = ({ PATHS }) => {
  return (
    <Switch>
      {PATHS.map((path) => {
        if (path.notFound) {
          return <Route exact key={path.path} component={path.component} />;
        } else {
          if (!path.public) {
            return (
              <ProtectedRoute
                key={path.path}
                exact={path.exact}
                path={path.path}
                component={path.component}
              />
            );
          } else {
            if (path.redirectUrl) {
              return <Redirect to={path.redirectUrl} />;
            } else {
              return (
                <Route
                  path={path.path}
                  key={path.path}
                  exact={path.exact}
                  component={path.component}
                />
              );
            }
          }
        }
      })}
    </Switch>
  );
};
