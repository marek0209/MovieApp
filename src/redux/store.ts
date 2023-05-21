import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/movieSlice";
import favoriteMoviesReducer from "./features/favoriteMovies/favoriteMoviesSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
  favoriteMovies: favoriteMoviesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
