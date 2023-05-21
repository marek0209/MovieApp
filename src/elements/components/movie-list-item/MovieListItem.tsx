import React from "react";
import { Movie } from "../../../types";
import resizeImage from "../../../utils/imageResizer";
import ImageLoader from "../image-loader/ImageLoader";
import FavoriteButton from "../favorite-button/FavoriteButton";
import Button from "../button/Button";

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
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={handleFavoriteClick}
          />
          <Button href={movie.id.label}>Watch on Itunes</Button>
        </div>
      </div>
    </div>
  );
}
