import { render, screen } from "@testing-library/react";
import GameCard from "./GameCard";
import { Game } from "../types/game";

const mockGame: Game = {
  id: "1",
  title: "Test Game",
  description: "desc",
  studio: "Test Studio",
  rating: 4.5,
  thumbnail: "img",
  type: "roulette",
  categories: ["classic"],
  rtp: 95,
  volatility: "medium",
  releaseDate: new Date(),
  features: [],
  hasJackpot: true,
  demoUrl: "",
  providerGameId: "",
  supportedPlatforms: ["mobile"],
};

test("renders game title", () => {
  render(<GameCard game={mockGame} />);
  expect(screen.getByText("Test Game")).toBeInTheDocument();
});