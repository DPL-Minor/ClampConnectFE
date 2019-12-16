import { CHANGE_CONNECTION_STATUS } from '../actionTypes'

export default function connectionReducer(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_CONNECTION_STATUS':
      return Object.assign({}, state, {
        isConnected: action.isConnected,
      });
    default:
      return state
  }
}