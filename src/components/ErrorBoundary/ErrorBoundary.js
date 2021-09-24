/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <br />
          <br />
          <center>
            <h1 style={{ color: 'white' }}>Something went wrong with Ui.</h1>
          </center>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
