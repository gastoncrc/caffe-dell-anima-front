import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  cart: savedCart,
  isEmpty: savedCart.length === 0,
};

export const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const prodInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (prodInCart) {
        if (prodInCart.quantity !== undefined) {
          prodInCart.quantity++;
          state.isEmpty = false;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.isEmpty = false;
      }
    },

    emptyCart: (state) => {
      state.cart = [];
      state.isEmpty = true;
    },

    deleteProductCart: (state, action) => {
      const prodInCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.cart = prodInCart;
      if (state.cart.length === 0) {
        state.isEmpty = true;
      }
    },

    incrementQuantity: (state, action) => {
      const prodInCart = state.cart.find(
        (product) => product.id === action.payload
      );
      if (prodInCart) {
        if (prodInCart.quantity !== undefined) {
          prodInCart.quantity++;
        }
      }
    },
    decrementQuantity: (state, action) => {
      const prodInCart = state.cart.find(
        (product) => product.id === action.payload
      );
      if (prodInCart) {
        if (prodInCart.quantity !== undefined && prodInCart.quantity > 1) {
          prodInCart.quantity--;
        }
      }
    },
  },
});

export const selectSubTotalPrice = (state, productId) => {
  const product = state.cartSlice.cart.find(
    (product) => product.id === productId
  );
  return product ? product.price * product.quantity : 0;
};

export const selectTotalPrice = (state) => {
  return state.cartSlice.cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
};

export const selectTotalItems = (state) => {
  return state.cartSlice.cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const {
  addProductToCart,
  emptyCart,
  deleteProductCart,
  incrementQuantity,
  decrementQuantity,
  quantityCart,
} = cartSlice.actions;

export default cartSlice.reducer;
