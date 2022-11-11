import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loader: {
      state: false,
    },
  },
  reducers: {
    editItem(state, action) {
      state.loader[action.payload.item] = action.payload.value;
    },
  },
});

export const { editItem } = loaderSlice.actions;

export default loaderSlice.reducer;
