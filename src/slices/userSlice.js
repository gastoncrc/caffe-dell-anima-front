import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.name = null;
      state.token = null;
      sessionStorage.clear();
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
