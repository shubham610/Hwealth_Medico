import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartContext } from "./CartContext";

const ProductDescription = ({ cart }) => {
  const [incart, setincart] = useState(false);
  const { state } = useLocation();
  const cartContext = useContext(CartContext);
  const [disabled, setdisabled] = useState(false);
  if (state === null) {
    return <Navigate to="/" />;
  }
  const data = state.data;
  if (!data.in_stock && !disabled) {
    setdisabled(true);
  }
  if (cartContext.cartItems[data.id] > 0 && !disabled && !incart) {
    setdisabled(true);
    setincart(true);
    return;
  }
  const {
    name,
    manufacturer,
    form,
    price,
    in_stock,
    dosage,
    active_ingredients,
    side_effects,
  } = data;

  // Placeholder reviews
  const reviews = [
    {
      id: 1,
      author: "John Doe",
      rating: 4,
      comment: "Great product! Works well for me.",
    },
    {
      id: 2,
      author: "Jane Smith",
      rating: 5,
      comment: "Excellent quality and fast delivery.",
    },
    {
      id: 3,
      author: "Bob Johnson",
      rating: 3,
      comment: "Average product, but affordable.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 md:mt-24">
        <div className="bg-white m-8 p-8 rounded-md shadow-md flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <img
              src={state.src}
              alt={name}
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold mb-4">{name}</h1>

            <p className="text-gray-600 mb-2">
              Manufactured by{" "}
              <a
                href={manufacturer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:underline"
              >
                {manufacturer.name}
              </a>
            </p>

            <p className="text-lg text-gray-700 mb-2">{form}</p>
            <p className="text-2xl text-gray-700 mb-4">
              <span className="line-through text-gray-500">
                ₹{Math.round(price.mrp.toFixed(2) * 50)}
              </span>
              ₹{Math.round(price.final_price.toFixed(2) * 50)} (
              {price.discount_perc}% off)
            </p>

            <p
              className={`text-lg ${
                in_stock ? "text-green-600" : "text-red-600"
              } mb-4 font-semibold`}
            >
              {in_stock ? "In Stock" : "Out of Stock"}
            </p>

            {!incart && (
              <button
                disabled={disabled}
                onClick={() => {
                  cartContext.addToCart(data.id);
                  setdisabled(true);
                  setincart(true);
                }}
                className="disabled:opacity-50 bg-cyan-800 text-white px-6 py-3 rounded-md hover:bg-cyan-900 focus:outline-none focus:shadow-outline-cyan active:bg-cyan-800"
              >
                Add to Cart
              </button>
            )}

            {incart && (
              <button
                disabled={disabled}
                className="disabled:opacity-50 bg-red-800 text-white px-6 py-3 rounded-md hover:bg-red-900 focus:outline-none focus:shadow-outline-cyan active:bg-red-800"
              >
                Added to Cart
              </button>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="m-8">
          <h2 className="text-2xl font-semibold mb-4">Product Reviews</h2>
          <div className="flex gap-3 m-4 flex-wrap">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-md shadow-md mb-4"
              >
                <div className="flex-1 items-center mb-2">
                  <span className="text-gray-600 mr-2">Rating:</span>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, index) => (
                      <svg
                        key={index}
                        className="h-5 w-5 text-yellow-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 1L12.24 6.29L18 7.35L13.65 11.47L15.29 17L10 14.65L4.71 17L6.35 11.47L2 7.35L7.76 6.29L10 1z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
                <p className="text-gray-600 mt-2">{`- ${review.author}`}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information Sections */}
        <div className="m-8">
          <h2 className="text-2xl font-semibold mb-4">Product Information</h2>

          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold mb-2">Dosage Information</h3>
            <p className="text-gray-700">
              Take {dosage} as directed by your healthcare provider.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-4 mt-4">
            <h3 className="text-xl font-semibold mb-2">Active Ingredients</h3>
            <p className="text-gray-700">
              {active_ingredients || "No active ingredients listed."}
            </p>
          </div>

          <div className="border-t border-gray-300 pt-4 mt-4">
            <h3 className="text-xl font-semibold mb-2">
              Side Effects and Warnings
            </h3>
            <p className="text-gray-700">
              {side_effects || "No side effects listed."}
            </p>
          </div>

          <div className="border-t border-gray-300 pt-4 mt-4">
            <h3 className="text-xl font-semibold mb-2">
              Delivery and Availability
            </h3>
            <p className="text-gray-700">
              Available for delivery. Estimated delivery time: 5 to 7 days
            </p>
          </div>

          {/* Additional Information Section */}
          <div className="border-t border-gray-300 pt-4 mt-4">
            <h3 className="text-xl font-semibold mb-2">
              Additional Information
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod metus eu enim luctus, a cursus felis scelerisque.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDescription;
