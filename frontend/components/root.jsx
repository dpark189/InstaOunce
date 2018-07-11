import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import App from './app';

export const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
