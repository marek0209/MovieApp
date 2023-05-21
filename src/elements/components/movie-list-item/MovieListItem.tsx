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
    <div className="bg-gray-200 p-4">
      <ImageLoader src={resizedImg} alt={`Cover of ${movie.title.label}`} />
      <h3 className="text-lg font-semibold mt-2">{movie.title.label}</h3>
      <p className="text-gray-700">{movie.category.attributes.label}</p>
      <Button isFavorite={isFavorite} onClick={handleFavoriteClick} />
    </div>
  );
}
