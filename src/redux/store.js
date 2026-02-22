import { configureStore } from "@reduxjs/toolkit"
import pasteReducer from "./pasteSlice"
import themeReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
    theme: themeReducer
  }
})
