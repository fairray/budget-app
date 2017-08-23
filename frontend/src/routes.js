import React from 'react';
import { Route, IndexRoute} from 'react-router';
import LoginPage from './containers/LoginPage';
import App from './containers/App';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
//import Register from './components/Register';
import Dashboard from './containers/Dashboard';
import RequireAuth from './containers/Auth';
import Logout from './components/Logout';
export const routes = (
  <div> 
    <Route path="/" component={App}>
      <IndexRoute component={RequireAuth(HomePage)}></IndexRoute>
      <Route path='/dashboard' component={RequireAuth(Dashboard)}></Route>
      <Route path='/logout' component={RequireAuth(Logout)}></Route>
      <Route path='/login' component={LoginPage}></Route>
      <Route path='*' component={NotFound} />
    </Route>
  </div>
)