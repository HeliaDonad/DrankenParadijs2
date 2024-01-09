import React, { createContext, useContext, useState } from 'react';

// Create a context for the product cart
const ProductCartContext = createContext();

// Create a provider component
export const ProductCartProvider = ({ children }) => {
  const [productCartItems, setProductCartItems] = useState([]);

  // Function to add a product item to the product cart
  const addProductToCart = (product) => {
    setProductCartItems((prevItems) => [...prevItems, product]);
  };

  // Function to get the product cart items
  const getProductCartItems = () => {
    return productCartItems;
  };

  // Value to be provided to the context
  const value = {
    addProductToCart,
    getProductCartItems,
  };

  // Wrap the children with the context provider
  return (
    <ProductCartContext.Provider value={value}>
      {children}
    </ProductCartContext.Provider>
  );
};

// Custom hook to use the product cart context
export const useProductCart = () => {
  const context = useContext(ProductCartContext);

  if (!context) {
    throw new Error('useProductCart must be used within a ProductCartProvider');
  }

  return context;
};
