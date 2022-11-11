import { createSlice } from "@reduxjs/toolkit";

const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState: {
    resumeData: {
      avatar: "",
      job: "",
      name: "",
      surname: "",
      birth: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      summary: "",
      jobs: [],
      education: [],
      links: [],
      skills: [],
      courses: [],
      recommendations: [],
      languages: [],
      hobbies: "",
    },
  },
  reducers: {
    editItem(state, action) {
      state.resumeData[action.payload.item] = action.payload.value;
    },
    addObjItem(state, action) {
      state.resumeData[action.payload.item].push(action.payload.obj);
    },
    editObjItem(state, action) {
      const editedItem = state.resumeData[action.payload.objArr].find(
        (obj) => obj.id === action.payload.id
      );
      if (editedItem) {
        editedItem[action.payload.item] = action.payload.value;
      } else {
        return;
      }
    },
    removeObjItem(state, action) {
      state.resumeData[action.payload.objArr] = state.resumeData[
        action.payload.objArr
      ].filter((item) => item.id !== action.payload.id);
    },
    clearArrItem(state, action) {
      state.resumeData[action.payload.item] = [];
    },
    clearItem(state, action) {
      state.resumeData[action.payload.item] = "";
    },
    updateDataStore(state, action) {
      state.resumeData = action.payload.newItem;
    },
  },
});

export const {
  removeObjItem,
  editItem,
  addObjItem,
  editObjItem,
  clearArrItem,
  clearItem,
  updateDataStore,
} = resumeDataSlice.actions;

export default resumeDataSlice.reducer;
