import React from 'react';
import {
  useQuery,
} from '@tanstack/react-query'
import CategoryCard from '../../../components/CategoryCard/CategoryCard';

const CategoriesSection = () => {

  const {data:categories=[]} = useQuery({
    queryKey: ['categorys'],
    queryFn: () => fetch('http://localhost:5000/categorys',{
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>res.json())
    
  })
 
  return (
   <div className='max-w-[1440px] mx-auto'>
    <p className='text-xl lg:mx-4 font-semibold'>All Category</p>
     <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  my-3 lg:mx-4 md:mx-2'>
      
      {
        categories.map(category=><CategoryCard
        key={category._id}
        category={category}
        ></CategoryCard>)
      }
    </div>
   </div>
  );
};

export default CategoriesSection;