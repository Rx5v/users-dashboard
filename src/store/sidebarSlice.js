import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    open: false
  },
  reducers: {
    showSidebar: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { showSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
