import { GameApi } from "../types/gameApi";
import { Game } from "../types/game";
import { mapGame } from "../mappers/gameMapper";

// mock dataset (feature-owned data layer)
import rawGames from "../data/rawGames.json";

export const gameService = {
  getAllGames: async (): Promise<Game[]> => {
    return new Promise((resolve) => {
      const mapped = (rawGames as GameApi[]).map(mapGame);
      setTimeout(() => resolve(mapped), 300);
    });
  },
};