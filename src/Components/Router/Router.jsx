import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <Login/>
        }
      ]
    },
  ]);

  export default router;