import 'react-toastify/dist/ReactToastify.min.css';

import { ErrorBoundary } from 'components';
import { AuthProvider } from 'context/authContext';
import { LangProvider } from 'context/langContext';
import React from 'react';
import { IconContext } from 'react-icons';
import { ToastContainer } from 'react-toastify';
import Router from 'router';
function App() {
  return (
    <ErrorBoundary>
      <>
        <ToastContainer
          position="top-right"
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
        />
        <IconContext.Provider value={{ size: 23 }}>
          <LangProvider>
            <AuthProvider>
              <Router />
            </AuthProvider>
          </LangProvider>
        </IconContext.Provider>
      </>
    </ErrorBoundary>
  );
}

export default App;
