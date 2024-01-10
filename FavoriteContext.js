// FavoriteContext.js
import React, { createContext, useContext, useState, useCallback } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = useCallback((item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  }, []);

  const removeFromFavorites = useCallback((itemId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== itemId));
  }, []);

  const isFavorite = useCallback((itemId) => {
    return favorites.some((item) => item.id === itemId);
  }, [favorites]);

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoriteContext);
};
