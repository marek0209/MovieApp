import React from "react";
import "./FavoriteButton.css";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

function FavoriteButton(props: FavoriteButtonProps) {
  const { isFavorite, onClick } = props;

  return (
    <button
      className={[
        "button",
        "flex-none",
        "flex",
        "items-center",
        "justify-center",
        "w-9",
        "h-9",
        "rounded-md",
        "text-slate-300",
        "bg-slate-700",
      ].join(" ")}
      type="button"
      aria-label="Like"
      onClick={onClick}
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
  );
}

export default FavoriteButton;
