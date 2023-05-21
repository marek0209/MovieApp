import React from "react";
import { Movie } from "../../../types";
import resizeImage from "../../../utils/imageResizer";
import ImageLoader from "../image-loader/ImageLoader";

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

  const resizedImg = resizeImage(movie["im:image"][0].label, "600x600");

  return (
    <div className="bg-gray-200 p-4">
      <ImageLoader src={resizedImg} alt={`Cover of ${movie.title.label}`} />
      <h3 className="text-lg font-semibold mt-2">{movie.title.label}</h3>
      <p className="text-gray-700">{movie.category.attributes.label}</p>
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
          fill={isFavorite ? "red" : "grey"}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          />
        </svg>
      </button>
    </div>
  );
}
