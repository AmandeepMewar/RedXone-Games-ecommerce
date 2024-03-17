import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartItems.push(action.payload);
    },
    deleteItem(state, action) {
      state.cartItems = state.cartItems.filter(
        item => item.id != action.payload
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = state => state.cart.cartItems.length;

export const getTotalCartPrice = state =>
  state.cart.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
