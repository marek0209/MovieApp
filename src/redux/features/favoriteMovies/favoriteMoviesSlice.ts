import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../../types";

interface FavoriteMoviesState {
  favoriteMovies: Movie[];
}

const loadFavoriteMoviesFromLocalStorage = (): Movie[] => {
  const storedMovies = localStorage.getItem("favoriteMovies");
  if (storedMovies) {
    return JSON.parse(storedMovies);
  }
  return [];
};

const saveFavoriteMoviesToLocalStorage = (movies: Movie[]): void => {
  localStorage.setItem("favoriteMovies", JSON.stringify(movies));
};

const initialState: FavoriteMoviesState = {
  favoriteMovies: loadFavoriteMoviesFromLocalStorage(),
};

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<Movie>) => {
      const updatedMovies = [...state.favoriteMovies, action.payload];
      saveFavoriteMoviesToLocalStorage(updatedMovies);
      return {
        ...state,
        favoriteMovies: updatedMovies,
      };
    },
    removeFavoriteMovie: (state, action: PayloadAction<number>) => {
      const updatedMovies = state.favoriteMovies.filter(
        (movie) => movie.id.attributes["im:id"] !== action.payload
      );
      saveFavoriteMoviesToLocalStorage(updatedMovies);
      return {
        ...state,
        favoriteMovies: updatedMovies,
      };
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } =
  favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
