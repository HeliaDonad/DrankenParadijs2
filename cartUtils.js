// cartUtils.js

// Stap 1: Importeer de benodigde hooks en createContext van React
import { useState, createContext, useContext } from 'react';

// Stap 2: Maak een context aan met createContext
const CartContext = createContext();

// Stap 3: Definieer de CartProvider-component met een state voor het aantal items in het winkelmandje
export const CartProvider = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  // Stap 4: Voeg een functie toe om items aan het winkelmandje toe te voegen
  const addToCart = () => {
    setCartItemsCount(cartItemsCount + 1);
  };

  // Stap 5: Creëer de waarde (value) die wordt doorgegeven aan de contextprovider
  const value = {
    cartItemsCount,
    addToCart,
  };

  // Stap 6: Gebruik CartContext.Provider om de contextwaarde beschikbaar te maken voor de onderliggende componenten
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Stap 7: Definieer de useCart-hook om de contextwaarde te consumeren
export const useCart = () => {
  const context = useContext(CartContext);

  // Stap 8: Controleer of de hook wordt gebruikt binnen een CartProvider
  if (!context) {
    throw new Error('useCart moet binnen een CartProvider worden gebruikt');
  }

  // Stap 9: Geef de contextwaarde terug
  return context;
};
