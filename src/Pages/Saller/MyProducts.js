import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const {
    data: myProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myProdcuts", email],
    queryFn: async () => {
      const res = await fetch(
        `https://furni-dokan.vercel.app/myProdcuts?email=${email}`
      );
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

  // admin:delete a item
  const handleDelete = (id) => {
    fetch(`https://furni-dokan.vercel.app/deleteProduct?id=${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
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

  // update a product to advertise
  const handleAdvertise = (id) => {
    const updatedDoc = {
      state: "advertised",
    };
    fetch(`https://furni-dokan.vercel.app/advertisement/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedDoc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success("Added to advertise");
        }
      });
  };

  return myProducts.length === 0 ? (
    <div className="flex justify-center my-2">
      <p className="text-xl">Please add at least one product</p>
    </div>
  ) : (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Details</th>
            <th>Product Price</th>
            <th>sales status</th>
            <th>Delete</th>
            <th>Advertisement State</th>
          </tr>
        </thead>
        <tbody>
          {myProducts.map((product, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={product.picture}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.name}</div>
                    <div className="text-sm opacity-50">
                      {product.conditions}
                    </div>
                  </div>
                </div>
              </td>
              <td>{product.resalePrice}</td>
              <td>{product.salesStatus === "unsold" ? "Unsold" : "Sold"}</td>
              <th>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-ghost btn-xs"
                >
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
              </th>
              <th>
                {product.salesStatus === "unsold" &&
                product.addState !== "advertised" ? (
                  <button
                    onClick={() => handleAdvertise(product._id)}
                    className="btn btn-sm hover:bg-[#dbebfa]  bg-base-200 text-[#000000]"
                  >
                    Advertise
                  </button>
                ) : (
                  <div className="flex items-center">
                    <p>Added</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-2 bg-green-500 p-1 text-white rounded-2xl"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster />
    </div>
  );
};

export default MyProducts;
