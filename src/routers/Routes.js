import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home ";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
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
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  }
])

