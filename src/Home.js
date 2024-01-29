import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = ({cart,setCart}) => {
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
      <div className="">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative m-8 mt-24 md:m-24">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="p-4 md:w-10/12 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              class="absolute text-white ml-2 lg:ml-4  bg-cyan-700 md:w-32 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm p-4 "
            >
              Search
            </button>
          </div>
        </form>
      </div>
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
      <Footer/>
    </>
  );
};

export default Home;
