import * as React from 'react';


interface ErrorBoundaryProps {
  children: any,
}

interface ErrorBoundaryState {
  hasError: boolean,
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [values] = React.useState<ErrorBoundaryState>({
    hasError: false
  });

  if (values.hasError) {
    // You can render any custom fallback UI
    return <h1>Something went wrong.</h1>;
  }

  return children;
};

ErrorBoundary.DerivedStateFromError = (error: any) => {
  // Update redux so the next render will show the fallback UI.
  return { hasError: true, error };
};

export default ErrorBoundary;
