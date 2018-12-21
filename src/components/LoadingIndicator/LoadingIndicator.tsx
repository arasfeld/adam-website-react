import React from 'react';
import { LoadingComponentProps } from 'react-loadable';
import './LoadingIndicator.css';

const LoadingIndicator: React.FunctionComponent<LoadingComponentProps> = () => {
  return (
    <div className="App-loading">
      Loading...
    </div>
  );
};

export default LoadingIndicator;
