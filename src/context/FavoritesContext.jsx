import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext(null);

const STORAGE_KEY = "hurra_favorites";

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  function toggleFavorite(id) {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  function isFavorite(id) {
    return favoriteIds.includes(id);
  }

  const value = { favoriteIds, toggleFavorite, isFavorite };

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
}
