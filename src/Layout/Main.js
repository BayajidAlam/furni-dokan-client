import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Main = () => {
  return (
    <div>
        <div className='bg-[#dbebfa] text-[#112A46]'>
        <NavBar></NavBar>
        </div>
        <Outlet></Outlet>
        <div className='bg-[#dbebfa]'>
        <Footer></Footer>
        </div>
    </div>
  );
};

export default Main;