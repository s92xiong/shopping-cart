import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  );
}

export default Routes;