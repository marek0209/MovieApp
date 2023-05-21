import React, { useEffect, useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/features/movies/movieSlice";
import { RootState } from "../../redux/store";
import MovieListItem from "../../elements/components/movie-list-item/MovieListItem";
import { Movie } from "../../types";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../redux/features/favoriteMovies/favoriteMoviesSlice";
import LoadingSpinner from "../../elements/components/loading-spinner/LoadingSpinner";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const favoriteMovies = useSelector(
    (state: RootState) => state.favoriteMovies.favoriteMovies
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchMovies() as any)
      .unwrap()
      .finally(() => {
        setLoading(false);
      });
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

  const cachedMovies = useMemo(() => movies, [movies]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="container mx-auto px-4 ">
      <h2 className="text-4xl font-extrabold dark:text-white py-4 ">
        Top Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-10">
        {cachedMovies.map((movie: Movie) => (
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
      </div>
    </main>
  );
}

export default MovieList;
