import React, { createContext } from "react";

export const favoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const values = {};
  return (
    <favoriteContext.Provider value={values}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
