import React from "react";
import { Movie } from "../../../types";

interface MovieListItemProps {
  movie: Movie;
  isFavorite: boolean;
  onAddFavorite: (movie: Movie) => void;
  onRemoveFavorite: (movieId: number) => void;
}

export default function MovieListItem(props: MovieListItemProps) {
  const { movie, isFavorite, onAddFavorite, onRemoveFavorite } = props;

  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFavorite(movie.id.attributes["im:id"]);
    } else {
      onAddFavorite(movie);
    }
  };

  return (
    <article className={["mt-6", "mb-12", "shadow-xl", "h-max"].join(" ")}>
      <div className={["flex", "font-sans"].join(" ")}>
        <div className="flex-none">
          <img
            className={["h-24", "w-16", "object-cover", "rounded-md"].join(" ")}
            src={movie["im:image"][2].label}
            alt={movie["im:name"].label}
          />
        </div>
        <div className={["flex-auto", "ml-4"].join(" ")}>
          <h2 className={["text-lg", "font-semibold"].join(" ")}>
            {movie["im:name"].label}
          </h2>
          <p className={["text-slate-500", "mb-4"].join(" ")}>
            {movie["im:artist"].label}
          </p>
          <p className={["text-slate-500", "mb-4"].join(" ")}>
            {movie["im:releaseDate"].attributes.label}
          </p>
          <div className="flex items-center">
            <button
              className={[
                "flex-none",
                "flex",
                "items-center",
                "justify-center",
                "w-9",
                "h-9",
                "rounded-md",
                "text-slate-300",
                "border",
                "border-slate-200",
              ].join(" ")}
              type="button"
              aria-label="Like"
              onClick={handleFavoriteClick}
            >
              <svg
                width="20"
                height="20"
                fill={isFavorite ? "black" : "red"}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
            <span className="ml-2">
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
