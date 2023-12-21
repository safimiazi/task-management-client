import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Root from "../../Outlets/Root/Root";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashLayout from "../../Outlets/DashLayout/DashLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        
       
      ]
    },
    {
path: "/dashboard",
element: <DashLayout/>,
children: [
    {
    path: "/dashboard",
    element: <Dashboard/>
    }
]
    }
  ]);

  export default router;