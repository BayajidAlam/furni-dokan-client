import React from 'react';
import Advertise from '../AdvertiseItem/Advertise';
import Banner from '../Banner/Banner';
import CategoriesSection from '../CategoriesSection/CategoriesSection';

const Home  = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Banner></Banner>
      <Advertise></Advertise>
      <CategoriesSection></CategoriesSection>
    </div>
  );
};

export default Home ;