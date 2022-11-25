import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllBuyers from "../Pages/Admin/AllBuyers";
import AllSellers from "../Pages/Admin/AllSellers";
import ReportedItems from "../Pages/Admin/ReportedItems";
import Blog from "../Pages/Blog/Blog";
import MyOrders from "../Pages/Buyer/MyOrders/MyOrders";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashBoardLayout from "../Pages/Dashboard/DashBoardLayout";
import Error404 from "../Pages/Error404/Error404";
import Home from "../Pages/Home/Home/Home ";
import Login from "../Pages/LogIn/Login";
import AddAProduct from "../Pages/Saller/AddAProduct";
import MyBuyers from "../Pages/Saller/MyBuyers";
import MyProducts from "../Pages/Saller/MyProducts";
import SignUp from "../Pages/SignUp/SignUp";


export const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement:<Error404></Error404>,
    children:  [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path:'/category/:name',
        element: <CategoryPage></CategoryPage>,
        loader: ({params})=>fetch(`http://localhost:5000/category?name=${params.name}`)
      },
      {
        path:'/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path:'/dashboard',
    element: <DashBoardLayout></DashBoardLayout>,
    errorElement:<Error404></Error404>,
    children: [
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path:'/dashboard/myorders',
        element: <MyOrders></MyOrders>
      },
      {
        path:'/dashboard/addAProduct',
        element: <AddAProduct></AddAProduct>
      },
      {
        path:'/dashboard/myProduct',
        element: <MyProducts></MyProducts>
      },
      {
        path:'/dashboard/myBuyers',
        element: <MyBuyers></MyBuyers>
      },
      {
        path:'/dashboard/allSellers',
        element:<AllSellers></AllSellers>
      },
      {
        path:'dashboard/allbuyers',
        element: <AllBuyers></AllBuyers>
      },
      {
        path:'dashboard/reportedItems',
        element: <ReportedItems></ReportedItems>
      }

    ]
  }
])

