import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MyOrders = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();
  const [data, setdata] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!cartContext.user) {
        cartContext.setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
        // return; // Exit early if cartContext.user is not available yet
      }
      try {
        const data = await axios.get(
          `http://localhost:8080/order/user/${cartContext.user?.userId}`
        );
        setdata(data.data);
      } catch (error) {
        setdata([]);
      }
    };
    fetchData();
  }, [cartContext]);

  if (!data) {
    return <div>Loading ....</div>;
  }
  if (data && data.length == 0) {
    return <div>No Products to display......</div>;
  }

  return (
    <>
      <Navbar></Navbar>

      {data.map((item, id) => {
        let innerorderDetails = item.orderedProducts.map((orderedProduct) => {
          const productDetail = cartContext.medicines.find(
            (item) => item.id === orderedProduct.productId
          );
          return (
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:pace-x-6 xl:pace-x-8 w-full">
              <div className="pb-4 md:b-8 w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
                  alt="dress"
                />
                <img
                  className="w-full md:hidden"
                  src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
                  alt="dress"
                />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:pace-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">
                    {productDetail.name}
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm  leading-none text-gray-800">
                      <span className=" text-gray-700">Form: </span>{" "}
                      {productDetail.form}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base  xl:text-lg leading-6">
                    Rs.{(productDetail.price.final_price * 50).toFixed(2)}{" "}
                    <span className="text-red-300 line-through">
                      {(productDetail.price.mrp * 50).toFixed(2)}
                    </span>
                  </p>
                  <p className="text-base  xl:text-lg leading-6 text-gray-800">
                    {orderedProduct.quantity}
                  </p>
                  <p className="text-base  xl:text-lg font-semibold leading-6 text-gray-800">
                    Rs.
                    {(
                      productDetail.price.final_price *
                      50 *
                      orderedProduct.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          );
        });
        return (
          <div className="py-14 px-4 md:x-6 2xl:x-20 2xl:container 2xl:mx-auto">
            {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
            <div className="flex justify-start item-start space-y-2 flex-col">
              <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Order #{10021 + item.id}
              </h1>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:pace-x-8 space-y-4 md:pace-y-6 xl:pace-y-0">
              <div className="flex flex-col justify-start items-start w-full space-y-4 md:pace-y-6 xl:pace-y-8">
                {/* //Display product here only */}
                {innerorderDetails}
              </div>
            </div>
            <div className="flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:pace-y-0 md:pace-x-6 xl:pace-x-8">
              <div className="flex flex-col px-4 py-6 md:-6 xl:-8 w-full bg-gray-50 space-y-6">
                <h3 className="text-xl  font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between w-full">
                    <p className="text-base  leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base  leading-4 text-gray-600">
                      Rs. {((item.amount - 100) / 1.05).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base  leading-4 text-gray-800">
                      GST{" "}
                      <span className="bg-gray-200 rounded-md p-1 text-xs font-medium   leading-3 text-gray-800">
                        5%
                      </span>
                    </p>
                    <p className="text-base  leading-4 text-gray-600">
                      Rs. {(((item.amount - 100) / 1.05) * 0.05).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base  leading-4 text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base  leading-4 text-gray-600">
                      Rs. 100
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base  font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base  font-semibold leading-4 text-gray-600">
                    Rs. {item.amount}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-4 py-6 md:-6 xl:-8 w-full bg-gray-50 space-y-6">
                <h3 className="text-xl  font-semibold leading-5 text-gray-800">
                  Shipping
                </h3>
                <div className="flex justify-between items-start w-full">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="w-8 h-8">
                      <img
                        className="w-full h-full"
                        alt="logo"
                        src="https://i.ibb.co/L8KSdNQ/image-3.png"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-center">
                      <p className="text-lg leading-6  font-semibold text-gray-800">
                        Delhivery
                        <br />
                        <span className="font-normal">
                          Delivery within 3 to 5 days
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Footer></Footer>
    </>
  );
};

export default MyOrders;
