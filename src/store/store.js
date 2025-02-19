import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js'
import alertReducer from "./alertSlice.js";

export const store = configureStore({
    reducer: {
      users: userReducer,
      alert: alertReducer,
    },
  });