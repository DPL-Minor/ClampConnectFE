import { CHANGE_CONNECTION_STATUS } from '../actionTypes'

export const connectionState = ({ status }) => {
  return { type: 'CHANGE_CONNECTION_STATUS', isConnected: status }
}

