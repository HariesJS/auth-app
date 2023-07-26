import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../reducers/authReducer'

const store = configureStore({
	reducer: {
		authAPI: authReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store