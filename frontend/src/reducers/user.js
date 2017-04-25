import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

const initialState = JSON.parse(window.localStorage.getItem('user')) || {isFetching : false};

export default function userstate(state = initialState, action) {

  switch (action.type) {

    case LOGIN_REQUEST:
      return {
        isFetching: true
      }

    case LOGIN_SUCCESS:
      return {
        isFetching : false,
        user: action.payload
      }

    case LOGIN_FAIL:
      return {
        isFetching : false,
        user: null
      }

    case LOGOUT_SUCCESS:
      // TODO
      return {}

    default:
      return state
    }
}