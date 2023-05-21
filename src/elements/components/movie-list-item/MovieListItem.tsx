import React from "react";
import { Movie } from "../../../types";
import resizeImage from "../../../utils/imageResizer";
import ImageLoader from "../image-loader/ImageLoader";
import Button from "../favorite-button/FavoriteButton";

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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <div className="rounded-t-lg">
        <ImageLoader src={resizedImg} alt={`Cover of ${movie.title.label}`} />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.title.label}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.category.attributes.label}
        </p>
        <div className="flex-grow"> </div>
        <div className="flex items-end">
          <Button isFavorite={isFavorite} onClick={handleFavoriteClick} />
          <a
            href={movie.id.label}
            className="ml-4 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Watch on Itunes
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
