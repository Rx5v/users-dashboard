import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../services/api'

const userSlice = createSlice({
    name: "users",
    initialState: { users: [], search: "" },
    reducers: {
      setSearch: (state, action) => {
        state.search = action.payload;
      },
      addUser: (state, action) => {
        state.users.push(action.payload);
      },
      updateUser: (state, action) => {
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) state.users[index] = action.payload;
      },
      deleteUser: (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      });
    },
  });
  
  export const { setSearch, addUser, updateUser, deleteUser } = userSlice.actions;

  export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await api.get("/users");
    return response.data;
  });

  export default userSlice.reducer;