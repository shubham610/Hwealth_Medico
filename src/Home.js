import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Seach from "./Seach";

const Home = ({ cart, setCart }) => {
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
    <>
      <Navbar />
      <Seach />

      <div className="flex flex-wrap gap-6 justify-evenly">
        {data.map((e, i) => {
          return (
            <ProductCard
              data={e}
              key={i}
              cart={cart}
              setCart={setCart}
              src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Home;
