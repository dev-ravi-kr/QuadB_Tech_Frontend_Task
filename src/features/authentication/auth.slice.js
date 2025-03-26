import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      if (action.payload) return;
      state.user = null;
    },
    register: () => {},
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
