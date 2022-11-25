import React, { useEffect, useState } from 'react';

const AllSellers = () => {

  const [ allSellers, setAllSellers ] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/allSellers?role=seller')
    .then(res=>res.json())
    .then(data=>setAllSellers(data))
  },[])

  return (
    <div>
      <p>{allSellers.length}</p>
    </div>
  );
};

export default AllSellers;