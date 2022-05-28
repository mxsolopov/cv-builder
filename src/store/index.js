import { configureStore } from '@reduxjs/toolkit'
import editedResumeReducer from './editedResumeSlice'

export default configureStore({
	reducer: {
		editedResume: editedResumeReducer,
	},
})
