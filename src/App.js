import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDescription from "./ProductDescription";
import ScrollToTop from "./ScrollToTop";
import Cart from "./Cart";

const App = () => {
  const [cart, setCart] = useState() 
  return (
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="" element={<Home cart={cart} setCart={setCart}/>} />
        <Route path="/product" element={<ProductDescription cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
