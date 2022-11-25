import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { AiOutlineDelete } from "react-icons/ai";

const AllBuyers = () => {

  const { data:allBuyers=[],refetch } = useQuery({
    queryKey:['allbuyers'],
    queryFn: async () =>{
      const res = await fetch('http://localhost:5000/allbuyers?role=buyer')
      const data = await res.json()
      return data;
    }
  })

  // admin:delete a buyer 
  function handleDelete(email) {
    console.log(email);
    fetch(`http://localhost:5000/deleteuser?email=${email}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })


      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          toas
        }
      });
  }



  return (
    <div className="overflow-x-auto">
    <table className="table w-full">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {
        allBuyers.map((buyer,i)=>
        <tr key={i}>
        <th>{i+1}</th>
        <td>{buyer.name}</td>
        <td>{buyer.email}</td>
        <td className="text-xl"><button onClick={()=>handleDelete(buyer.email)}><AiOutlineDelete/></button></td>
      </tr>)
      }

 
      </tbody>
    </table>
  </div>
  );
};

export default AllBuyers;