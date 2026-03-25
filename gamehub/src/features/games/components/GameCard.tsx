import React from "react";
import { Game } from "../types/game";
import { useFavorites } from "../hooks/useFavorites";

type Props = {
  game: Game;
  onClick?: (id: string) => void;
};

const GameCard = ({ game, onClick }: Props) => {
    const { isFavorite, toggleFavorite } = useFavorites();
  return (
    <div
      className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden"
      onClick={() => onClick?.(game.id)}
    >
      <div className="relative">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-40 object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(game.id);
          }}
          className="absolute top-2 right-2 bg-white/80 backdrop-blur px-2 py-1 rounded-md text-sm hover:bg-white transition"
        >
          {isFavorite(game.id) ? "★" : "☆"}
        </button>
      </div>

      <div className="p-3 space-y-1">
        <h3 className="font-semibold text-sm">{game.title}</h3>
        <p className="text-xs text-gray-500">{game.studio}</p>

        <div className="flex items-center justify-between text-xs">
          <span className="text-yellow-500">
            ⭐ {game.rating.toFixed(1)}
          </span>

          {game.hasJackpot && (
            <span className="text-green-600 font-medium">💰 Jackpot</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(GameCard);