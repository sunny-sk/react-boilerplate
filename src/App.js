import { ErrorBoundary } from 'components';
import { AuthProvider } from 'lib/context/authContext';
import { LangProvider } from 'lib/context/langContext';
import React from 'react';
import Router from 'router';
function App() {
  return (
    <ErrorBoundary>
      <LangProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </LangProvider>
    </ErrorBoundary>
  );
}

export default App;
