import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRouter } from "./app/routes/AppRouter";
import { FavoritesProvider } from "@features/games/context/FavoritesContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FavoritesProvider>
      <AppRouter />
    </FavoritesProvider>
  </React.StrictMode>
);