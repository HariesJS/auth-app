import { authAPI } from "../../API/api"
import { SET_AUTH_STATUS, SET_LOADING } from "../reducers/authReducer"
import { AppDispatch } from "../store/store"
const md5 = require('md5')

interface authUserTypes {
    email: string
    password: string
}

export const registerUserThunk = (data: authUserTypes, handleOpenModal: (e: boolean) => void) => async (dispatch: AppDispatch) => {
    const ref = 'http://localhost:3000/'
    try {
        dispatch({ type: SET_LOADING, isLoading: true })
        const response = await authAPI.signUp(
            data.email,
            md5(data.password),
            ref
        )
        dispatch({ type: SET_LOADING, isLoading: false })
        response.data.status === 'success' && handleOpenModal(true)
        console.log('pss', md5(data.password))
    } catch (e) {
        dispatch({ type: SET_LOADING, isLoading: false })
    }
}

export const setAuthThunk = (isAuth: boolean) => async (dispatch: AppDispatch) => {
    dispatch({ type: SET_AUTH_STATUS, isAuth })
}

export const loginUserThunk = (data: authUserTypes) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: SET_LOADING, isLoading: true })
        const response = await authAPI.signIn(data.email, md5(data.password))
        localStorage.setItem('user_token', response.data.user_data.token)
        dispatch(setAuthThunk(true))
        dispatch({ type: SET_LOADING, isLoading: false })
    } catch (e) {
        dispatch({ type: SET_LOADING, isLoading: false })
    }
}

export const logoutUserThunk = (userToken: string) => async (dispatch: AppDispatch) => {
    try {
        await authAPI.logout(userToken)
        localStorage.removeItem('user_token')
        dispatch(setAuthThunk(false))
    } catch (e) {
        console.log(e)
    }
}