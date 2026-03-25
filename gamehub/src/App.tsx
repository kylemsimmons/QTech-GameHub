import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy-loaded pages (code splitting)
const CataloguePage = lazy(
  () => import("@/features/games/pages/CataloguePage")
);

const GameDetailPage = lazy(
  () => import("@/features/games/pages/GameDetailPage")
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen text-gray-500">
            Loading page...
          </div>
        }
      >
        <Routes>
          {/* Catalogue */}
          <Route path="/" element={<CataloguePage />} />

          {/* Game Detail */}
          <Route path="/games/:id" element={<GameDetailPage />} />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;