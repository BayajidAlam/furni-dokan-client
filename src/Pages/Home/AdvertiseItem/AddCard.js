import React from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";

const AddCard = ({category,setSelectedCart}) => {

  const {picture,name,location,originalPrice,useingFrom,sallerName,postedOn,resalePrice,singlecat,salesStatus} = category

  return (
      salesStatus !== 'unsold' ?"":
      <div className="card w-full shadow-lg bg-[#dbebfa] rounded-none text-[#000000]">
      <figure>
        <img className="w-full h-80 rounded-lg" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
        <p className="font-bold text-xl">{name}</p>
        <div className="flex items-center">
        <p className="mr-1"><HiOutlineLocationMarker/></p>
        <p>{location}</p>
        </div>
        </div>
        <p>Orginal price: <strong>${originalPrice}</strong></p>
        <p>Resale price: <strong>${resalePrice}</strong></p>
        <p>Purchaged: {useingFrom}</p>
        <p>Posted on: {postedOn}</p>
        <div>
          <p>Saller: <strong>{sallerName}</strong>
          </p>
        <p>isVerified</p>
        </div>
        <div className="card-actions justify-end">
          <label 
            onClick={()=>setSelectedCart(category)}
            htmlFor="booking-model" 
            className="btn btn w-36 rounded-md">Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default AddCard;