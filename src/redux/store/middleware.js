const ReduxThunk = require('redux-thunk').default
import { applyMiddleware } from 'redux'

const middleware = applyMiddleware(ReduxThunk)

export default middleware