import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";

const Card = ({ singlecat, setSelectedCart }) => {
  const {
    picture,
    name,
    postedOn,
    resalePrice,
    sallerName,
    useingFrom,
    catName,
    isVerified,
    priginalPrice,
    location,
    originalPrice,
    reportState,
    sellerState,
  } = singlecat;

  const repoDoc = {
    productReportState: reportState,
  };

  const handleReport = (id) => {
    fetch(`http://localhost:5000/report/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(repoDoc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("You have reported Successfully");
        }
      });
  };
  
  return (
    <div className="card w-full shadow-lg bg-[#dbebfa] rounded-none text-[#000000]">
      <figure>
        <img className="w-full h-80 rounded-lg" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{name}</p>
          <div className="flex items-center">
            <p className="mr-1">
              <HiOutlineLocationMarker />
            </p>
            <p>{location}</p>
          </div>
        </div>
        <p>
          Orginal price: <strong>${originalPrice}</strong>
        </p>
        <p>
          Resale price: <strong>${resalePrice}</strong>
        </p>
        <p>Purchaged: {useingFrom}</p>
        <p>Posted on: {postedOn}</p>
        <div className="flex">
          <p className="flex items-center">
            Saller: <strong>{sallerName}</strong>
            {sellerState === "verified" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-1 text-white bg-blue-600 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </p>
          {reportState !== "reported" && (
            <div className="flex items-center mb-3">
              <button
                onClick={() => handleReport(singlecat._id)}
                className="mr-1"
              >
                Report
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="card-actions justify-end">
          <label
            onClick={() => setSelectedCart(singlecat)}
            htmlFor="booking-model"
            className="btn btn w-36 rounded-md"
          >
            Book Now
          </label>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Card;
