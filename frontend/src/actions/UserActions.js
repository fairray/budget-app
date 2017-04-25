import fetch from 'isomorphic-fetch'
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User';
export function login(payload) {
  return function(dispatch){
    dispatch({
      type: LOGIN_REQUEST
    })
    fetch('/api/users/token',{
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type':'application/json'
      }
    }).then(res => {
      if (res.status === 200){
        res.json().then(data => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data
          })
        })
      }else{
        dispatch({
          type: LOGIN_FAIL
        })
      }
      console.log(res);
    }).catch(err => console.log(err));
  }
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  }
}