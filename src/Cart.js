import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./cart.css";
import { CartContext } from "./CartContext";

const Cart = () => {
  const [cartEmpty, setCartEmpty] = useState(true);
  const cartContext = useContext(CartContext);

  return (
    <>
      <Navbar />
      <div>
        <div class="flex">
          <div class="flex h-full w-2/3  bg-white shadow-xl">
            <div class="flex-1 overflow-y-auto px-4 py-6 smx-6 nav-hidden">
              <div class="flex items-start justify-between">
                <h1
                  class="text-2xl font-medium text-gray-900"
                  id="slide-over-title"
                >
                  Shopping cart
                </h1>
                <div class="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Close panel</span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="mt-8 h-80">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200">
                    {cartContext.medicines &&
                      cartContext.medicines.map((item, index) => {
                        // {
                        // cartContext.cartItems[item.id] > 0 && (
                        if (cartContext.cartItems[item.id] > 0) {
                          cartEmpty && setCartEmpty(false);
                          return (
                            <li key={index} class="flex py-6">
                              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
                                  class="h-full w-full object-cover object-center"
                                ></img>
                              </div>

                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">{item.name}</a>
                                    </h3>
                                    <p class="ml-4">
                                      ₹
                                      {Math.round(
                                        item.price.final_price.toFixed(2) * 50*cartContext.cartItems[item.id]
                                      )}
                                    </p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">
                                    {item.form}
                                  </p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <div class="flex gap-6">
                                    <p class="text-gray-500">Qty </p>
                                    <div class="relative flex items-center">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          cartContext.removeFromCart(item.id)
                                        }
                                        id="decrement-button"
                                        data-input-counter-decrement="counter-input"
                                        class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus￼utline-none"
                                      >
                                        <svg
                                          class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 2"
                                        >
                                          <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 1h16"
                                          />
                                        </svg>
                                      </button>
                                      <input
                                        disabled
                                        type="text"
                                        id="counter-input"
                                        value={cartContext.cartItems[item.id]}
                                        data-input-counter
                                        class="flex-shrink-0 text-gray-900 border-0 bg-transparent text-md font-semibold focus￼utline-none focus:ring-0 max-w-[2.5rem] text-center"
                                        placeholder=""
                                        required
                                      ></input>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          cartContext.addToCart(item.id)
                                        }
                                        id="increment-button"
                                        data-input-counter-increment="counter-input"
                                        class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus￼utline-none"
                                      >
                                        <svg
                                          class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 18"
                                        >
                                          <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="flex">
                                    <button
                                      onClick={() =>
                                        cartContext.deleteItem(item.id)
                                      }
                                      type="button"
                                      class="font-medium text-cyan-600 hover:text-cyan-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        }
                        // );
                        // }
                      })}
                    {cartEmpty && (
                      <div class="flex justify-center items-center">
                        <img
                          className=" size-1/2"
                          src="https://www.adasglobal.com/img/empty-cart.png"
                        />
                      </div>
                    )}
                    {/* <!-- More products... --> */}
                  </ul>
                </div>
              </div>
            </div>

            {/* <div class="border-t border-gray-200 px-4 py-6 smx-6">
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>$262.00</p>
                                        </div>
                                        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div class="mt-6">
                                            <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700">Checkout</a>
                                        </div>
                                        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or
                                                <button type="button" class="font-medium text-cyan-600 hover:text-cyan-500">
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div> */}
          </div>
          <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div class="rounded-2xl bg-gray-50 py-10 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lgy-16 px-6">
              <p class="text-xl font-medium  text-gray-800">Order Summary</p>
              <div class="flex  border-b py-1 justify-between max-w-xs">
                <p class="mt-6 text-base text-gray-600">Subtotal</p>

                <p class="mt-6 text-base leading-5 text-gray-600">₹{cartContext.getTotalCartAmount()}</p>
              </div>
              <div class="flex border-b py-1 justify-between max-w-xs">
                <p class="mt-6 text-base text-gray-600">Shipping Estimate</p>

                <p class="mt-6 text-base leading-5 text-gray-600">₹100</p>
              </div>
              <div class="flex border-b py-1 justify-between max-w-xs">
                <p class="mt-6 text-base text-gray-600">Tax Estimate</p>

                <p class="mt-6 text-base leading-5 text-gray-600">₹{cartContext.getTotalCartAmount()*5/100}</p>
              </div>
              <div class="flex text-lg font-medium py-1 justify-between max-w-xs">
                <p class="mt-6 text-gray-900">Order Total</p>

                <p class="mt-6 leading-5 text-gray-900">{cartContext.getTotalCartAmount()*5/100+cartContext.getTotalCartAmount()+100}</p>
              </div>
              <div class="mt-6">
                <a
                  href="#"
                  class="flex items-center justify-center rounded-md border border-transparent bg-cyan-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-800"
                >
                  Proceed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
