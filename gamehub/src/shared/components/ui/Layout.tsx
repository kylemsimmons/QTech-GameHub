import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-4 shadow-sm bg-white font-semibold">
        🎮 GameHub
      </header>
      <main className="p-4 max-w-6xl mx-auto">{children}</main>
    </div>
  );
};