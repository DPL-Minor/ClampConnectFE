// Root Reducer, combines all reducers into one single reducer

import { combineReducers } from 'redux'

import postsReducer from './posts'
import userReducer from './users'

const appReducer = combineReducers({
  posts: postsReducer,
  users: userReducer,
})

export default appReducer