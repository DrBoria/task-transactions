import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from 'pages/Main';
import DemoPage from 'pages/DemoPage';

export default () => (
  <Route path="/">
    <Main>
      <Switch>
        <Route exact path="/">
          <DemoPage />
        </Route>
      </Switch>
    </Main>
  </Route>
);
