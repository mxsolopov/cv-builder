import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: "title",
  initialState: {
    title: {
      name: "Название",
    },
  },
  reducers: {
    editItem(state, action) {
      state.title[action.payload.item] = action.payload.value;
    },
  },
});

export const { editItem } = titleSlice.actions;

export default titleSlice.reducer;
