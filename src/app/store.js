import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import gameReducer from "../features/game/gameSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    cart: cartReducer,
  },
});

export default store;
