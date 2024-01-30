import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Seach from "./Seach";
import { CartContext } from "./CartContext";

const Home = () => {
  const [data, setdata] = useState("");
  const cartContext = useContext(CartContext);

  useEffect(() => {
    setdata(cartContext.medicines);
  }, []);

  if (!data) {
    return <div>Loading ....</div>;
  }

  return (
    <>
      <Navbar />
      <Seach data={data} />

      <div className="flex flex-wrap gap-6 justify-evenly">
        {data.map((e, i) => {
          return (
            <ProductCard
              data={e}
              key={i}
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
