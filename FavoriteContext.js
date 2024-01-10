// FavoriteContext.js

// Stap 1: Importeer de benodigde hooks en createContext van React
import React, { createContext, useContext, useState, useCallback } from 'react';

// Stap 2: Maak een context aan met createContext
const FavoriteContext = createContext();

// Stap 3: Definieer de FavoriteProvider-component met een state voor favoriete items
export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Stap 4: Voeg functies toe om items aan favorieten toe te voegen, te verwijderen en te controleren of een item favoriet is
  const addToFavorites = useCallback((item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  }, []);

  const removeFromFavorites = useCallback((itemId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== itemId));
  }, []);

  const isFavorite = useCallback((itemId) => {
    return favorites.some((item) => item.id === itemId);
  }, [favorites]);

  // Stap 5: Creëer de waarde (value) die wordt doorgegeven aan de contextprovider
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  // Stap 6: Gebruik FavoriteContext.Provider om de contextwaarde beschikbaar te maken voor de onderliggende componenten
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

// Stap 7: Definieer de useFavorites-hook om de contextwaarde te consumeren
export const useFavorites = () => {
  return useContext(FavoriteContext);
};
