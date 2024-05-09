// WishContext.js
import { createContext, useContext, useState } from "react";

const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [wishItems, setWishItems] = useState([]);

  const addToWishlist = (item) => {
    setWishItems([...wishItems, item]);
  };

  const removeFromWishlist = (item) => {
    setWishItems(wishItems.filter((apple) => apple !== item));
  };

  return (
    <WishContext.Provider
      value={{ wishItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishContext);
};
