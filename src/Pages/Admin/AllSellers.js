import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useQuery } from '@tanstack/react-query'

const AllSellers = () => {

  const { data:allSellers=[],refetch } = useQuery({
    queryKey:['allSellers'],
    queryFn: async () =>{
      const res = await fetch('http://localhost:5000/allSellers?role=seller')
      const data = await res.json()
      return data;
    }
  })

  // admin:delete a user 
  const handleDelete = (email) =>{
    console.log(email)
        fetch(`http://localhost:5000/deleteuser?email=${email}`,{
          method:"DELETE",
          headers:{
            'Content-type':'application/json'
          } 
        })


      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          refetch()
          console.log(data)
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
          allSellers.map((saller,i)=>
          <tr key={i}>
          <th>{i+1}</th>
          <td>{saller.name}</td>
          <td>{saller.email}</td>
          <td className="text-xl"><button onClick={()=>handleDelete(saller.email)}><AiOutlineDelete/></button></td>
        </tr>)
        }

   
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;
