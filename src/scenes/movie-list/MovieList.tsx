import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/features/movies/movieSlice";
import { Movie } from "../../types";
import MovieListItem from "../../elements/components/movie-list-item/MovieListItem";
import { RootState } from "../../redux/store";

export default function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies() as any);
  }, [dispatch]);

  return (
    <div className={["MovieList"].join(" ")}>
      <h1>Test Movie List</h1>

      {movies.map((movie: Movie) => (
        <MovieListItem
          key={movie.id.attributes["im:id"]}
          title={movie.title.label}
          summary={movie.summary.label}
          image={movie["im:image"][0].label}
        />
      ))}
    </div>
  );
}
