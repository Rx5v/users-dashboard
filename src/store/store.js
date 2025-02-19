import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlicer'
import alertReducer from "./alertSlice";

export const store = configureStore({
    reducer: {
      users: userReducer,
      alert: alertReducer,
    },
  });