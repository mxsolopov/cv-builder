import { configureStore } from '@reduxjs/toolkit'
import initReducer from './initSlice'

export default configureStore({
	reducer: {
		init: initReducer,
	},
})
