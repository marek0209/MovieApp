import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../../types";

interface FavoriteMoviesState {
  favoriteMovies: Movie[];
}

const initialState: FavoriteMoviesState = {
  favoriteMovies: [],
};

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<Movie>) => ({
      ...state,
      favoriteMovies: [...state.favoriteMovies, action.payload],
    }),
    removeFavoriteMovie: (state, action: PayloadAction<number>) => ({
      ...state,
      favoriteMovies: state.favoriteMovies.filter(
        (movie) => movie.id.attributes["im:id"] !== action.payload
      ),
    }),
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } =
  favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
