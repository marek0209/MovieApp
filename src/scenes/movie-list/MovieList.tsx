import React, { useEffect, useState } from "react";
import fetchMovieList from "../../services/movieApi";
import { Movie } from "../../types";
import MovieListItem from "../../elements/components/movie-list-item/MovieListItem";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieList = await fetchMovieList();
        setMovies(movieList);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchMovies();
  }, []);

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
