import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthProvider";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  // get all buyers
  const { data: buyers = [] } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/buyers?email=${email}`);
      const data = await res.json();
      return data;
    },
  });
 
  return buyers.length === 0 ? (
    <div className="flex justify-center my-2">
      <p className="text-xl">Your have no buyer yet</p>
    </div>
  ) : (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map((buyer, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{buyer.productName}</td>
              <td>{buyer.buyerName}</td>
              <td>{buyer.buyerEmail}</td>
              <td>{buyer.buyerphone}</td>
              <td>{buyer.meetLocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBuyers;
