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
      state.cartItems.filter(item => item.gameId != action.payload);
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
