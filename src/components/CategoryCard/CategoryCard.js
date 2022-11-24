import React from 'react';
import { Link } from 'react-router-dom';
const CategoryCard = ({category}) => {
  const {picture,catName,_id} = category
  return (
    <div className="hero h-60" style={{ backgroundImage: `url(${picture})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <p className='text-3xl mt-6'>{catName}</p>
      <Link to={`/category/${catName}`}><button className="btn h-12 w-32 mt-4  bg-[#dbebfa] text-[#000000]">see All</button></Link>
    </div>
  </div>
</div>
  );
};

export default CategoryCard;