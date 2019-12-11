// redux
import { createStore, compose } from 'redux'
import appReducer from '../reducers'
import middleware from './middleware'


const enhancer = compose(
  middleware,
  //persistState(getSessionKey())
)

export default function confiureStore(initialstate) {
  return createStore(appReducer, initialstate, middleware)
}