import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User';
const token = window.localStorage.getItem('token');
const initialState = {isFetching : false, isLoggedIn: false, token};

export default function authstate(state = initialState, action) {

  switch (action.type) {

    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case LOGIN_SUCCESS:
      return {
        isFetching : false,
        token: action.payload,
        isLoggedIn: true
      }

    case LOGIN_FAIL:
      return {
        ...state,
        isFetching : false,
        isLoggedIn: false
      }

    case LOGOUT_SUCCESS:
      return {
        isFetching : false,
        isLoggedIn: false,
        token: null
      }

    default:
      return state
    }
}