import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  games: null,
  header: "",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateGames(state, action) {
      state.games = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
