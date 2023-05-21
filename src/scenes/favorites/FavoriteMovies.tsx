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
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Favorite videos</h2>
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
    </main>
  );
}

export default FavoriteMovies;
