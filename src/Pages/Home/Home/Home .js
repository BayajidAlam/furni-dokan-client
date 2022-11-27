import React from 'react';
import ExtraSection from '../../../components/ExtraSection/ExtraSection';
import Advertise from '../AdvertiseItem/Advertise';
import Banner from '../Banner/Banner';
import CategoriesSection from '../CategoriesSection/CategoriesSection';

const Home  = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Banner></Banner>
      <CategoriesSection></CategoriesSection>
      <Advertise></Advertise>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home ;