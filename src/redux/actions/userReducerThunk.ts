import { userAPI } from "../../API/api";
import { SET_LOADING } from "../reducers/userReducer";
import { AppDispatch } from "../store/store";

export const getUserInfoThunk = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setUserLoadingThunk(true))
        const userToken = localStorage.getItem('user_token')
        await userAPI.getUser(`${userToken}`)
        dispatch(setUserLoadingThunk(false))
    } catch (e) {
        console.log(e)
        dispatch(setUserLoadingThunk(false))
    }
}

export const setUserLoadingThunk = (isLoading: boolean) => async (dispatch: AppDispatch) => {
    dispatch({ type: SET_LOADING, isLoading })
}