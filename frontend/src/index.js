import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { routes } from './routes';
import {LOGIN_SUCCESS} from './constants/User';
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store);
const token = window.localStorage.getItem('token');
if (token){
  store.dispatch({
    type: LOGIN_SUCCESS,
    payload: token
  })
}

ReactDOM.render(
  <Provider store={store}>
    <Router  history={history} routes={routes}>
    </Router >
  </Provider>,
  document.getElementById('root')
);