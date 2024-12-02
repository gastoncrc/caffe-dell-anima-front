import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../slices/filterSlice";
import cartSlice from "../slices/cartSlice";
import userSlice from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    user: userSlice,
  },
});

store.subscribe(() => {
  const cartState = store.getState().cartSlice.cart;
  localStorage.setItem("cart", JSON.stringify(cartState));
});
