🎮 GameHub Mini – ReactJS Developer Challenge

A mini frontend app built to showcase React, modern state management, performance optimization, and UX-first design. My goal was to focus on: maintainability, reusability, performance, and user experience.

🚀 Live Demo & Data
Data: /public/games.json

Runs locally with npm run dev
Tested with Vitest + React Testing Library
🗂 Architecture & Design Choices

1. Feature-first folder structure – Keeps related code together:

src/
├─ features/games/
│  ├─ components/   # GameCard, GameCardSkeleton
│  ├─ context/      # FavoritesContext (global state)
│  ├─ hooks/        # useGames, reusable logic
│  ├─ pages/        # CataloguePage, GameDetailPage
│  └─ types/        # TypeScript models
├─ shared/          # Layout & reusable UI components
└─ app/routes/      # AppRouter

Why: Scales easily, promotes separation of concerns, and keeps state, hooks, and UI components organized.

🎯 Core Features
Game Catalogue Page (/)
Search & Filter: Filter by title, studio, category, or favorites.
Responsive Grid: 1–3 cards per row depending on screen size.
Pagination: Avoids rendering thousands of records at once for fast load times.
Favorites: Toggle games as favorites; state updates instantly via global context.

Implementation Notes:

useMemo + React.memo used to optimize re-renders.
Favorites stored in localStorage for persistence.
Clean, responsive UI built with Tailwind CSS.
Game Detail Page (/games/:id)
Full game details (title, description, studio, rating, jackpot status).
Favorite / Unfavorite button updates reactively across the app.
Play button (placeholder).

Why: Reusing GameCard and context ensures DRY code and consistent UX.

⚡ Performance & UX Decisions
Pagination & lazy rendering: Handles thousands of records efficiently.
Global Favorites Context: Guarantees immediate UI updates across pages.
Memoization: React.memo + useMemo reduces unnecessary re-renders.
Responsive & mobile-first layout: Improves accessibility and readability.

🧩 Bonus / Advanced Features
Custom Hook (useFavorites): Encapsulated, testable, reusable logic.
Testing: Component tests with Vitest + React Testing Library to ensure core flows (e.g., favoriting, filtering) work.
Lazy Loading / Code Splitting: Improves performance on route navigation.
Future-ready: Structured to easily add Storybook, i18n, or Web Components.

🛠 Technologies Used
React 18 + TypeScript: Strong typing and scalable components.
Tailwind CSS: Fast, responsive styling without bloated CSS.
React Router v6: Declarative routing.
LocalStorage & Context API: Efficient, persistent state management.
Vitest + React Testing Library: Ensures correctness and prevents regressions.

⚡ Future Improvements
Infinite scroll for smoother UX.
Lazy-loaded images for performance.
Storybook for reusable component library.
i18n support for multi-language.
Web Components to demonstrate platform-agnostic UI reuse.

💡 Why This Approach
I structured the project to demonstrate senior-level thinking:

State management: Favorites context avoids prop drilling and ensures instant updates.
Performance: Pagination, memoization, and lazy loading optimize large data sets.
Reusability: Components and hooks are generic and testable.
UX-first: Responsive design, clear filters, and feedback mechanisms improve user experience.

Every choice — from architecture to pagination to context — is intentional, showing my ability to think beyond the minimum requirements.

📦 Run Locally

# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm run test
