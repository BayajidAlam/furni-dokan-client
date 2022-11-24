import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card/Card';

const CategoryPage = () => {

  const  data  = useLoaderData()

  return (
    <div className='max-w-[1440px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-4'>
        {
          data.map(singlecat=><Card
          key={singlecat._id}
          singlecat={singlecat}
          ></Card>)
        }
    </div>
  );
};

export default CategoryPage;