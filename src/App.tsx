import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './global-styles';

const LandingPage = lazy(() => import('./pages/landing-page/landing-page'));

const App = (): React.ReactElement => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Suspense fallback="loading">
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default App;
