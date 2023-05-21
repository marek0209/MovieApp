import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../../types";

interface FavoriteMoviesState {
  favorites: Movie[];
}

const initialState: FavoriteMoviesState = {
  favorites: [],
};

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<Movie>) => {
      const movie = action.payload;
      return {
        ...state,
        favorites: [...state.favorites, movie],
      };
    },
    removeFavoriteMovie: (state, action: PayloadAction<number>) => {
      const movieId = action.payload;
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id.attributes["im:id"] !== movieId
        ),
      };
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } =
  favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
