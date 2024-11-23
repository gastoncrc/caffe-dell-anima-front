import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../slices/filterSlice";
import cartSlice from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
  },
});

store.subscribe(() => {
  const cartState = store.getState().cartSlice.cart;
  localStorage.setItem("cart", JSON.stringify(cartState));
});
