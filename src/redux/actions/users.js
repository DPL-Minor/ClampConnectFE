import { CREATE_USER, EDIT_USER, DELETE_USER } from '../actionTypes'

export const createUser = (firstname, lastname) => {
  return {
    type: CREATE_USER,
    firstname,
    lastname,
  }
}

export const editUser = (id, text) => {
  return {
    type: EDIT_USER,
    id,
    text,
  }
}