import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js'
import alertReducer from "./alertSlice.js";
import sidebarReducer from "./sidebarSlice.js";

export const store = configureStore({
    reducer: {
      users: userReducer,
      alert: alertReducer,
      sidebar: sidebarReducer
    },
  });