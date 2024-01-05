// cartUtils.js
import { useState, createContext, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = () => {
    setCartItemsCount(cartItemsCount + 1);
  };

  const value = {
    cartItemsCount,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
