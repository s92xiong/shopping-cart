import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';

const Routes = () => {
  return (
    <HashRouter basename="/">
      <App />
    </HashRouter>
  );
}

export default Routes;