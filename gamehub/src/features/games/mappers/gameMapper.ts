import { GameApi } from "../types/gameApi";
import { Game } from "../types/game";

export const mapGame = (api: GameApi): Game => {
  return {
    id: api.id,
    title: api.title,
    description: api.description,
    studio: api.studio,
    rating: api.rating,
    thumbnail: api.thumbnail,
    type: api.type,
    categories: api.categories,
    rtp: api.rtp,
    volatility: api.volatility as Game["volatility"],
    releaseDate: new Date(api.release_date),
    features: api.features,
    hasJackpot: api.has_jackpot,
    demoUrl: api.demo_url,
    providerGameId: api.provider_game_id,
    supportedPlatforms: api.supported_platforms as Game["supportedPlatforms"],
  };
};