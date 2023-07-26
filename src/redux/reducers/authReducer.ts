import { AnyAction } from "redux";

export const SET_AUTH_STATUS = 'auth-app/authReducer/SET_AUTH_STATUS'
export const SET_LOADING = 'auth-app/authReducer/SET_LOADING'

interface stateTypes {
    isAuth: boolean
    isLoading: boolean
}

const initialState: stateTypes = {
    isAuth: false,
    isLoading: false
}

export const authReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_AUTH_STATUS: return {
            ...state,
            isAuth: action.isAuth
        }
        case SET_LOADING: return {
            ...state,
            isLoading: action.isLoading,
        }
        default:
            return state;
    }
}