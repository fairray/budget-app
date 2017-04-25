import React from 'react';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import { Route } from 'react-router';
import NotFound from './components/NotFound';

export const routes = (
  <div> 
    <Route path="/" component={App}>
      <Route path='/login' component={LoginPage}></Route>
      <Route path='*' component={NotFound} />
    </Route>
  </div>
        )