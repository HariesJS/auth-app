import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://',
})

export const authAPI = {
    signUp(email: string, password: string, ref: string) {
        return API.post('api.prof.world/v2.0/profile/registration', {
            email,
            password,
            ref,
        });
    },
    signIn(email: string, password: string) {
        return API.post('api.prof.world/v2.0/profile/loginUser', {
            email,
            password,
        })
    },
    logout(userToken: string) {
        return API.post('api.prof.world/v2.0/profile/logoutUser', {
            userToken
        })
    }
}

export const userAPI = {
    getUser(userToken: string) {
        return API.post('api.prof.loc/v2.0/profile/get_userInfo', {
            userToken,
        })
    }
}