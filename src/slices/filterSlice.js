import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

const initialState = {
  data: products,
};

export const filterSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    getAllProducts: (state) => {
      state.data = initialState.data;
    },
    filterByFeature: (state) => {
      state.data = initialState.data;
      state.data = state.data.filter((prod) => prod.feature === true);
    },
    filterByOrigin: (state, action) => {
      state.data = initialState.data;
      if (action.payload === "Todos") {
        state.data = initialState.data;
      } else {
        state.data = state.data.filter(
          (prod) => prod.origin === action.payload
        );
      }
    },
  },
});

export const { filterByFeature, filterByOrigin, getAllProducts } =
  filterSlice.actions;

export default filterSlice.reducer;
