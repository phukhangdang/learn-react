import { SET_USER, ADD_USER, EDIT_USER, DELETE_USER } from "./constants";

export const setUser = (payload?: any, propName?: any) => {
    return {
        type: SET_USER,
        payload,
        propName
    }
}

export const addUser = (payload: any) => {
    return {
        type: ADD_USER,
        payload
    }
}

export const editUser = (payload: any) => {
    return {
        type: EDIT_USER,
        payload
    }
}

export const deleteUser = (payload: any) => {
    return {
        type: DELETE_USER,
        payload
    }
}