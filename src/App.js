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
import { CartContextProvider } from "./CartContext";
import Labtest from "./Labtest";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import AboutUs from "./Aboutus";

const App = () => {
  const [cart, setCart] = useState() 

  const [data, setdata] = useState("");

useEffect(() => {
  const fetchData = async () => {
    const data = await axios.get("http://localhost:8080/products/all");
    setdata(data.data);
  };
  fetchData();
}, []);

if (!data) {
  return <div>Loading ....</div>;
}

console.log(data);

  return (
    <BrowserRouter>
    <CartContextProvider data={data}>
    <ScrollToTop>
      <Routes>
        <Route path="" element={<Home cart={cart} setCart={setCart}/>} />
        <Route path="/product" element={<ProductDescription cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path="" element={<Home />} />
        <Route path="/product" element={<ProductDescription />} />
        <Route path="/labtest" element={<Labtest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      </ScrollToTop>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
