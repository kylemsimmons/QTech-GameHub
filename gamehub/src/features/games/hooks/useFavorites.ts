import { useLocalStorage } from "@shared/hooks/useLocalStorage";

const STORAGE_KEY = "gamehub:favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage<string[]>(
    STORAGE_KEY,
    []
  );

  const isFavorite = (id: string) => {
    return favorites.includes(id);
  };

  const toggleFavorite = (id: string) => {
    if (isFavorite(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
};