import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const CataloguePage = lazy(() => import("../../features/games/pages/CataloguePage"));
const GameDetailPage = lazy(() => import("../../features/games/pages/GameDetailPage"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Routes>
          <Route path="/" element={<CataloguePage />} />
          <Route path="/games/:id" element={<GameDetailPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};