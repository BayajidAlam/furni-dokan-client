import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ReportedItems = () => {
  const { data: repotedItem = [],refetch } = useQuery({
    queryKey: ["reported"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/reported");
      const data = res.json();
      return data;
    },
  });
  
  // delete reported item 
  const handleDeleteReported = id => {
   fetch(`http://localhost:5000/reported/${id}`,
   {
    method:'DELETE',
    headers:{
      'content-type':'application/json'
    }
   })
   .then(res=>res.json())
   .then(data=>{
    if(data.deletedCount > 0){
      toast.success('Reported item deleted Successfully')
      refetch()
    }
   })
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Seller Name</th>
            <th>Seller Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {repotedItem.map((item, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{item.name}</td>
              <td>{item.catName}</td>
              <td>{item.sallerName}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={()=>handleDeleteReported(item._id)}>
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportedItems;
