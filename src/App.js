import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDescription from "./ProductDescription";
import Labtest from "./Labtest";
import ScrollToTop from "./ScrollToTop";
import Cart from "./Cart";
import { CartContextProvider } from "./CartContext";

const App = () => {
  const [cart, setCart] = useState() 

  const [data, setdata] = useState("");

useEffect(() => {
  const fetchData = async () => {
    const data = await axios.get("http://localhost:3030/data");
    setdata(data.data);
  };
  fetchData();
}, []);

if (!data) {
  console.log("Loading");
  return <div>Loading ....</div>;
}



  return (
    <BrowserRouter>
    <CartContextProvider data={data}>
    <ScrollToTop>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/product" element={<ProductDescription />} />
      </Routes>
      </ScrollToTop>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
