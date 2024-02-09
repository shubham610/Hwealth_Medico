import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext'
import { useNavigate } from 'react-router';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

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
                const data = await axios.get(`http://localhost:8080/order/user/${cartContext.user?.userId}`);
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
    console.log(data);
    console.log(cartContext.medicines);




    return (
        <>
            <Navbar></Navbar>









            {
                data.map((item, id) => {
                    let innerorderDetails = item.orderedProducts.map(orderedProduct => {
                        const productDetail = cartContext.medicines.find(item => item.id === orderedProduct.productId);
                        console.log("productdetail", productDetail)
                        return (
                            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md￼pace-x-6 xl￼pace-x-8 w-full">
                                <div className="pb-4 md￼b-8 w-full md:w-40">
                                    <img className="w-full hidden md:block" src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg" alt="dress" />
                                    <img className="w-full md:hidden" src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg" alt="dress" />
                                </div>
                                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md￼pace-y-0">
                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{productDetail.name}</h3>
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-700">Form: </span> {productDetail.form}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-start w-full">
                                        <p className="text-base dark:text-white xl:text-lg leading-6">Rs.{Math.round(productDetail.price.final_price * 50)} <span className="text-red-300 line-through">{Math.round(productDetail.price.mrp * 50)}</span></p>
                                        <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{orderedProduct.quantity}</p>
                                        <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">Rs.{Math.round(productDetail.price.final_price * 50)*orderedProduct.quantity}</p>
                                    </div>
                                </div>
                            </div>


                        );
                    });
                    return (
                        <div className="py-14 px-4 md￼x-6 2xl￼x-20 2xl:container 2xl:mx-auto">
                            {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
                            <div className="flex justify-start item-start space-y-2 flex-col">
                                <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{10021+item.id}</h1>
                            </div>
                            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl￼pace-x-8 space-y-4 md￼pace-y-6 xl￼pace-y-0">
                                <div className="flex flex-col justify-start items-start w-full space-y-4 md￼pace-y-6 xl￼pace-y-8">
                                    {/* //Display product here only */}
                                    {innerorderDetails}


                                </div>

                            </div>
                            <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md￼pace-y-0 md￼pace-x-6 xl￼pace-x-8">
        <div className="flex flex-col px-4 py-6 md￼-6 xl￼-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$56.00</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Discount <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span></p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">-$28.00 (50%)</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$8.00</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
            <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">$36.00</p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 py-6 md￼-6 xl￼-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
          <div className="flex justify-between items-start w-full">
            <div className="flex justify-center items-center space-x-4">
              <div className="w-8 h-8">
                <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
              </div>
              <div className="flex flex-col justify-start items-center">
                <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">DPD Delivery<br /><span className="font-normal">Delivery with 24 Hours</span></p>
              </div>
            </div>
            <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">$8.00</p>
          </div>
          
        </div>
      </div>


                        </div>
                    )
                })
            }

            <Footer></Footer>
        </>


    )
}

export default MyOrders