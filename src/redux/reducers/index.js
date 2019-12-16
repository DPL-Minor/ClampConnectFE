// Root Reducer, combines all reducers into one single reducer

import { combineReducers } from 'redux'

import postsReducer from './posts'
import userReducer from './users'
import errorReducer from './error'
import loadingReducer from './loading'
import sessionReducer from './session'
import connectionReducer from './connection'

const appReducer = combineReducers({
  posts: postsReducer,
  users: userReducer,
  error: errorReducer,
  loading: loadingReducer,
  session: sessionReducer,
  connection: connectionReducer
})

export default appReducer