import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../components/BookingModal/BookingModal';
import Card from './Card/Card';

const CategoryPage = () => {

  const  data  = useLoaderData()
  const [ selectedCard, setSelectedCart ] = useState(null)

  return (
      <section>
              <div className='max-w-[1440px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-4'>
              {
              data.map(singlecat=><Card
              key={singlecat._id}
              singlecat={singlecat}
              setSelectedCart={setSelectedCart}
              ></Card>)
              } 
             </div>
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