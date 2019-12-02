// Root Reducer, combines all reducers into one single reducer

import { combineReducers } from 'redux'

import postsReducer from './posts'

const appReducer = combineReducers({
  posts: postsReducer,
})

export default appReducer