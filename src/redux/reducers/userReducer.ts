import { AnyAction } from "redux"

export const GET_USER_DATA = 'auth-app/userReducer/GET_USER_DATA'
export const SET_LOADING = 'auth-app/userReducer/SET_LOADING'

interface stateTypes {
    user: {
        email: string | null
        firstName: string | null
        lastName: string | null
        surName: string | null
        birthday: string | null
        phoneNumber: string | null
    }
    isLoading: boolean
}

const initialState: stateTypes = {
    user: {
        email: null,
        firstName: null,
        lastName: null,
        surName: null,
        birthday: null,
        phoneNumber: null,
    },
    isLoading: false,
}

export const authReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_USER_DATA: return {
            ...state,
            user: action.user
        }
        case SET_LOADING: return {
            ...state,
            isLoading: action.isLoading,
        }
        default:
            return state;
    }
}