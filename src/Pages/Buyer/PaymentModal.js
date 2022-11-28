import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const PaymentModal = ({ payment,setPayment,refetch }) => {
  
  return (
    <>
      <input type="checkbox" id="payment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="payment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold text-center mb-2">
            Complete your Payment for {payment.productName}
          </h3>
          <img className="rounded-lg" src={payment.picture} alt="" />
          <p className="mt-2 text-xl">
            Buyer Name: <strong>{payment.buyerName}</strong>
          </p>
          <p className="my-2 text-xl">
            Product Price: <strong>{payment.price}</strong>
            <div className="my-4">
            <Elements stripe={stripePromise}>
              <CheckOutForm 
              refetch={refetch}
              setPayment={setPayment}
              payment={payment}
              />
            </Elements>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;
