import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from '@tanstack/react-query'
import PaymentModal from "../PaymentModal";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [ payment, setPayment ] = useState(null)

  // get all orders
  const { data:orders=[],refetch } = useQuery({
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
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Seller Email</th>
            <th>Meet Locations</th>
            <th>Price</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>

         {
          orders.map((order,i)=> 
          <tr key={i}
          >
          <th>{i+1}</th>
          <th><img className="w-10 h-10" src={order.picture} alt="" /></th>
          <td>{order.productName?order.productName:'Not Found'}</td>
          <td>{order.sellerEmail?order.sellerEmail:'Not Found'}</td>
          <td>{order.meetLocation?order.meetLocation:'Not Found'}</td>
          <td>{order.price?order.price:'Not Found'}</td>
          <td>
            {
              order?.paid === true ?<p className="text-green-500 text-xl">Paid</p>:
              <label
              onClick={()=>setPayment(order)}
              htmlFor="payment-modal" className="btn btn-sm">pay Now</label>
            }
          </td>
         
        </tr>)
         }
        </tbody>
      </table>
      {
        payment && 
        <PaymentModal
        refetch={refetch}
        setPayment={setPayment}
        payment={payment}
      />
      }
    </div>
  );
};

export default MyOrders;
