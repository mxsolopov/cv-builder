import { createSlice } from '@reduxjs/toolkit'

const initSlice = createSlice({
	name: 'init',
	initialState: {
		init: [],
	},
	reducers: {
		initFunc(state, action) {},
	},
})

export const { initFunc } = initSlice.actions

export default initSlice.reducer
