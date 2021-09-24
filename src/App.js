/* eslint-disable no-unused-vars */
import { ErrorBoundary } from 'components';
import { AuthProvider } from 'lib/context/authContext';
import React from 'react';
import Router from 'router';
function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
