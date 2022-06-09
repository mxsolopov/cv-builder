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
			summary: '',
			jobs: [],
			education: [],
		},
	},
	reducers: {
		editItem(state, action) {
			state.editedResume[action.payload.item] = action.payload.value
		},
		addObjItem(state, action) {
			state.editedResume[action.payload.item].push(action.payload.obj)
		},
		editObjItem(state, action) {
			const editedItem = state.editedResume[action.payload.objArr].find(
				obj => obj.id === action.payload.id
			)
			if (editedItem) {
				editedItem[action.payload.item] = action.payload.value
			} else {
				return
			}
		},
		removeObjItem(state, action) {
			state.editedResume[action.payload.objArr] = state.editedResume[
				action.payload.objArr
			].filter(item => item.id !== action.payload.id)
		},
	},
})

export const { removeObjItem, editItem, addObjItem, editObjItem } =
	editedResumeSlice.actions

export default editedResumeSlice.reducer
