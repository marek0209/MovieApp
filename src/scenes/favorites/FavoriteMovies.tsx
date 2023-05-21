import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import MovieListItem from "../../elements/components/movie-list-item/MovieListItem";
import { Movie } from "../../types";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../redux/features/favoriteMovies/favoriteMoviesSlice";
import LoadingSpinner from "../../elements/components/loading-spinner/LoadingSpinner";

function FavoriteMovies() {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(
    (state: RootState) => state.favoriteMovies.favoriteMovies
  );
  const loading = useSelector((state: RootState) => state.movies.loading);

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

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="container mx-auto px-4 ">
      <h2 className="text-4xl font-extrabold dark:text-white py-4">
        Top Movies
      </h2>
      {favoriteMovies.length !== 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      )}
      {favoriteMovies.length === 0 && (
        <div className="flex justify-center items-center flex-grow">
          <h3 className="text-3xl font-bold dark:text-white">
            Ups... Looks like you didn&apos;t like any of the movies
          </h3>
        </div>
      )}
    </main>
  );
}

export default FavoriteMovies;
