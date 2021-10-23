import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ThemeProviderWrapper from 'styles/ThemeProviderWrapper';
import Alerts from 'sections/AlertsSection';

import store from './store';

import './index.css';

const render = () => {
  // eslint-disable-next-line global-require
  const AppRoutes = require('routes').default;

  ReactDOM.render(
    <ThemeProviderWrapper>
      <Provider store={store}>
        <Router>
          <AppRoutes />
        </Router>
        <Alerts />
      </Provider>
    </ThemeProviderWrapper>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('routes', render);
}
