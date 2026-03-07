import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkmode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkmode = !state.darkmode;
    },
  }
})

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
