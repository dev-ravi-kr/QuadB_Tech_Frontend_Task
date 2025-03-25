import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: () => {},
    logout: () => {},
    register: () => {},
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
