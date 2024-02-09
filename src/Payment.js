import React, { useContext, useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom/dist";
import { CartContext } from "./CartContext";

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [order, setOrder] = useState();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const cartContext = useContext(CartContext);

  useEffect(() => {
    if (location.state && location.state.order) {
      setOrder(location.state.order);
      fetchClientSecret(location.state.order);
    }
  }, [location.state]);

  const fetchClientSecret = async (order) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/create-payment-intent",
        { amount: order.amount }, // Adjust the amount as needed
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = response.data;
      if (!responseData.clientSecret) {
        throw new Error("Invalid response from server: clientSecret not found");
      }
      setClientSecret(responseData.clientSecret);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to create payment intent");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    if (!clientSecret) {
      console.error("Client secret not available");
      return;
    }
    handlePaymentMethod();
  };

  const handlePaymentMethod = async () => {
    setIsProcessing(true);
    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (error) {
        console.error("Payment failed:", error);
        setError("Payment failed. Please try again.");
      } else {
        console.log("Payment successful:", paymentIntent);
        try {
          const response = await axios.post(
            "http://localhost:8080/order/add",
            order
          );
          console.log(response);
          cartContext.checkout();
          navigate("/success", {
            state: { order: order, paymentDetails: paymentIntent },
          });
        } catch (error) {
          console.log(error);
        }
      }
      setIsProcessing(false);
    } catch (error) {
      console.error("Error:", error);
      setError("Payment failed. Please try again.");
      setIsProcessing(false);
    }
  };
  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#32325d",
      },
      invalid: {
        color: "#fa755a",
      },
    },
    hidePostalCode: true,
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {order && <h2 className="text-2xl mb-4">Order Amount: {order.amount}</h2>}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={cardElementOptions}
          className="border border-gray-300 p-3 rounded-lg mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Payment;
