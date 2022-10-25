import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Alerts from 'sections/AlertsSection';

import ThemeProviderWrapper from 'styles/ThemeProviderWrapper';

import './index.css';
import store from './store';

const render = () => {
  // Fix for hot module replacement working properly
  /* eslint @typescript-eslint/no-var-requires: "off" */
  /* eslint @typescript-eslint/naming-convention: "off" */
  /* eslint unicorn/prefer-module: "off" */
  const AppRoutes = require('routes').default;

  ReactDOM.render(
    <ThemeProviderWrapper>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <Alerts />
      </Provider>
    </ThemeProviderWrapper>,
    document.querySelector('#root')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('routes', render);
}
