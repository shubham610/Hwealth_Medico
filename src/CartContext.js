import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const getDefaultCart = (data) => {
  let cart = {};

  for (let i = 0; i < data.length; i++) {
    cart[data[i].id] = 0;
  }
  return cart;
};

export const CartContextProvider = (props) => {
  const medicines = props.data;

  const [cartItems, setCartItems] = useState(getDefaultCart(props.data));
  const [user, setUser] = useState();

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) { 
        let itemInfo = medicines.find((product) => product.id == item);
        totalAmount += Math.round(
          cartItems[item] * itemInfo.price.final_price.toFixed(2) * 50
        );
      }
    }

    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const deleteItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const setLoggedInUser = (user) => {
    setUser(user);
  };

  const contextValue = {
    medicines,

    cartItems,
    user,
    setLoggedInUser,

    addToCart,

    deleteItem,

    removeFromCart,

    getTotalCartAmount,

    checkout,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
