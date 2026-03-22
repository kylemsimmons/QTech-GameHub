export type GameType =
  | "roulette"
  | "crash"
  | "baccarat"
  | string;

export type Volatility = "low" | "medium" | "high";

export type Platform = "mobile" | "tablet" | "desktop";

export interface Game {
  id: string;
  title: string;
  description: string;
  studio: string;
  rating: number;
  thumbnail: string;
  type: GameType;
  categories: string[];
  rtp: number;
  volatility: Volatility;
  releaseDate: Date;
  features: string[];
  hasJackpot: boolean;
  demoUrl: string;
  providerGameId: string;
  supportedPlatforms: Platform[];
}