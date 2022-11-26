import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useQuery } from '@tanstack/react-query'
import toast, { Toaster } from 'react-hot-toast';


const AllSellers = () => {

  const { data:allSellers=[],refetch,isLoading } = useQuery({
    queryKey:['allSellers'],
    queryFn: async () =>{
      const res = await fetch('http://localhost:5000/allSellers?role=seller')
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
      <Toaster/>
    </div>
  );
};

export default AllSellers;
