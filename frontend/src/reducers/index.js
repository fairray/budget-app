import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import page from './page';
import user from './user';

export default combineReducers({
    page,
    user,
    routing:routerReducer
});