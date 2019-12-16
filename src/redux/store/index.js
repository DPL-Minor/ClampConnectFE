// redux
import { createStore, compose } from 'redux'
import appReducer from '../reducers'
import middleware from './middleware'


const enhancer = compose(
  middleware,
  //persistState(getSessionKey())
)
const store = createStore(appReducer, {}, middleware)

export default store