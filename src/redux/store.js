import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./pasteSlice";
import themeReducer from "./themeSlice";
import authReducer from "./authSlice"; // ✅ Fix: was missing entirely

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
    theme: themeReducer,
    auth: authReducer,  // ✅ Fix: ProtectedRoute reads state.auth.token — this was undefined before
  },
});
