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
    const medicines=props.data;

 const [cartItems, setCartItems] = useState(getDefaultCart(props.data));

 const getTotalCartAmount = () => {

  let totalAmount = 0;

  for (const item in cartItems) {

   if (cartItems[item] > 0) {

    let itemInfo = props.data.find((product) => product.id === item);

    totalAmount += cartItems[item] * itemInfo.price;

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

 const updateCartItemCount = (newAmount, itemId) => {

  setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));

 };

 const checkout = () => {

  setCartItems(getDefaultCart());

 };

 const contextValue = {
    medicines,

  cartItems,

  addToCart,

  updateCartItemCount,

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

