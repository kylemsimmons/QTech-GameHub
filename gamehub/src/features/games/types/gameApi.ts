export interface GameApi {
  id: string;
  title: string;
  description: string;
  studio: string;
  rating: number;
  thumbnail: string;
  type: string;
  categories: string[];
  rtp: number;
  volatility: "low" | "medium" | "high" | string;
  release_date: string;
  features: string[];
  has_jackpot: boolean;
  demo_url: string;
  provider_game_id: string;
  supported_platforms: string[];
}