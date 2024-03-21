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
    add: (state, action: PayloadAction<{ movie: WatchListMovie }>) => {
      state.watchList = [...state.watchList, action.payload.movie];
    },
    remove: (state, action: PayloadAction<{ movie: WatchListMovie }>) => {
      state.watchList = state.watchList.filter(movie => movie.id !== action.payload.movie.id);
    }
  }
});

export const { add, remove } = watchList_slice.actions;

export const getWatchList = (state: Slice) => state.watchList;

export default watchList_slice.reducer;
