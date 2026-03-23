import { Game } from "../types/game";

type Props = {
  game: Game;
  onClick?: (id: string) => void;
};

const GameCard = ({ game, onClick }: Props) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden"
      onClick={() => onClick?.(game.id)}
    >
      <img
        src={game.thumbnail}
        alt={game.title}
        className="w-full h-40 object-cover"
      />

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

export default GameCard;