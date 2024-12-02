import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    origin: "Todos",
    feature: false,
  },
  reducers: {
    filterByOrigin: (state, action) => {
      state.origin = action.payload;
    },
    filterByFeature: (state, action) => {
      state.feature = action.payload;
    },
  },
});

export const { filterByOrigin, filterByFeature } = filterSlice.actions;

export default filterSlice.reducer;
