import { useParams } from "react-router-dom";
import { Layout } from "@shared/components/ui/Layout";
import { useEffect, useState } from "react";
import { Game } from "../types/game";
import { gameService } from "../services/gameService";
import { useFavorites } from "../hooks/useFavorites";

const GameDetailPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchGame = async () => {
      if (!id) return;

      setLoading(true);
      const data = await gameService.getAllGames();
      const found = data.find((g) => g.id === id) || null;

      setGame(found);
      setLoading(false);
    };

    fetchGame();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  if (!game) {
    return (
      <Layout>
        <div>Game not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full max-h-80 object-cover rounded-xl"
        />

        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{game.title}</h1>
          <p className="text-gray-500">{game.studio}</p>

          <p className="text-sm">{game.description}</p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            ▶ Play
          </button>

          <button
            onClick={() => toggleFavorite(game.id)}
            className="px-4 py-2 border rounded-lg"
          >
            {isFavorite(game.id) ? "★ Unfavorite" : "☆ Favorite"}
          </button>
        </div>

        <div className="text-sm space-y-1">
          <p>⭐ Rating: {game.rating.toFixed(2)}</p>
          <p>🎰 RTP: {game.rtp.toFixed(2)}%</p>
          <p>⚡ Volatility: {game.volatility}</p>
        </div>
      </div>
    </Layout>
  );
};

export default GameDetailPage;