import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import MovieListItem from "../../elements/components/movie-list-item/MovieListItem";
import { Movie } from "../../types";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../redux/features/favoriteMovies/favoriteMoviesSlice";

function FavoriteMovies() {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(
    (state: RootState) => state.favoriteMovies.favoriteMovies
  );

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
    <div>
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

export default FavoriteMovies;
