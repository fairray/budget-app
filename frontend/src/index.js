import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { routes } from './routes';
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router  history={history} routes={routes}>
    </Router >
  </Provider>,
  document.getElementById('root')
);