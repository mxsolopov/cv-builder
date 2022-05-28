import { createSlice } from '@reduxjs/toolkit'

const editedResumeSlice = createSlice({
	name: 'editedResume',
	initialState: {
		editedResume: {
			job: '',
			name: '',
			surname: '',
			birth: {
				day: '',
				month: '',
				year: '',
			},
			email: '',
			phone: '',
			country: '',
			city: '',
		},
	},
	reducers: {
		editItem(state, action) {
			state.editedResume[action.payload.item] = action.payload.value
		},
	},
})

export const { editItem } = editedResumeSlice.actions

export default editedResumeSlice.reducer
