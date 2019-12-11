import { CREATE_USER, EDIT_USER, DELETE_USER } from '../actionTypes'

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case CREATE_USER: {
      const { type, ...user } = action
      return [...state, user]
    }

    case EDIT_USER: {
      const { type, id, ...newPost } = action
      return state.map((oldPost, index) =>
        action.id === index
          ? { ...oldPost, ...newPost }
          : oldPost
      )
    }
    case DELETE_USER: {
      const { type, ...post } = action
      return [...state, post]
    }

    default:
      return state
  }
}