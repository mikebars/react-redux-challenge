import { Router, Route, Redirect, IndexRedirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import './style.scss';

import App from './containers/App';
import AboutPage from './containers/AboutPage';
import TermPage from './containers/TermPage';

import configure from './store';

const store   = configure();
const history = syncHistoryWithStore( browserHistory, store );

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRedirect to='/about'/>
        <Route path='/about' component={ AboutPage }/>
        <Route path='/term/:term' component={ TermPage }/>
        <Redirect from='*' to='about'/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById( 'root' )
);