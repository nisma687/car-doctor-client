// import App from "../App";
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";

import Bookings from "../pages/Orders/Bookings";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>

        },
        {
          path:'/signUp',
          element:<SignUp/>
        },
        {
          path:'/checkout/:id',
          element:<CheckOut/>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/orders',
          element:<PrivateRoute>
            <Bookings />
          </PrivateRoute>,
        }
      ]
    },
  ]);



export default router;