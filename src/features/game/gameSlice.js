import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  games: null,
  header: "",
  showBackButton: false,
  showSearchBar: false,
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
    setHeader(state, action) {
      state.header = action.payload;
    },
    setShowBackButton(state, action) {
      state.showBackButton = action.payload;
    },
    setShowSearchBar(state, action) {
      state.showSearchBar = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
