import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../components/BookingModal/BookingModal';
import Card from './Card/Card';

const CategoryPage = () => {

  const  data  = useLoaderData()
  const [ selectedCard, setSelectedCart ] = useState(null)

  return (
      <section>
            {
              data.length === 0?
              <div className='flex justify-center items-center h-screen'>
                <p className='text-3xl'>No items Found!</p>
              </div>
              :  
              <div className='max-w-[1440px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-4'>
              {
              data.map(singlecat=><Card
              key={singlecat._id}
              singlecat={singlecat}
              setSelectedCart={setSelectedCart}
              ></Card>)
              } 
             </div>
            }
            {
              selectedCard && 
              <BookingModal
              selectedCard={selectedCard}
              setSelectedCart={setSelectedCart}
              ></BookingModal>
            }
      </section>
  );
};

export default CategoryPage;