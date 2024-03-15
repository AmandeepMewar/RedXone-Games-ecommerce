import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  games: null,
  header: "",
  searched: false,
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
    setSearched(state, action) {
      state.searched = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
