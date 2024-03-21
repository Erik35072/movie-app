import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WatchListMovie } from "../../../../types/movies";

interface Slice {
  watchList: WatchListMovie[];
}

const initialState: { watchList: WatchListMovie[] } = {
  watchList: []
};

const watchList_slice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addMovieToWatchList: (state, action: PayloadAction<WatchListMovie>) => {
      state.watchList = [...state.watchList, action.payload];
    },
    removeMovieFromWatchList: (state, action: PayloadAction<WatchListMovie>) => {
      state.watchList = state.watchList.filter(movie => movie.id !== action.payload.id);
    }
  }
});

export const { addMovieToWatchList, removeMovieFromWatchList } = watchList_slice.actions;

export const getWatchList = (state: Slice) => state.watchList;

export const getWatchListMoviesCount = (state: Slice) => state.watchList.length;

export default watchList_slice.reducer;
