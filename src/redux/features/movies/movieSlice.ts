import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchMovieList from "../../../services/moviesApi";
import { Movie } from "../../../types";

interface MoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const movieList = await fetchMovieList();
    return movieList;
  } catch (error) {
    throw new Error("Error fetching movie list");
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchMovies.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        movies: action.payload,
      }))
      .addCase(fetchMovies.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message || "Error fetching movie list",
      }));
  },
});

export default moviesSlice.reducer;
