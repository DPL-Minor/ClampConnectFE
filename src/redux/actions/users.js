import { FETCH_USER_REQUEST, CREATE_USER, EDIT_USER, DELETE_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actionTypes'
import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from '../actionTypes'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actionTypes'

import { thunkCreator } from './utils'

// create Redux store
import store from '../store'

obj = {
  "email": "wissevoortman@gmail.com",
  "password": "Password"
}

export const fetchUser = () => thunkCreator({
  types: [FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE],
  promise: fetch('http:/10.0.96.107:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(responce => responce.json())
})

export const createUser = (username, realname) => thunkCreator({
  types: [CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE],
  promise: fetch('http:/10.0.96.107:3000/api/users/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(response => response.json())
})

export const login = (username, password) => thunkCreator({
  types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
  promise: fetch('http:/10.0.96.107:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(response => response.json())
})

export const editUser = (id, text) => {
  return {
    type: EDIT_USER,
    id,
    text,
  }
}