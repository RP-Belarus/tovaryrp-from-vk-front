import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import MainPage from './pages/Main'
import LinksPage from './pages/Links'
import ContactsPage from "./pages/Contacts";
import MainNavigation from './components/Navigation/MainNavigation'

import './App.css';

function App() {
  return (
      <HashRouter>
          <React.Fragment>
              <MainNavigation/>
              <main>
                  <Switch>
                      <Redirect from="/" to="/main" exact />
                      <Route path="/main" component={MainPage} />
                      <Route path="/links" component={LinksPage} />
                      <Route path="/contacts" component={ContactsPage} />
                  </Switch>
              </main>
          </React.Fragment>
      </HashRouter>
  );
}

export default App;
