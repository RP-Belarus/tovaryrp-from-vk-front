import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import MainPage from './pages/Main'
import LinksPage from './pages/Links'

import './App.css';

function App() {
  return (
      <HashRouter>
          <Switch>
              <Redirect from="/" to="/main" exact />
              <Route path="/main" component={MainPage} />
              <Route path="/links" component={LinksPage} />
          </Switch>
      </HashRouter>
  );
}

export default App;
