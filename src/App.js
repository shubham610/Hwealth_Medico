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
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from "./Success";
import MyOrders from "./MyOrders";

const stripePromise = loadStripe(
  "pk_test_51NTUMQSCuUXEi5M2IorbEXUsbJEizJLoSr3CK0R10mXnrgZXDwQPj39az845kW2gee5KEGOGC6BamMbUjkf864IK00xsbPEhm2"
);

const App = () => {
  const [cart, setCart] = useState();

  const [data, setdata] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("http://localhost:8080/products/all");
        setdata(data.data);
      } catch (error) {
        setdata([]);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading ....</div>;
  }
  if (data && data.length == 0) {
    return <div>No Products to display......</div>;
  }

  return (
    <BrowserRouter>
      <CartContextProvider data={data}>
        <ScrollToTop>
          <Routes>
            <Route path="" element={<Home cart={cart} setCart={setCart} />} />
            <Route
              path="/product"
              element={<ProductDescription cart={cart} setCart={setCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="" element={<Home />} />
            <Route path="/product" element={<ProductDescription />} />
            <Route path="/labtest" element={<Labtest />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/success" element={<Success />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route
              path="/pay"
              element={
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              }
            />
          </Routes>
        </ScrollToTop>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
