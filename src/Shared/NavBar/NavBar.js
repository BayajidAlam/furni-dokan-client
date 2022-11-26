import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';


const NavBar = () => {

  const { user, signOutUser } = useContext(AuthContext)

  const handleLogOut = () => {
    signOutUser()
    .then(()=>{
      toast.success('Sign Out Successfully')
    })
    .catch(err=>{
      toast.error(err.message)
    })
  }
  const menuItems = 
     <>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {
            user?
           <>
            <li>
                <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
                <Link>
                   <button onClick={handleLogOut}>Sign Out</button>
                </Link>
            </li>
           </>:
            <li>
            <Link to='/login'>Login</Link>
          </li>
        
          } 
           <li>
            <Link to='/blogs'>Blogs</Link>
          </li>
     </>
   
   
  return (
    <div  className="navbar max-w-[1440px] mx-auto flex justify-between">
      <div className="navbar-start">

        {/* for mble  */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           {menuItems}
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-xl">Furni Dokan</a>

      </div>

      {/* for desktop */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
            {menuItems}
        </ul>
      </div>
      <Toaster/>

      <label 
              htmlFor="dashboard-drawer" 
              tabIndex={0} 
              className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
    </div>
  );
};

export default NavBar;
