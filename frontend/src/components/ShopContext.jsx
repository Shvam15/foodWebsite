import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import { Toaster, toast } from "react-hot-toast";
// import { food_list as food_list_backend } from "../assets/backend_assets/assets";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_API_URL;
  const [cartItems, setCartItems] = useState({});
  const [total, setTotal] = useState(0)

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      toast.success("Added To Cart Successfully!");
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      toast.success("Added To Cart Successfully!");
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    toast.error("Removed Successfully!");
  };


  useEffect(() => {
    console.log(cartItems);
  }, [cartItems, setCartItems]);

  const contextValue = {
    food_list,
    backendUrl,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    // cartTotal,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
