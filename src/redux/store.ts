import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/movieSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
