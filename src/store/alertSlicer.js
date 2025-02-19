import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    message: "",
    type: "info",
    visible: false,
  },
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.visible = true;
    },
    hideAlert: (state) => {
      state.visible = false;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
