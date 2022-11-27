import React from "react";
import svg from "../../assets/alien-svgrepo-com.svg";

const Error404 = () => {
  return (
  
      <div className="flex  flex-col text-center my-40 text-red-500">
        <h1 className="lg:text-9xl text-5xl">ERROR!!!</h1>
        <p className="text-4xl text-center">Page Not Found</p>
        <div className="flex lg:text-9xl justify-center">
          <p className="text-9xl">4</p>
          <img className="w-28" src={svg} alt="" />
          <p className="text-9xl">4</p>
        </div>
      </div>
  
  );
};

export default Error404;
