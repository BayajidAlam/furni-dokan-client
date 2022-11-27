import React, { useEffect, useState } from 'react';
import BookingModal from '../../../components/BookingModal/BookingModal';

import AddCard from './AddCard';

const Advertise = () => {
  const [categorys,setCategorys] = useState([])
  const [ selectedCard, setSelectedCart ] = useState(null)
  
    useEffect(()=>{
      fetch('http://localhost:5000/advertisement')
      .then(res=>res.json())
      .then(data=>{
        setCategorys(data)
      })
    },[])

  return (
    <div>
      <p className='text-xl lg:mx-4 font-semibold'>Advertie section</p>
      <div className='max-w-[1440px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-4'>
      {
        categorys.map(category=><AddCard
        key={category._id}
        category={category}
        setSelectedCart={setSelectedCart}
        ></AddCard>)
      }
      </div>

      {
              selectedCard && 
              <BookingModal
              selectedCard={selectedCard}
              setSelectedCart={setSelectedCart}
              ></BookingModal>
            }
    </div>
  );
};

export default Advertise;