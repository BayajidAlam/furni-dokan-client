import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

const AllSellers = () => {
  const {
    data: allSellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allSellers?role=seller");
      const data = await res.json();
      return data;
    },
  });

  // loader for smooth experience
  if (isLoading) {
    return (
      <div className="flex justify-center mt-80">
        <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    );
  }

  // admin:delete a user
  const handleDelete = (email) => {
    console.log(email);
    fetch(`http://localhost:5000/deleteuser?email=${email}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("User deleted Successfully!");
        }
      });
  };

  // verify seeller
  const handleSellerVerify = (email) => {
    console.log(email)
    // const updatedDoc = {
    //   sellerState: "verified",
    // };
    // fetch(`http://localhost:5000/updateSeller/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(updatedDoc),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       refetch();
    //       toast.success("Seller verified Successfully");
    //     }
    //   });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Verify Seller</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allSellers.map((saller, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{saller.name}</td>
              <td>{saller.email}</td>
              <td>
                {saller.sellerState !== "verified" ? (
                  <button
                    onClick={() => handleSellerVerify(saller.email)}
                    className="btn btn-sm  hover:bg-slate-300 w-28 bg-[#dbebfa] text-[#000000]"
                  >
                    Unverified
                  </button>
                ) : (
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-1 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>Verified</p>
                  </div>
                )}
              </td>
              <td className="text-xl">
                <button onClick={() => handleDelete(saller.email)}>
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster />
    </div>
  );
};

export default AllSellers;
