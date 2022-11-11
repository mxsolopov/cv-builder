import { createSlice } from "@reduxjs/toolkit";

const resumeBaseSlice = createSlice({
  name: "resumeBase",
  initialState: {
    resumeBase: {
      title: "Название резюме",
      template: "base",
      date: "",
      additionalSections: {
        courses: false,
        recommendations: false,
        languages: false,
        hobbies: false,
      },
    },
  },
  reducers: {
    editItem(state, action) {
      state.resumeBase[action.payload.item] = action.payload.value;
    },
    updateBaseStore(state, action) {
      state.resumeBase = action.payload.newItem;
    },
  },
});

export const { editItem, updateBaseStore } = resumeBaseSlice.actions;

export default resumeBaseSlice.reducer;
