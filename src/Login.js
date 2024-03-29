import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./CartContext";
import bcrypt from "bcryptjs";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const salt = "$2a$10$vI8aWBnW3fIDaWBnW3nW32";
  const [error, seterror] = useState("");

  useEffect(() => {
    cartContext &&
      cartContext.setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
    if (cartContext && cartContext.user) {
      navigate("/");
    }
  });

  let formData = {
    userName: userName,
    userPassword: userPassword,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sec = bcrypt.hashSync(userPassword, salt);
    formData.userPassword = sec;
    try {
      const user = await axios.post(
        "http://localhost:8080/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      cartContext.setLoggedInUser(user.data);
      sessionStorage.setItem("user", JSON.stringify(user.data));
      navigate("/");
    } catch (error) {
      seterror(error.response.data);
    }
  };

  return (
    <>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lgx-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm cursor-pointer">
          <img
            class="mx-auto  w-3/4"
            src="./png/logo-no-background.png"
            alt="HWealth"
          ></img>
          <h2 class="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>
        <span class="mx-auto text-red-700 mt-4 font-semibold text-lg">
          {error}
        </span>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label
                for="userName"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                UserName
              </label>
              <div class="mt-2">
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  required
                  onChange={(e) => setUserName(e.target.value)}
                  class="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* <!-- <div class="text-sm">
                        <a href="#" class="font-semibold text-cyan-600 hover:text-cyan-500 color-dark">Forgot password?</a>
                    </div> --> */}
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                  class="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visibleutline focus-visible outline-2 focus-visibleutline-offset-2 focus-visible outline-cyan-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link
              to="/signup"
              class=" leading-6 text-cyan-700 hover:text-cyan-800 cursor-pointer color-dark"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
