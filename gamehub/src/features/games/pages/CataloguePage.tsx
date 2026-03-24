import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@shared/components/ui/Layout";
import { useGames } from "../hooks/useGames";
import { useFavorites } from "../hooks/useFavorites";
import GameCard from "../components/GameCard";
import GameCardSkeleton from "../components/GameCardSkeleton";

const CataloguePage = () => {
  const { games, loading, error } = useGames();
  const { isFavorite } = useFavorites();
  const [search, setSearch] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/games/${id}`);
  };

  const filteredGames = useMemo(() => {
    return games.filter((g) => {
      const matchesSearch =
        `${g.title} ${g.studio}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFavorites =
        !showFavoritesOnly || isFavorite(g.id);

      const matchesCategory =
        !selectedCategory || g.categories.includes(selectedCategory);

      return matchesSearch && matchesFavorites && matchesCategory;
    });
  }, [games, search, showFavoritesOnly, selectedCategory, isFavorite]);

  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Game Catalogue</h1>

        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <GameCardSkeleton key={i} />
            ))}
          </div>
        )}

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        {!loading && games.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            No games match your filters 🎯
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search games..."
            className="w-full p-2 border rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => setShowFavoritesOnly((prev) => !prev)}
            className={`px-3 py-2 rounded-lg border ${
              showFavoritesOnly ? "bg-black text-white" : ""
            }`}
          >
            ⭐ Favorites
          </button>

          <select
            value={selectedCategory ?? ""}
            onChange={(e) =>
              setSelectedCategory(e.target.value || null)
            }
            className="p-2 border rounded-lg"
          >
            <option value="">All Categories</option>
            <option value="classic">Classic</option>
            <option value="live">Live</option>
            <option value="new">New</option>
            <option value="featured">Featured</option>
            <option value="bonus buy">Bonus Buy</option>
          </select>
        </div>
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