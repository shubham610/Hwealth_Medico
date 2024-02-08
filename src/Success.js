import React from "react";
import { useLocation } from "react-router-dom/dist";

const Success = () => {
  const location = useLocation();
  const paymentDetails = location.state.paymentDetails;
  const order = location.state.order;
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Payment Confirmation
        </h1>

        <div className="confirmation-details">
          <p>
            <strong>Transaction ID:</strong> {paymentDetails.id}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(paymentDetails.created * 1000).toLocaleDateString()}
          </p>
          <p>
            <strong>Amount:</strong> {order.amount}
          </p>
          <p>
            <strong>Status:</strong> {paymentDetails.status}
          </p>
          <p>
            <strong>Payment Method:</strong>{" "}
            {paymentDetails.payment_method_types[0]}
          </p>
        </div>

        <div className="text-center mt-6">
          <a href="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Back to Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Success;
