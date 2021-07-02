import { configureStore } from "@reduxjs/toolkit";
import sendReducer from "../features/sendSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    send: sendReducer,
    user: userReducer,
  },
});
