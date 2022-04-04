import { SET_USER, ADD_USER, EDIT_USER, DELETE_USER } from "./constants";

export const setUser = (payload, propName) => {
    return {
        type: SET_USER,
        payload,
        propName
    }
}

export const addUser = payload => {
    return {
        type: ADD_USER,
        payload
    }
}

export const editUser = payload => {
    return {
        type: EDIT_USER,
        payload
    }
}

export const deleteUser = payload => {
    return {
        type: DELETE_USER,
        payload
    }
}