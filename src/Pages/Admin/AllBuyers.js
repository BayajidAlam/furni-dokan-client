import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { AiOutlineDelete } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';

const AllBuyers = () => {

  const { data:allBuyers=[],refetch,isLoading } = useQuery({
    queryKey:['allbuyers'],
    queryFn: async () =>{
      const res = await fetch('http://localhost:5000/allbuyers?role=buyer')
      const data = await res.json()
      return data;
    }
  })

     // loader for smooth experience 

     if(isLoading){
      return <div className='flex justify-center mt-80'>
        <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    }

  // admin:delete a buyer 
  function handleDelete(email) {
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
          toast.success('User deleted Successfully!')
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
    <Toaster/>
  </div>
  );
};

export default AllBuyers;