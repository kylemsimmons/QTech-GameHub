import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@shared/components/ui/Layout";
import { useGames } from "../hooks/useGames";
import GameCard from "../components/GameCard";

const CataloguePage = () => {
  const { games, loading, error } = useGames();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/games/${id}`);
  };

  const filteredGames = useMemo(() => {
    return games.filter((g) =>
      `${g.title} ${g.studio}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [games, search]);

  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Game Catalogue</h1>

        {loading && 
          <div>
            <div className="animate-pulse text-gray-400">Loading games...</div>
          </div>
        }

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        {!loading && games.length === 0 && (
          <div>No games found</div>
        )}
        <input
          type="text"
          placeholder="Search games..."
          className="w-full p-2 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CataloguePage;