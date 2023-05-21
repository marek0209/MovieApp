import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/features/movies/movieSlice";
import { RootState } from "../../redux/store";
import MovieListItem from "../../elements/components/movie-list-item/MovieListItem";
import { Movie } from "../../types";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../redux/features/favoriteMovies/favoriteMoviesSlice";

export default function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const favoriteMovies = useSelector(
    (state: RootState) => state.favoriteMovies.favoriteMovies
  );

  useEffect(() => {
    dispatch(fetchMovies() as any);
  }, [dispatch]);

  const addToFavorites = useCallback(
    (movie: Movie) => {
      dispatch(addFavoriteMovie(movie));
    },
    [dispatch]
  );

  const removeFromFavorites = useCallback(
    (movieId: number) => {
      dispatch(removeFavoriteMovie(movieId));
    },
    [dispatch]
  );

  return (
    <div className={["MovieList"].join(" ")}>
      <h1>Test Movie List</h1>

      {movies.map((movie: Movie) => (
        <MovieListItem
          key={movie.id.attributes["im:id"]}
          movie={movie}
          isFavorite={favoriteMovies.some(
            (favMovie) =>
              favMovie.id.attributes["im:id"] === movie.id.attributes["im:id"]
          )}
          onAddFavorite={addToFavorites}
          onRemoveFavorite={removeFromFavorites}
        />
      ))}

      <h2>Favorite Movies</h2>

      {favoriteMovies.map((movie: Movie) => (
        <MovieListItem
          key={movie.id.attributes["im:id"]}
          movie={movie}
          isFavorite
          onAddFavorite={addToFavorites}
          onRemoveFavorite={removeFromFavorites}
        />
      ))}
    </div>
  );
}
