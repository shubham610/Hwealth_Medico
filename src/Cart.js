import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./cart.css";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [cartEmpty, setCartEmpty] = useState(true);
  const [showCart, setShowCart] = useState(true);
  const [fullAddress, setfullAddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [phoneno, setphoneno] = useState(0);
  const [pinCode, setpinCode] = useState(0);
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const address = {
    fullAddress: fullAddress,
    city: city,
    state: state,
    country: country,
    phoneno: phoneno,
    pinCode: pinCode,
  };

  const order = {
    amount: 0,
    user: cartContext?.user,
    address: address,
    orderedProducts: [],
  };
  const proceed = async () => {
    order.amount =
      cartContext.getTotalCartAmount() > 0
        ? (cartContext.getTotalCartAmount() * 5) / 100 +
          cartContext.getTotalCartAmount() +
          100
        : 0;
    for (const item in cartContext.cartItems) {
      if (cartContext.cartItems[item] > 0)
        order.orderedProducts.push({
          productId: item,
          quantity: cartContext.cartItems[item],
        });
    }
    navigate("/pay", { state: { order: order } });
  };

  const reset = () => {
    setfullAddress("");
    setcity("");
    setstate("");
    setcountry("");
    setphoneno(0);
    setpinCode(0);
    setShowCart(true);
  };

  const placeOrder = () => {
    if (!order.user) {
      navigate("/login");
    }
    order.amount =
      cartContext.getTotalCartAmount() > 0
        ? (cartContext.getTotalCartAmount() * 5) / 100 +
          cartContext.getTotalCartAmount() +
          100
        : 0;
    if (order.amount <= 0) {
      navigate("/");
    }
    for (const item in cartContext.cartItems) {
      if (cartContext.cartItems[item] > 0)
        order.orderedProducts.push({
          productId: item,
          quantity: cartContext.cartItems[item],
        });
    }
    setShowCart(false);
  };

  return (
    <>
      <Navbar />
      {showCart && (
        <div>
          <div class="flex flex-col md:flex-row">
            <div class="flex h-full md:w-2/3  bg-white shadow-xl">
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
                                        {(
                                          item.price.final_price *
                                          50 *
                                          cartContext.cartItems[item.id]
                                        ).toFixed(2)}
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

                  <p class="mt-6 text-base leading-5 text-gray-600">
                    ₹{cartContext.getTotalCartAmount()}
                  </p>
                </div>
                <div class="flex border-b py-1 justify-between max-w-xs">
                  <p class="mt-6 text-base text-gray-600">Shipping Estimate</p>

                  <p class="mt-6 text-base leading-5 text-gray-600">
                    {cartContext.getTotalCartAmount() > 0 ? "₹100" : "N/A"}
                  </p>
                </div>
                <div class="flex border-b py-1 justify-between max-w-xs">
                  <p class="mt-6 text-base text-gray-600">Tax Estimate</p>

                  <p class="mt-6 text-base leading-5 text-gray-600">
                    ₹{(cartContext.getTotalCartAmount() * 0.05).toFixed(2)}
                  </p>
                </div>
                <div class="flex text-lg font-medium py-1 justify-between max-w-xs">
                  <p class="mt-6 text-gray-900">Order Total</p>

                  <p class="mt-6 leading-5 text-gray-900">
                    {cartContext.getTotalCartAmount() > 0
                      ? (
                          cartContext.getTotalCartAmount() * 0.05 +
                          cartContext.getTotalCartAmount() +
                          100
                        ).toFixed(2)
                      : "N/A"}
                  </p>
                </div>
                <div class="mt-6">
                  <button
                    onClick={placeOrder}
                    class="flex items-center justify-center rounded-md border border-transparent bg-cyan-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-800"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!showCart && (
        <div className="w-[75%] m-auto">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class=" pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                for="PhoneNo"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone No.{" "}
              </label>
              <div class="mt-2">
                <input
                  id="PhoneNo"
                  onChange={(e) => setphoneno(e.target.value)}
                  name="PhoneNo"
                  type="number"
                  class=" pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="country"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div class="mt-2">
                <select
                  id="country"
                  onChange={(e) => setcountry(e.target.value)}
                  name="country"
                  autocomplete="country-name"
                  class="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Country</option>
                  <option>Bharat</option>
                  <option>United States</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  onChange={(e) => setfullAddress(e.target.value)}
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  onChange={(e) => setcity(e.target.value)}
                  name="city"
                  id="city"
                  autocomplete="address-level2"
                  class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="region"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  onChange={(e) => setstate(e.target.value)}
                  name="region"
                  id="region"
                  autocomplete="address-level1"
                  class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="postal-code"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  onChange={(e) => setpinCode(e.target.value)}
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
            <div class="mt-6 sm:col-span-2 flex items-center gap-x-6">
              <button
                onClick={reset}
                class="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={proceed}
                class="w-fit rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;
