import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from '@tanstack/react-query'

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  // get all orders
  const { data:orders=[] } = useQuery({
    queryKey: ['buyers'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orders?email=${email}`)
      const data = await res.json()
      return data;
    }
  })

  if(orders.length === 0){
    return <p className="flex justify-center text-xl">You Ordered Nothing Yet!</p>
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Seller Email</th>
            <th>Meet Locations</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>

         {
          orders.map((order,i)=> 
          <tr key={i}>
          <th>{i+1}</th>
          <td>{order.productName?order.productName:'Not Found'}</td>
          <td>{order.sellerEmail?order.sellerEmail:'Not Found'}</td>
          <td>{order.meetLocation?order.meetLocation:'Not Found'}</td>
          <td>{order.price?order.price:'Not Found'}</td>
          <td></td>
         
        </tr>)
         }
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
