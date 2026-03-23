import { useEffect, useState } from "react";
import { Game } from "../types/game";
import { gameService } from "../services/gameService";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchGames = async () => {
      try {
        setLoading(true);
        const data = await gameService.getAllGames();

        if (isMounted) {
          setGames(data);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load games");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGames();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    games,
    loading,
    error,
  };
};