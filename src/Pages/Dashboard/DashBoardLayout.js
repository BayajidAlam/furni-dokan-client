import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useAdmin from "../../hook/useAdmin";
import useSeller from "../../hook/useSeller";
import useUser from "../../hook/useUser";
import NavBar from "../../Shared/NavBar/NavBar";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useUser(user?.email);

  return (
    <div>
      <div className="bg-[#dbebfa] text-[#112A46]">
        <NavBar></NavBar>
      </div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 bg-base-200 text-base-content">
            {isBuyer && (
              <>
                <li>
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addAProduct">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myProduct">My Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myBuyers">My Buyers</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allSellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="dashboard/reportedItems">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
