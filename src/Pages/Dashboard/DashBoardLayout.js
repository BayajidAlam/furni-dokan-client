import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';

const DashBoardLayout = () => {
  return (
    <div>
        <div className='bg-[#dbebfa] text-[#112A46]'>
        <NavBar></NavBar>
        </div>
        <div className="drawer drawer-mobile">

          <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">

            <Outlet></Outlet>
            
          
          </div> 

          <div className="drawer-side">
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 

            <ul className="menu p-4 w-80 bg-base-200 text-base-content">
              <li><Link to='/dashboard/myorders'>My Orders</Link></li>
              <li><Link to='/dashboard/addAProduct'>Add a Product</Link></li>
              <li><Link to='/dashboard/myProduct'>My Product</Link></li>
              <li><Link to='/dashboard/myBuyers'>My Buyers</Link></li>
              <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
              <li><Link to='dashboard/allbuyers'>All Buyers</Link></li>
              <li><Link to='dashboard/reportedItems'>Reported Items</Link></li>
              
            </ul>
          
          </div>
        </div>
    </div>
  );
};

export default DashBoardLayout;