import {CREATE_USER, DELETE_USER} from '../reducers/UsersReducer'

export function createUser(newUser) {
    return {
        type: CREATE_USER,
        payload: newUser
    }
}

export function deleteUser(newUser) {
    return {
        type: DELETE_USER,
        payload: newUser
    }
}

export default {
    createUser,
    deleteUser
}