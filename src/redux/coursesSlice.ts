import { createSlice } from "@reduxjs/toolkit";

const coursesDefault = {
  items: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState: coursesDefault,
  reducers: {
    getCourses: (state, action) => {
      state.items = action.payload;
    },
    resetCourses: (state, action) => {
      state.items = [];
    },
  },
});

export default coursesSlice.reducer;
export const { getCourses, resetCourses } = coursesSlice.actions;
