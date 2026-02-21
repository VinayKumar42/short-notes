import {configureStore} from "@reduxjs/toolkit"
import pasteReducer from "./pasteSlice"
import authReducer from "./authSlice";

export const store = configureStore({
  reducer:{
      paste: pasteReducer,
      auth: authReducer,
  },
});